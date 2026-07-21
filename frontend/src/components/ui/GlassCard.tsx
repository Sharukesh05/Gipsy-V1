import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'strong' | 'glow'
  glowColor?: 'purple' | 'blue' | 'cyan'
  noPadding?: boolean
}

const glowMap = {
  purple: 'neon-glow-purple',
  blue: 'neon-glow-blue',
  cyan: 'neon-glow-blue',
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  glowColor = 'purple',
  noPadding = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'rounded-2xl',
        variant === 'strong' ? 'glass-strong' : 'glass',
        variant === 'glow' && glowMap[glowColor],
        !noPadding && 'p-5',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
