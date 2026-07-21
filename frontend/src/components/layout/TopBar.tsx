import { Bell, Search, Settings } from 'lucide-react'
import Avatar from '@/components/common/Avatar'

export function TopBar() {
  return (
    <header className="flex h-17.5 items-center justify-between border-b border-white/10 bg-space-900/70 px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-neon-purple to-neon-cyan text-white">
          <span className="text-sm font-semibold">G</span>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-white">Gipsy</p>
          <p className="text-xs text-slate-400">Control center</p>
        </div>
      </div>

      <div className="hidden flex-1 px-4 md:block">
        <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400">
          <Search size={16} />
          <input className="w-full bg-transparent outline-none placeholder:text-slate-500" placeholder="Search workspace" />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10">
          <Bell size={16} />
        </button>
        <button className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10">
          <Settings size={16} />
        </button>
        <Avatar name="A" size="sm" />
      </div>
    </header>
  )
}
