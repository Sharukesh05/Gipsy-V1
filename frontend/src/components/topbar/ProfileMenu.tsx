import { ChevronDown } from 'lucide-react'

export function ProfileMenu() {
  return (
    <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-2 py-2 text-left transition-all duration-200 hover:border-purple-400/30 hover:bg-white/10">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-500/30 to-blue-500/30 text-sm font-semibold text-white">
        AM
      </div>
      <div className="hidden sm:block">
        <p className="text-sm font-medium text-white">Alex Morgan</p>
        <p className="text-xs text-slate-400">Product Designer</p>
      </div>
      <ChevronDown size={16} className="hidden text-slate-400 sm:block" />
    </button>
  )
}
