import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '@/data/mockData'
import { useAppStore } from '@/store/useAppStore'
import { cn } from '@/lib/utils'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'
import { SidebarItem } from './SidebarItem'

const routeToId: Record<string, string> = {
  '/dashboard': 'dashboard',
  '/chat': 'chat',
  '/tasks': 'tasks',
  '/memory': 'memory',
  '/jobs': 'jobs',
  '/research': 'research',
  '/voice': 'voice',
  '/settings': 'settings',
}

export function Sidebar() {
  const { sidebarOpen, activeNav, setActiveNav, toggleSidebar } = useAppStore()
  const location = useLocation()
  const navigate = useNavigate()

  const collapsed = !sidebarOpen

  useEffect(() => {
    const matchedId = routeToId[location.pathname]
    if (matchedId && matchedId !== activeNav) {
      setActiveNav(matchedId)
    }
  }, [activeNav, location.pathname, setActiveNav])

  const handleNavigate = (to: string | undefined, id: string) => {
    setActiveNav(id)
    if (to) {
      navigate(to)
    }
  }

  return (
    <>
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 88 : 288 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex flex-col border-r border-white/10 bg-[#09090B] px-3 py-3 shadow-[0_0_80px_rgba(0,0,0,0.35)]',
          'lg:relative lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <SidebarHeader collapsed={collapsed} onToggle={toggleSidebar} />

        <nav className="mt-4 flex-1 space-y-2 overflow-y-auto">
          <AnimatePresence initial={false}>
            {navItems.map((item) => {
              const isActive = activeNav === item.id
              return (
                <SidebarItem
                  key={item.id}
                  item={item}
                  active={isActive}
                  collapsed={collapsed}
                  onNavigate={() => handleNavigate(item.to, item.id)}
                />
              )
            })}
          </AnimatePresence>
        </nav>

        <div className="mt-4">
          <SidebarFooter collapsed={collapsed} />
        </div>
      </motion.aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
    </>
  )
}
