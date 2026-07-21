import { motion } from 'framer-motion'
import { Activity, Cpu, HardDrive, Wifi } from 'lucide-react'
import { systemMetrics } from '@/data/mockData'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { cn } from '@/lib/utils'

const metricIcons: Record<string, React.ReactNode> = {
  cpu: <Cpu size={16} />,
  memory: <HardDrive size={16} />,
  network: <Wifi size={16} />,
  gpu: <Activity size={16} />,
}

const trendLabels = {
  up: 'text-amber-400',
  down: 'text-emerald-400',
  stable: 'text-slate-500',
}

export function SystemMonitor() {
  return (
    <GlassCard className="h-full">
      <SectionHeader
        title="System Monitor"
        subtitle="Real-time resource usage"
        action={
          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Live
          </span>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {systemMetrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-lg',
                    metric.color === 'purple' && 'bg-purple-500/15 text-purple-400',
                    metric.color === 'blue' && 'bg-blue-500/15 text-blue-400',
                    metric.color === 'cyan' && 'bg-cyan-500/15 text-cyan-400',
                    metric.color === 'pink' && 'bg-pink-500/15 text-pink-400',
                  )}
                >
                  {metricIcons[metric.id]}
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-300">{metric.label}</p>
                  <p className={cn('text-[10px] capitalize', trendLabels[metric.trend])}>
                    {metric.trend === 'stable' ? 'Stable' : `${metric.trend === 'up' ? '↑' : '↓'} Trending`}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <motion.span
                  key={metric.value}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-lg font-semibold text-white"
                >
                  {metric.value}
                </motion.span>
                <span className="text-xs text-slate-500">{metric.unit}</span>
              </div>
            </div>
            <ProgressBar
              value={metric.id === 'network' ? Math.min(metric.value / 2, 100) : metric.value}
              color={metric.color}
              size="sm"
            />
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
