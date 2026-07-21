import { motion } from 'framer-motion'
import { Paperclip, Sparkles } from 'lucide-react'
import { ChatWindow } from '@/components/chat/ChatWindow'
import { ChatInput } from '@/components/chat/ChatInput'
import { SuggestedPrompts } from '@/components/chat/SuggestedPrompts'
import { ConversationHistory } from '@/components/chat/ConversationHistory'
import { ModelSelector } from '@/components/chat/ModelSelector'
import { GlassCard } from '@/components/ui/GlassCard'

const sampleMessages = [
  {
    id: '1',
    role: 'assistant' as const,
    content: 'Hello! I’m Gipsy. I can help you summarize work, draft ideas, or plan your next move.',
    timestamp: '09:41',
  },
  {
    id: '2',
    role: 'user' as const,
    content: 'Can you help me outline the next steps for the dashboard?',
    timestamp: '09:42',
  },
  {
    id: '3',
    role: 'assistant' as const,
    content: 'Absolutely. I’d focus on refining the layout, polishing motion, and tightening the content hierarchy.',
    timestamp: '09:43',
  },
]

export default function Chat() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }} className="space-y-6">
      <GlassCard variant="glow" glowColor="blue" className="overflow-hidden">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-blue-200">
              <Sparkles size={12} />
              AI Chat
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Conversational workspace</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
              Ask questions, brainstorm ideas, or review progress with a polished assistant experience.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ModelSelector />
            <button className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <Paperclip size={16} />
            </button>
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <ChatWindow messages={sampleMessages} />
        </div>
        <div className="xl:col-span-4 space-y-6">
          <ConversationHistory />
          <SuggestedPrompts />
        </div>
      </div>

      <GlassCard className="p-4">
        <ChatInput />
      </GlassCard>
    </motion.div>
  )
}
