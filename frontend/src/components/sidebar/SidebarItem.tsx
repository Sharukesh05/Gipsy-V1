import { motion } from 'framer-motion'
import type { NavItem } from '@/types'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

interface SidebarItemProps {
  item: NavItem
  active: boolean
  collapsed: boolean
  onNavigate: () => void
}

export function SidebarItem({ item, active, collapsed, onNavigate }: SidebarItemProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ x: 2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onNavigate}
      className={cn(
        'group relative flex w-full items-center rounded-2xl border border-transparent px-3 py-3 text-left transition-all duration-200',
        active
          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/10 text-white shadow-[0_0_0_1px_rgba(167,139,250,0.2)]'
          : 'text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white',
      )}
    >
      <div
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all',
          active
            ? 'bg-purple-500/20 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.16)]'
            : 'bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white',
        )}
      >
        <Icon name={item.icon} size={18} />
      </div>

      {!collapsed && (
        <div className="ml-3 flex min-w-0 flex-1 items-center">
          <span className="truncate text-sm font-medium">{item.label}</span>
          {item.badge ? (
            <span className="ml-auto rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-semibold text-purple-200">
              {item.badge}
            </span>
          ) : null}
        </div>
      )}

      {collapsed && <span className="sr-only">{item.label}</span>}
    </motion.button>
  )
}
