import { motion } from 'framer-motion'
import { ChevronLeft, Sparkles } from 'lucide-react'
import { navItems } from '@/data/mockData'
import { useAppStore } from '@/store/useAppStore'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const { sidebarOpen, activeNav, setActiveNav, toggleSidebar } = useAppStore()

  return (
    <>
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col transition-transform duration-300 ease-in-out',
          'glass-strong border-r border-white/5',
          'lg:relative lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center gap-3 border-b border-white/5 px-5 py-5">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 neon-glow-purple">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-space-900" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold tracking-tight text-white">Gipsy</h1>
            <p className="text-[10px] font-medium uppercase tracking-widest text-purple-400/80">
              AI Assistant
            </p>
          </div>
          <button
            type="button"
            onClick={toggleSidebar}
            className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
            Menu
          </p>
          {navItems.map((item, index) => {
            const isActive = activeNav === item.id
            return (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveNav(item.id)}
                className={cn(
                  'group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                  isActive
                    ? 'bg-purple-500/15 text-purple-200'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-200',
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-transparent"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <Icon
                  name={item.icon}
                  size={18}
                  className={cn(
                    'relative z-10',
                    isActive ? 'text-purple-400' : 'text-slate-500 group-hover:text-slate-300',
                  )}
                />
                <span className="relative z-10 flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="relative z-10 flex h-5 min-w-5 items-center justify-center rounded-full bg-purple-500/20 px-1.5 text-[10px] font-semibold text-purple-300">
                    {item.badge}
                  </span>
                )}
              </motion.button>
            )
          })}
        </nav>

        <div className="border-t border-white/5 p-4">
          <div className="glass rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 text-sm font-bold text-white">
                A
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">Alex Morgan</p>
                <p className="truncate text-[11px] text-slate-500">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
          aria-hidden
        />
      )}
    </>
  )
}
