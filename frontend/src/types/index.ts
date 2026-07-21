export type TaskPriority = 'high' | 'medium' | 'low'
export type TaskStatus = 'pending' | 'in-progress' | 'done'

export interface Task {
  id: string
  title: string
  time: string
  priority: TaskPriority
  status: TaskStatus
  category: string
}

export interface ActivityItem {
  id: string
  title: string
  description: string
  time: string
  type: 'ai' | 'task' | 'system' | 'chat'
  icon: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export interface SystemMetric {
  id: string
  label: string
  value: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  color: 'purple' | 'blue' | 'cyan' | 'pink'
}

export interface QuickAction {
  id: string
  label: string
  description: string
  icon: string
  color: string
}

export interface NavItem {
  id: string
  label: string
  icon: string
  to?: string
  badge?: number
}

export interface ProductivityStat {
  label: string
  value: number
  change: number
  color: string
}
