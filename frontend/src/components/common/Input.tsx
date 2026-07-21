import type { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
}

export default function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400">
      {icon}
      <input className={`w-full bg-transparent outline-none placeholder:text-slate-500 ${className}`} {...props} />
    </label>
  )
}
