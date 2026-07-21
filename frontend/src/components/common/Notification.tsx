interface NotificationProps {
  title: string
  message: string
  tone?: 'info' | 'success'
}

export default function Notification({ title, message, tone = 'info' }: NotificationProps) {
  const toneClasses = tone === 'success' ? 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' : 'border-neon-cyan/30 bg-neon-cyan/10 text-cyan-200'

  return (
    <div className={`rounded-2xl border p-4 ${toneClasses}`}>
      <p className="font-medium">{title}</p>
      <p className="mt-1 text-sm opacity-90">{message}</p>
    </div>
  )
}
