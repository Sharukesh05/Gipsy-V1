import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`glass rounded-2xl border border-white/10 p-6 shadow-[0_20px_60px_rgba(3,7,18,0.35)] ${className}`} {...props}>
      {children}
    </div>
  )
}
