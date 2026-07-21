import { create } from 'zustand'

interface AppState {
  sidebarOpen: boolean
  activeNav: string
  theme: 'dark' | 'light'
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setActiveNav: (id: string) => void
  setTheme: (theme: 'dark' | 'light') => void
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  activeNav: 'dashboard',
  theme: 'dark',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setActiveNav: (id) => set({ activeNav: id }),
  setTheme: (theme) => set({ theme }),
}))
