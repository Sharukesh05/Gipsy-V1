import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'purple' | 'blue' | 'cyan' | 'success' | 'warning'
  size?: 'sm' | 'md'
  className?: string
}

const variants = {
  default: 'bg-white/10 text-slate-300 border-white/10',
  purple: 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  blue: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  cyan: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25',
  success: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
  warning: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
}

export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
