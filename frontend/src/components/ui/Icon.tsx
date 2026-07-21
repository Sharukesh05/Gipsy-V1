import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'

type IconName = keyof typeof Icons

interface IconProps {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size = 18, className }: IconProps) {
  const LucideIcon = Icons[name as IconName] as React.ComponentType<{
    size?: number
    className?: string
  }>

  if (!LucideIcon) return null

  return <LucideIcon size={size} className={cn('shrink-0', className)} />
}
