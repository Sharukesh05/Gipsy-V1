import { motion } from 'framer-motion'

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-400">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-2 w-2 rounded-full bg-purple-400"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: dot * 0.1 }}
          />
        ))}
      </div>
      <span>Gipsy is thinking…</span>
    </div>
  )
}
