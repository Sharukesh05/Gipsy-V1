import { Bell } from 'lucide-react'

export function NotificationButton() {
  return (
    <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-purple-400/30 hover:bg-white/10 hover:text-white">
      <Bell size={16} />
      <span className="absolute right-1.5 top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-1 text-[10px] font-semibold text-white">
        3
      </span>
    </button>
  )
}
