import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import DashboardPage from '@/pages/Dashboard/DashboardPage'
import ChatPage from '@/pages/Chat/ChatPage'
import TasksPage from '@/pages/Tasks/TasksPage'
import MemoryPage from '@/pages/Memory/MemoryPage'
import JobsPage from '@/pages/Jobs/JobsPage'
import ResearchPage from '@/pages/Research/ResearchPage'
import VoicePage from '@/pages/Voice/VoicePage'
import SettingsPage from '@/pages/Settings/SettingsPage'
import LoginPage from '@/pages/Login/LoginPage'

export default function AppRoutes() {
  return (
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
  )
}
