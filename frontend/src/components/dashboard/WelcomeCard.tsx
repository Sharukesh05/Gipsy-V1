import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'

export function WelcomeCard() {
  return (
    <GlassCard variant="glow" glowColor="purple" className="overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),_transparent_45%)]" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="relative flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-purple-200">
            <Sparkles size={12} />
            Daily workspace
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Good morning, Sharukesh 👋
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
            Welcome back to Gipsy. Your workspace is ready, and your AI assistant is primed to help you build something remarkable today.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
          <p className="font-medium text-white">Focus mode</p>
          <p className="mt-1 text-slate-400">Deep work • 3 priorities • 1 insight</p>
        </div>
      </motion.div>
    </GlassCard>
  )
}
