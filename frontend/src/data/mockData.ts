import type {
  ActivityItem,
  ChatMessage,
  NavItem,
  ProductivityStat,
  QuickAction,
  SystemMetric,
  Task,
} from '@/types'

export const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', to: '/dashboard' },
  { id: 'chat', label: 'AI Chat', icon: 'MessageSquare', badge: 3, to: '/chat' },
  { id: 'tasks', label: 'Tasks', icon: 'CheckSquare', badge: 5, to: '/tasks' },
  { id: 'memory', label: 'Memory', icon: 'BookOpen', to: '/memory' },
  { id: 'jobs', label: 'Jobs', icon: 'BriefcaseBusiness', to: '/jobs' },
  { id: 'research', label: 'Research', icon: 'Compass', to: '/research' },
  { id: 'voice', label: 'Voice', icon: 'Mic', to: '/voice' },
  { id: 'settings', label: 'Settings', icon: 'Settings', to: '/settings' },
]

export const todaysTasks: Task[] = [
  {
    id: '1',
    title: 'Review quarterly AI model performance report',
    time: '9:00 AM',
    priority: 'high',
    status: 'done',
    category: 'Research',
  },
  {
    id: '2',
    title: 'Prepare client presentation slides',
    time: '11:30 AM',
    priority: 'high',
    status: 'in-progress',
    category: 'Work',
  },
  {
    id: '3',
    title: 'Sync with engineering on API integration',
    time: '2:00 PM',
    priority: 'medium',
    status: 'pending',
    category: 'Meeting',
  },
  {
    id: '4',
    title: 'Draft newsletter content with Gipsy',
    time: '4:30 PM',
    priority: 'low',
    status: 'pending',
    category: 'Creative',
  },
  {
    id: '5',
    title: 'Optimize workspace automation scripts',
    time: '6:00 PM',
    priority: 'medium',
    status: 'pending',
    category: 'Dev',
  },
]

export const productivityStats: ProductivityStat[] = [
  { label: 'Focus Score', value: 87, change: 12, color: 'purple' },
  { label: 'Tasks Done', value: 14, change: 8, color: 'blue' },
  { label: 'AI Sessions', value: 6, change: -2, color: 'cyan' },
  { label: 'Deep Work', value: 4.2, change: 15, color: 'pink' },
]

export const recentActivity: ActivityItem[] = [
  {
    id: '1',
    title: 'Gipsy summarized 3 documents',
    description: 'Research papers on neural architecture search',
    time: '12 min ago',
    type: 'ai',
    icon: 'Sparkles',
  },
  {
    id: '2',
    title: 'Task completed: Code review',
    description: 'Frontend PR #247 approved and merged',
    time: '45 min ago',
    type: 'task',
    icon: 'CheckCircle2',
  },
  {
    id: '3',
    title: 'System backup completed',
    description: '2.4 GB synced to cloud storage',
    time: '1 hr ago',
    type: 'system',
    icon: 'HardDrive',
  },
  {
    id: '4',
    title: 'New chat session started',
    description: 'Product roadmap brainstorming',
    time: '2 hrs ago',
    type: 'chat',
    icon: 'MessageCircle',
  },
  {
    id: '5',
    title: 'Gipsy scheduled 2 reminders',
    description: 'Follow-ups for client meetings',
    time: '3 hrs ago',
    type: 'ai',
    icon: 'Bell',
  },
]

export const quickActions: QuickAction[] = [
  {
    id: '1',
    label: 'New Chat',
    description: 'Start AI conversation',
    icon: 'MessageSquarePlus',
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    id: '2',
    label: 'Voice Command',
    description: 'Talk to Gipsy',
    icon: 'Mic',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    id: '3',
    label: 'Quick Note',
    description: 'Capture an idea',
    icon: 'PenLine',
    color: 'from-cyan-500/20 to-cyan-600/10',
  },
  {
    id: '4',
    label: 'Automate',
    description: 'Create workflow',
    icon: 'Zap',
    color: 'from-pink-500/20 to-pink-600/10',
  },
]

export const chatPreviewMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'user',
    content: 'Summarize my priorities for today and suggest an optimal schedule.',
    timestamp: '10:42 AM',
  },
  {
    id: '2',
    role: 'assistant',
    content:
      "Based on your calendar and task list, I recommend tackling the client presentation first (high priority, due before your 2 PM sync). I've blocked 90 minutes of deep work for you this morning.",
    timestamp: '10:42 AM',
  },
  {
    id: '3',
    role: 'user',
    content: 'Can you also draft talking points for the engineering sync?',
    timestamp: '10:44 AM',
  },
  {
    id: '4',
    role: 'assistant',
    content:
      'Absolutely. I\'ll prepare API integration milestones, open blockers, and a timeline overview. Ready in ~30 seconds.',
    timestamp: '10:44 AM',
  },
]

export const systemMetrics: SystemMetric[] = [
  {
    id: 'cpu',
    label: 'CPU Usage',
    value: 34,
    unit: '%',
    trend: 'stable',
    color: 'purple',
  },
  {
    id: 'memory',
    label: 'Memory',
    value: 62,
    unit: '%',
    trend: 'up',
    color: 'blue',
  },
  {
    id: 'network',
    label: 'Network',
    value: 128,
    unit: 'Mbps',
    trend: 'down',
    color: 'cyan',
  },
  {
    id: 'gpu',
    label: 'AI Engine',
    value: 78,
    unit: '%',
    trend: 'up',
    color: 'pink',
  },
]

export const aiSummary = {
  greeting: 'Good morning, Alex',
  headline: 'Your day is 68% optimized',
  insight:
    'You have 2 high-priority tasks remaining. Gipsy detected a 45-minute focus window at 3 PM — ideal for the presentation prep.',
  suggestions: [
    'Reschedule low-priority email review to tomorrow',
    'Enable focus mode during deep work block',
    'Review AI-generated talking points before sync',
  ],
}
