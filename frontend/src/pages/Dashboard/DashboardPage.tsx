import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">Operations overview</p>
          <h2 className="text-2xl font-semibold text-white">Welcome back</h2>
        </div>
        <Button>New task</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <p className="text-sm text-slate-400">Daily momentum</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Your AI workflows are on track</h3>
          <p className="mt-3 text-sm text-slate-300">Use the sidebar to move between your workspace areas and keep the system moving.</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-400">Next actions</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>• Review open requests</li>
            <li>• Check latest research findings</li>
            <li>• Prepare voice runbook</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
