import { GoogleGenAI } from '@google/genai'
import { PORTFOLIO_SYSTEM_PROMPT } from '@/lib/chat-knowledge'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

// Simple in-memory rate limiter
const requestCounts = new Map<string, { count: number; resetTime: number }>()

const MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite']

interface ChatMessage {
  role: string
  content: string
}

async function tryWithFallback(ai: GoogleGenAI, sanitizedMessages: ChatMessage[], systemPrompt: string) {
  for (const model of MODELS) {
    try {
      const history = sanitizedMessages
        .slice(0, -1)
        .map((msg: { role: string; content: string }) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        }))

      const lastMessage = sanitizedMessages[sanitizedMessages.length - 1]

      const chat = ai.chats.create({
        model,
        config: {
          systemInstruction: systemPrompt,
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
        history,
      })
      
      const response = await chat.sendMessageStream({
        message: lastMessage.content,
      })
      
      return response
    } catch (error) {
      const err = error as { status?: number; message?: string }
      const isRateLimit = err?.status === 429 || 
        err?.message?.toLowerCase().includes('quota') ||
        err?.message?.toLowerCase().includes('rate')
      
      if (isRateLimit && model !== MODELS[MODELS.length - 1]) {
        console.warn(`Rate limit hit on \${model}, falling back to next...`)
        continue // try next model
      }
      throw error
    }
  }
  throw new Error('All models failed')
}

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

    const response = await tryWithFallback(ai, sanitizedMessages, PORTFOLIO_SYSTEM_PROMPT)

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
      "I'm at capacity right now — please try again in a few minutes, or reach Adrian directly at hello@adrianoliver.dev",
      { 
        status: 200, // return 200 so the frontend displays it as a message
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      }
    )
  }
}
