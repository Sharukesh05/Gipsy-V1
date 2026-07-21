import { Outlet } from 'react-router-dom'

interface MainContentProps {
  children?: React.ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 overflow-auto bg-space-950/70 p-6 md:p-8">
      {children ?? <Outlet />}
    </main>
  )
}
