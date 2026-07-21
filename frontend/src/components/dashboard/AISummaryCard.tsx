import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb, Sparkles } from 'lucide-react'
import { aiSummary } from '@/data/mockData'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { AIAvatar } from '@/components/dashboard/AIAvatar'

export function AISummaryCard() {
  return (
    <GlassCard variant="glow" glowColor="purple" className="relative overflow-hidden">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex shrink-0 justify-center lg:justify-start">
          <AIAvatar size="lg" />
        </div>

        <div className="min-w-0 flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-purple-300/80"
          >
            {aiSummary.greeting}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {aiSummary.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400"
          >
            {aiSummary.insight}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 space-y-2"
          >
            {aiSummary.suggestions.map((suggestion) => (
              <li key={suggestion} className="flex items-start gap-2 text-xs text-slate-400">
                <Lightbulb size={14} className="mt-0.5 shrink-0 text-amber-400/80" />
                <span>{suggestion}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 flex flex-wrap gap-3"
          >
            <Button size="sm">
              <Sparkles size={14} />
              Ask Gipsy
            </Button>
            <Button variant="secondary" size="sm">
              View full analysis
              <ArrowRight size={14} />
            </Button>
          </motion.div>
        </div>
      </div>
    </GlassCard>
  )
}
