import { motion } from 'framer-motion'

const prompts = ['Summarize my day', 'Draft a product plan', 'Generate a research brief']

export function SuggestedPrompts() {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#121218]/80 p-4">
      <p className="text-sm font-medium text-white">Suggested prompts</p>
      <div className="mt-3 space-y-2">
        {prompts.map((prompt, index) => (
          <motion.button
            key={prompt}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.01 }}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5 text-left text-sm text-slate-300 transition hover:border-purple-400/20 hover:bg-white/10"
          >
            {prompt}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
