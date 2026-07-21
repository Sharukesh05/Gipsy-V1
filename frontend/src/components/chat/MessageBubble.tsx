import { motion } from 'framer-motion'
import { Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MessageBubbleProps {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export function MessageBubble({ role, content, timestamp }: MessageBubbleProps) {
  const isAssistant = role === 'assistant'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn('flex gap-3', isAssistant ? 'justify-start' : 'justify-end')}
    >
      {isAssistant && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500/20 to-blue-500/20 text-purple-200">
          <Bot size={16} />
        </div>
      )}

      <div className={cn('max-w-[80%]', !isAssistant && 'text-right')}>
        <div
          className={cn(
            'rounded-2xl px-4 py-3 text-sm leading-7',
            isAssistant
              ? 'bg-white/5 text-slate-300'
              : 'bg-linear-to-r from-purple-500/20 to-blue-500/20 text-white',
          )}
        >
          {content}
        </div>
        <p className="mt-1 text-[11px] text-slate-500">{timestamp}</p>
      </div>

      {!isAssistant && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-slate-200">
          <User size={16} />
        </div>
      )}
    </motion.div>
  )
}
