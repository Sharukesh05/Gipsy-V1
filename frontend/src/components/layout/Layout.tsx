import { Sidebar } from '@/components/sidebar/Sidebar'
import { TopBar } from './TopBar'
import MainContent from './MainContent'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-space-950 text-slate-100">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  )
}
