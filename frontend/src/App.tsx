import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'

const DashboardPage = lazy(() => import('@/pages/Dashboard/DashboardPage'))
const ChatPage = lazy(() => import('@/pages/Chat/ChatPage'))
const TasksPage = lazy(() => import('@/pages/Tasks/TasksPage'))
const MemoryPage = lazy(() => import('@/pages/Memory/MemoryPage'))
const JobsPage = lazy(() => import('@/pages/Jobs/JobsPage'))
const ResearchPage = lazy(() => import('@/pages/Research/ResearchPage'))
const VoicePage = lazy(() => import('@/pages/Voice/VoicePage'))
const SettingsPage = lazy(() => import('@/pages/Settings/SettingsPage'))
const LoginPage = lazy(() => import('@/pages/Login/LoginPage'))

function PageLoader({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="p-6 text-sm text-slate-400">Loading...</div>}>{children}</Suspense>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PageLoader><LoginPage /></PageLoader>} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<PageLoader><DashboardPage /></PageLoader>} />
          <Route path="/chat" element={<PageLoader><ChatPage /></PageLoader>} />
          <Route path="/tasks" element={<PageLoader><TasksPage /></PageLoader>} />
          <Route path="/memory" element={<PageLoader><MemoryPage /></PageLoader>} />
          <Route path="/jobs" element={<PageLoader><JobsPage /></PageLoader>} />
          <Route path="/research" element={<PageLoader><ResearchPage /></PageLoader>} />
          <Route path="/voice" element={<PageLoader><VoicePage /></PageLoader>} />
          <Route path="/settings" element={<PageLoader><SettingsPage /></PageLoader>} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
