import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarHeaderProps {
  collapsed: boolean
  onToggle: () => void
}

export function SidebarHeader({ collapsed, onToggle }: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600 via-fuchsia-500 to-blue-500 shadow-[0_0_40px_rgba(138,92,246,0.35)]">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">Gipsy v1</p>
            <p className="truncate text-[10px] uppercase tracking-[0.24em] text-slate-400">
              AI Assistant
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onToggle}
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white',
          collapsed && 'ml-auto',
        )}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
    </div>
  )
}
