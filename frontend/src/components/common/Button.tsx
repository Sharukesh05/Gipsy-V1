import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:opacity-90'
      : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'

  return (
    <button className={`rounded-xl px-4 py-2 text-sm font-medium transition ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}
