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
}

export function ChatWindow({ messages }: ChatWindowProps) {
  return (
    <div className="flex h-[560px] flex-col rounded-[28px] border border-white/10 bg-[#121218]/80 p-4">
      <div className="flex-1 space-y-4 overflow-y-auto pr-2">
        {messages.map((message) => (
          <MessageBubble key={message.id} {...message} />
        ))}
        <TypingIndicator />
      </div>
    </div>
  )
}
