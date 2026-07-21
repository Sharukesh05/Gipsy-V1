import { Clock3, MessageSquareText } from 'lucide-react'

const history = [
  { title: 'Product roadmap', time: '9:20 AM' },
  { title: 'Research notes', time: '8:40 AM' },
  { title: 'Sprint summary', time: '7:10 AM' },
]

export function ConversationHistory() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#121218]/80 p-4">
      <div className="flex items-center gap-2 text-sm font-medium text-white">
        <MessageSquareText size={16} className="text-purple-300" />
        Recent conversations
      </div>
      <div className="mt-3 space-y-2">
        {history.map((item) => (
          <div key={item.title} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
            <span className="text-sm text-slate-300">{item.title}</span>
            <span className="flex items-center gap-1 text-[11px] text-slate-500">
              <Clock3 size={11} />
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
