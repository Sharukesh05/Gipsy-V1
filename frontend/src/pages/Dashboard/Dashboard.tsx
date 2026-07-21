import { motion } from 'framer-motion'
import { WelcomeCard } from '@/components/dashboard/WelcomeCard'
import { AISummaryCard } from '@/components/dashboard/AISummaryCard'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { TodaysTasks } from '@/components/dashboard/TodaysTasks'
import { RecentActivity } from '@/components/dashboard/RecentActivity'
import { SystemMonitor } from '@/components/dashboard/SystemMonitor'
import { ChatPreview } from '@/components/dashboard/ChatPreview'

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      <WelcomeCard />

      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <AISummaryCard />
        </div>
        <div className="xl:col-span-4">
          <div className="rounded-[28px] border border-white/10 bg-[#121218]/80 p-5 shadow-[0_0_50px_rgba(0,0,0,0.25)]">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">AI Core</p>
                <p className="text-xs text-slate-400">Ambient intelligence</p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Online
              </span>
            </div>
            <div className="flex items-center justify-center py-4">
              <div className="h-40 w-40 rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(168,85,247,0.28),_transparent_62%)]" />
            </div>
            <div className="mt-2 space-y-2 text-sm text-slate-400">
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                <span>Mode</span>
                <span className="text-white">Creative</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                <span>Latency</span>
                <span className="text-white">28ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-5">
          <QuickActions />
        </div>
        <div className="xl:col-span-7">
          <TodaysTasks />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-7">
          <ChatPreview />
        </div>
        <div className="xl:col-span-5">
          <RecentActivity />
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-12">
        <div className="xl:col-span-12">
          <SystemMonitor />
        </div>
      </div>
    </motion.div>
  )
}
