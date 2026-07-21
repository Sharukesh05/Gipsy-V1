interface SidebarFooterProps {
  collapsed: boolean
}

export function SidebarFooter({ collapsed }: SidebarFooterProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#18181B]/90 p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-purple-500/30 to-blue-500/30 text-sm font-semibold text-white">
          AM
        </div>
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">Alex Morgan</p>
            <p className="truncate text-[11px] text-slate-400">Version v1.0</p>
          </div>
        )}
      </div>
    </div>
  )
}
