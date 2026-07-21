import { useEffect, useRef } from 'react'
import { MessageBubble } from './MessageBubble'
import { TypingIndicator } from './TypingIndicator'

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

interface ChatWindowProps {
  messages: ChatMessage[]
  isLoading: boolean
}

export function ChatWindow({ messages, isLoading }: ChatWindowProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className="flex h-140 flex-col rounded-[28px] border border-white/10 bg-[#121218]/80 p-4">
      <div ref={containerRef} className="flex-1 space-y-4 overflow-y-auto pr-2">
        {messages.map((message) => (
          <MessageBubble key={message.id} {...message} />
        ))}
        {isLoading && <TypingIndicator />}
      </div>
    </div>
  )
}
