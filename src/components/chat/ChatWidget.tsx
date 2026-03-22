'use client'

import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'
import { Send } from 'lucide-react'
import BrandMark from '@/components/ui/BrandMark'
import ChatTrigger from './ChatTrigger'
import ChatMessage, { TypingIndicator } from './ChatMessage'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  streaming?: boolean
}

const SUGGESTED_QUESTIONS = [
  "What projects have you built?",
  "How did you prevent overselling in Lukess?",
  "What would a custom e-commerce system cost?",
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    setShowScrollButton(false)
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400)
    }
  }, [isOpen])

  // Feature 1 — Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const timer = setTimeout(() => {
        setMessages([{
          id: 'welcome',
          role: 'assistant',
          content: "Hey! I know Adrian's work inside out — his projects, stack, blog posts, and how he works.\n\nAsk me anything, whether you're a founder with a retail problem, a developer curious about the architecture, or a recruiter evaluating fit.",
          streaming: false,
        }])
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isOpen, messages.length])

  // Session persistence
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('chat_messages')
      if (saved) {
        const parsed = JSON.parse(saved).map((m: Message) => ({
          ...m,
          streaming: false, // always false on reload to prevent UI bugs
        }))
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed)
        }
      }
    } catch {
      // silently fail
    }
  }, [])

  useEffect(() => {
    try {
      if (messages.length > 0) {
        sessionStorage.setItem('chat_messages', JSON.stringify(messages))
      }
    } catch {
      // silently fail
    }
  }, [messages])

  // Feature 2 — Sound effects via Web Audio API
  const playSound = (type: 'send' | 'receive') => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      const ctx = new AudioContextClass()
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      
      if (type === 'send') {
        oscillator.frequency.setValueAtTime(880, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.06)
        gainNode.gain.setValueAtTime(0.04, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.08)
      } else {
        oscillator.frequency.setValueAtTime(660, ctx.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08)
        gainNode.gain.setValueAtTime(0.03, ctx.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1)
        oscillator.start(ctx.currentTime)
        oscillator.stop(ctx.currentTime + 0.1)
      }
    } catch {
      // Silently fail if AudioContext not available
    }
  }

  const handleSend = async (text: string = input) => {
    const trimmedInput = text.trim()
    if (!trimmedInput || isLoading) return
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmedInput,
    }
    
    // Add user message with sliding window (max 20 history)
    setMessages(prev => {
      const updated = [...prev, userMessage]
      return updated.length > 20 ? updated.slice(-20) : updated
    })
    
    playSound('send')
    
    setInput('')
    if (inputRef.current) {
      inputRef.current.style.height = '168px'
    }
    setIsLoading(true)
    
    // Add empty assistant message for streaming
    const assistantId = (Date.now() + 1).toString()
    const assistantMessage: Message = {
      id: assistantId,
      role: 'assistant',
      content: '',
      streaming: true,
    }
    setMessages(prev => [...prev, assistantMessage])
    
    try {
      const apiMessages = [...messages, userMessage]
        .slice(-20)
        .map(m => ({ 
          role: m.role === 'assistant' ? 'model' : 'user', 
          content: m.content 
        }))
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })
      
      if (!response.ok) throw new Error('API error')
      
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let accumulated = ''
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          
          accumulated += decoder.decode(value, { stream: true })
          
          // Update the streaming message
          setMessages(prev => prev.map(m =>
            m.id === assistantId
              ? { ...m, content: accumulated }
              : m
          ))
        }
      }
      
      // Mark streaming as done
      setMessages(prev => prev.map(m =>
        m.id === assistantId
          ? { ...m, streaming: false }
          : m
      ))
      
      playSound('receive')
      
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => prev.map(m =>
        m.id === assistantId
          ? { 
              ...m, 
              content: "I'm sorry, I'm having trouble connecting. Feel free to reach Adrian directly at hello@adrianoliver.dev", 
              streaming: false 
            }
          : m
      ))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {!isOpen && <ChatTrigger isOpen={isOpen} onToggle={() => setIsOpen(o => !o)} />}

      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <m.div
              className="fixed inset-0 bg-black/40 z-[7999] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <m.div
              key="chat-panel"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                duration: 0.4, 
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.2 }
              }}
            className="fixed top-0 right-0 bottom-0 z-[8000] w-full md:w-[380px] bg-[var(--color-surface)] border-l border-[var(--color-border)] shadow-2xl flex flex-col chat-panel"
            role="dialog"
            aria-label="Portfolio AI assistant"
          >
            {/* Header */}
            <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BrandMark size={20} />
                <div>
                  <h3 className="font-serif text-lg text-[var(--color-text-primary)] leading-none">
                    Ask Adrian&apos;s AI
                  </h3>
                  <p className="font-mono text-[10px] text-[var(--color-text-secondary)] mt-1 uppercase tracking-wider">
                    Ask about my work, stack, or how I can help
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setMessages([])
                    sessionStorage.removeItem('chat_messages')
                  }}
                  aria-label="Clear conversation"
                  style={{
                    padding: '4px 10px',
                    fontFamily: 'monospace',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    border: '1px solid var(--color-border)',
                    borderRadius: '6px',
                    color: 'var(--color-text-secondary)',
                    background: 'transparent',
                    cursor: 'pointer',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--color-accent)'
                    el.style.color = 'var(--color-accent)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--color-border)'
                    el.style.color = 'var(--color-text-secondary)'
                  }}
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  style={{
                    padding: '6px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    color: 'var(--color-text-secondary)',
                    background: 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 200ms',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--color-accent)'
                    el.style.color = 'var(--color-accent)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.borderColor = 'var(--color-border)'
                    el.style.color = 'var(--color-text-secondary)'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 chat-messages relative"
              style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
              data-lenis-prevent
              onScroll={(e) => {
                const el = e.currentTarget
                const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
                setShowScrollButton(distanceFromBottom > 100)
              }}
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
                  <div className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center bg-[var(--color-background)]">
                    <BrandMark size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-xl text-[var(--color-text-primary)]">How can I help you?</h4>
                    <p className="font-sans text-sm text-[var(--color-text-secondary)]">
                      Ask about Adrian&apos;s projects, technical stack, or how he can assist your business.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2 w-full pt-4">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-left p-3 text-xs font-mono border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all group active:scale-95"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence mode="popLayout">
                {messages.map((m) => (
                  <ChatMessage key={m.id} message={m} />
                ))}
              </AnimatePresence>

              {messages.length === 1 && messages[0].id === 'welcome' && (
                <div className="flex flex-col gap-2 px-4 pb-2">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="text-left p-3 text-xs font-mono border border-[var(--color-border)] rounded-xl hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all active:scale-95"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <TypingIndicator />
              )}
              
              <div ref={messagesEndRef} />

              {showScrollButton && (
                <div className="sticky bottom-2 flex justify-end pr-2">
                  <button
                    onClick={scrollToBottom}
                    className="p-3 rounded-full border shadow-lg transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-secondary)',
                    }}
                    aria-label="Scroll to bottom"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12l7 7 7-7"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-background)]">
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex items-end gap-2"
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSend()
                    }
                  }}
                  placeholder="Ask anything..."
                  rows={1}
                  className="flex-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-4 py-2 text-sm font-mono text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent)] transition-colors placeholder:text-[var(--color-text-secondary)]/50 resize-none overflow-y-auto leading-relaxed chat-messages"
                  style={{ minHeight: '168px', maxHeight: '168px' }}
                  aria-label="Message input"
                  data-lenis-prevent="true"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`
                    p-2.5 rounded-xl transition-all
                    \${input.trim() && !isLoading 
                      ? 'bg-[var(--color-accent)] text-black shadow-lg shadow-amber-500/20 active:scale-95' 
                      : 'bg-[var(--color-border)] text-[var(--color-text-secondary)] grayscale'
                    }
                  `}
                >
                  <Send size={18} />
                </button>
              </form>
              {input.length > 400 && (
                <p className="font-mono text-[10px] mt-1 text-right"
                  style={{ 
                    color: input.length > 480 
                      ? 'var(--color-danger, #ef4444)' 
                      : 'var(--color-text-secondary)' 
                  }}>
                  {500 - input.length} characters remaining
                </p>
              )}
            </div>
          </m.div>
        </>
        )}
      </AnimatePresence>
    </>
  )
}
