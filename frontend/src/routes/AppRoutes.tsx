import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
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

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-space-950 text-sm text-slate-300">
      Loading...
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/memory" element={<MemoryPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/voice" element={<VoicePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  )
}
