import { motion } from 'framer-motion'
import { quickActions } from '@/data/mockData'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

export function QuickActions() {
  return (
    <GlassCard>
      <SectionHeader title="Quick Actions" subtitle="Launch common workflows" />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.id}
            type="button"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'group flex flex-col items-center gap-2.5 rounded-xl border border-white/5 bg-gradient-to-br p-4 text-center transition-colors hover:border-white/10',
              action.color,
            )}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-white/10">
              <Icon name={action.icon} size={20} className="text-white/80" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">{action.label}</p>
              <p className="mt-0.5 text-[10px] text-slate-500">{action.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </GlassCard>
  )
}
