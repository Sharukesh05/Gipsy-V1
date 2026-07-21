import { motion } from 'framer-motion'
import {
  Bell,
  Menu,
  Mic,
  Search,
  Settings,
} from 'lucide-react'
import { useAppStore } from '@/store/useAppStore'
import { Button } from '@/components/ui/Button'

export function TopBar() {
  const { toggleSidebar, sidebarOpen } = useAppStore()

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-white/5 bg-space-950/60 px-4 backdrop-blur-xl sm:px-6"
    >
      {!sidebarOpen && (
        <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Open sidebar">
          <Menu size={20} />
        </Button>
      )}

      <div className="relative hidden flex-1 sm:block sm:max-w-md">
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
        />
        <input
          type="search"
          placeholder="Search tasks, chats, files..."
          className="w-full rounded-xl border border-white/5 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-600 transition-colors focus:border-purple-500/30 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-purple-500/20"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 md:inline">
          ⌘K
        </kbd>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400 sm:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Gipsy Online
        </span>

        <Button variant="ghost" size="icon" aria-label="Voice input">
          <Mic size={18} />
        </Button>

        <button
          type="button"
          className="relative rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-purple-500 ring-2 ring-space-950" />
        </button>

        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings size={18} />
        </Button>
      </div>
    </motion.header>
  )
}
