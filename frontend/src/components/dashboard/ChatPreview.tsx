import { motion } from 'framer-motion'
import { ArrowUpRight, Bot, User } from 'lucide-react'
import { chatPreviewMessages } from '@/data/mockData'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function ChatPreview() {
  return (
    <GlassCard className="flex h-full flex-col" variant="glow" glowColor="blue">
      <SectionHeader
        title="Chat Preview"
        subtitle="Latest conversation with Gipsy"
        action={
          <Button variant="ghost" size="sm">
            Open chat
            <ArrowUpRight size={14} />
          </Button>
        }
      />

      <div className="flex-1 space-y-3 overflow-hidden">
        {chatPreviewMessages.map((message, index) => {
          const isAssistant = message.role === 'assistant'
          return (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={cn('flex gap-2.5', !isAssistant && 'flex-row-reverse')}
            >
              <div
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg',
                  isAssistant
                    ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                    : 'bg-white/10',
                )}
              >
                {isAssistant ? (
                  <Bot size={14} className="text-white" />
                ) : (
                  <User size={14} className="text-slate-300" />
                )}
              </div>
              <div className={cn('max-w-[85%]', !isAssistant && 'text-right')}>
                <div
                  className={cn(
                    'rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed',
                    isAssistant
                      ? 'rounded-tl-sm bg-white/5 text-slate-300'
                      : 'rounded-tr-sm bg-purple-500/15 text-purple-100',
                  )}
                >
                  {message.content}
                </div>
                <p className="mt-1 text-[10px] text-slate-600">{message.timestamp}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Ask Gipsy anything..."
          className="flex-1 rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
        />
        <Button size="sm">Send</Button>
      </div>
    </GlassCard>
  )
}
