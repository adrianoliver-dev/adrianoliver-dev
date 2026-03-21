import { GoogleGenAI } from '@google/genai'
import { PORTFOLIO_SYSTEM_PROMPT } from '@/lib/chat-knowledge'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

// Simple in-memory rate limiter
const requestCounts = new Map<string, { count: number; resetTime: number }>()

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
    const now = Date.now()
    const windowMs = 60 * 1000 // 1 minuto
    const maxRequests = 20

    const record = requestCounts.get(ip)
    if (record) {
      if (now < record.resetTime) {
        if (record.count >= maxRequests) {
          return new Response('Too many requests', { status: 429 })
        }
        record.count++
      } else {
        requestCounts.set(ip, { count: 1, resetTime: now + windowMs })
      }
    } else {
      requestCounts.set(ip, { count: 1, resetTime: now + windowMs })
    }

    // Input validation
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response('Invalid request', { status: 400 })
    }

    // Limit conversation history
    const limitedMessages = messages.slice(-10)

    // Limit message length and sanitize roles
    const sanitizedMessages = limitedMessages.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'assistant' || msg.role === 'model' ? 'model' : 'user',
      content: String(msg.content).slice(0, 500),
    }))

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return new Response('API key not configured', { status: 500 })
    }

    const ai = new GoogleGenAI({ apiKey })

    // Convert messages to Gemini format
    // Filter out system prompt if it exists in history, we'll use systemInstruction instead
    const history = sanitizedMessages
      .slice(0, -1)
      .map((msg: { role: string; content: string }) => ({
        role: msg.role,
        parts: [{ text: msg.content }],
      }))

    const lastMessage = sanitizedMessages[sanitizedMessages.length - 1]

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: PORTFOLIO_SYSTEM_PROMPT,
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
      history,
    })

    const response = await chat.sendMessageStream({
      message: lastMessage.content,
    })

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          for await (const chunk of response) {
            const text = chunk.text
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
          controller.close()
        } catch (err) {
          console.error('Streaming error:', err)
          controller.error(err)
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
