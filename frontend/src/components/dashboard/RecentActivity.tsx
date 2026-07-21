import { motion } from 'framer-motion'
import { recentActivity } from '@/data/mockData'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

const typeColors = {
  ai: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
  task: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  system: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
  chat: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
}

export function RecentActivity() {
  return (
    <GlassCard className="h-full">
      <SectionHeader title="Recent Activity" subtitle="Latest updates from Gipsy" />

      <div className="relative space-y-0">
        <div className="absolute bottom-2 left-4.75 top-2 w-px bg-linear-to-b from-purple-500/30 via-blue-500/20 to-transparent" />

        {recentActivity.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.07 }}
            className="relative flex gap-3 pb-4 last:pb-0"
          >
            <div
              className={cn(
                'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                typeColors[item.type],
              )}
            >
              <Icon name={item.icon} size={16} />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-slate-200">{item.title}</p>
                <span className="shrink-0 text-[10px] text-slate-600">{item.time}</span>
              </div>
              <p className="mt-0.5 text-xs text-slate-500">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
