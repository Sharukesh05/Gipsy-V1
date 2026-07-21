import { motion } from 'framer-motion'
import { Check, Circle, Clock, Plus } from 'lucide-react'
import { todaysTasks } from '@/data/mockData'
import type { TaskPriority, TaskStatus } from '@/types'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const priorityVariant: Record<TaskPriority, 'warning' | 'default' | 'success'> = {
  high: 'warning',
  medium: 'default',
  low: 'success',
}

function StatusIcon({ status }: { status: TaskStatus }) {
  if (status === 'done') {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
        <Check size={12} />
      </div>
    )
  }
  if (status === 'in-progress') {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-purple-500/50">
        <motion.div
          className="h-2 w-2 rounded-full bg-purple-400"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    )
  }
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/15">
      <Circle size={10} className="text-slate-600" />
    </div>
  )
}

export function TodaysTasks() {
  const completed = todaysTasks.filter((t) => t.status === 'done').length

  return (
    <GlassCard className="h-full">
      <SectionHeader
        title="Today's Tasks"
        subtitle={`${completed} of ${todaysTasks.length} completed`}
        action={
          <Button variant="ghost" size="sm">
            <Plus size={14} />
            Add
          </Button>
        }
      />

      <div className="space-y-2">
        {todaysTasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.06 }}
            className={cn(
              'group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all hover:border-white/5 hover:bg-white/[0.03]',
              task.status === 'done' && 'opacity-60',
            )}
          >
            <StatusIcon status={task.status} />
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  'text-sm font-medium text-slate-200',
                  task.status === 'done' && 'line-through text-slate-500',
                )}
              >
                {task.title}
              </p>
              <div className="mt-1.5 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1 text-[11px] text-slate-500">
                  <Clock size={10} />
                  {task.time}
                </span>
                <Badge variant="purple">{task.category}</Badge>
                <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
