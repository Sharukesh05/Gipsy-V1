import { motion } from 'framer-motion'
import { TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { productivityStats } from '@/data/mockData'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { cn } from '@/lib/utils'

const colorStyles = {
  purple: 'from-purple-500/20 to-purple-600/5 text-purple-400',
  blue: 'from-blue-500/20 to-blue-600/5 text-blue-400',
  cyan: 'from-cyan-500/20 to-cyan-600/5 text-cyan-400',
  pink: 'from-pink-500/20 to-pink-600/5 text-pink-400',
}

const barColors = {
  purple: 'purple' as const,
  blue: 'blue' as const,
  cyan: 'cyan' as const,
  pink: 'pink' as const,
}

export function ProductivityOverview() {
  return (
    <GlassCard className="h-full">
      <SectionHeader
        title="Productivity Overview"
        subtitle="Today's performance metrics"
      />

      <div className="grid grid-cols-2 gap-3">
        {productivityStats.map((stat, index) => {
          const isPositive = stat.change >= 0
          const TrendIcon = stat.change === 0 ? Minus : isPositive ? TrendingUp : TrendingDown

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              className={cn(
                'rounded-xl bg-linear-to-br p-3.5',
                colorStyles[stat.color as keyof typeof colorStyles],
              )}
            >
              <p className="text-[11px] font-medium text-slate-400">{stat.label}</p>
              <div className="mt-1 flex items-end justify-between">
                <span className="text-2xl font-bold text-white">
                  {stat.value}
                  {stat.label === 'Deep Work' && (
                    <span className="text-sm font-normal text-slate-500">h</span>
                  )}
                </span>
                <span
                  className={cn(
                    'flex items-center gap-0.5 text-[10px] font-medium',
                    isPositive ? 'text-emerald-400' : 'text-red-400',
                  )}
                >
                  <TrendIcon size={12} />
                  {Math.abs(stat.change)}%
                </span>
              </div>
              <div className="mt-3">
                <ProgressBar
                  value={stat.label === 'Deep Work' ? (stat.value / 8) * 100 : stat.value}
                  color={barColors[stat.color as keyof typeof barColors]}
                  size="sm"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </GlassCard>
  )
}
