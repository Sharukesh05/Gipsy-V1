import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  max?: number
  color?: 'purple' | 'blue' | 'cyan' | 'pink'
  size?: 'sm' | 'md'
  showValue?: boolean
  label?: string
  className?: string
}

const colorMap = {
  purple: 'from-purple-500 to-purple-400',
  blue: 'from-blue-500 to-blue-400',
  cyan: 'from-cyan-500 to-cyan-400',
  pink: 'from-pink-500 to-pink-400',
}

export function ProgressBar({
  value,
  max = 100,
  color = 'purple',
  size = 'md',
  showValue = false,
  label,
  className,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          {label && <span className="text-slate-400">{label}</span>}
          {showValue && (
            <span className="font-mono text-slate-300">
              {value}
              {max === 100 ? '%' : ''}
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          'overflow-hidden rounded-full bg-white/5',
          size === 'sm' ? 'h-1.5' : 'h-2.5',
        )}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className={cn(
            'h-full rounded-full bg-linear-to-r',
            colorMap[color],
          )}
          style={{
            boxShadow: `0 0 12px rgba(168, 85, 247, 0.3)`,
          }}
        />
      </div>
    </div>
  )
}
