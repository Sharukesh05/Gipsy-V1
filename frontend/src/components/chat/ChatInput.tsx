import { Mic, SendHorizonal } from 'lucide-react'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled?: boolean
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSend()
    }
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <label className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400 transition focus-within:border-purple-400/40 focus-within:bg-white/10">
        <input
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          placeholder="Ask Gipsy anything..."
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />
      </label>
      <div className="flex items-center gap-2">
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white">
          <Mic size={16} />
        </button>
        <button
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-500 to-blue-500 px-4 text-sm font-medium text-white shadow-[0_0_24px_rgba(139,92,246,0.24)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <SendHorizonal size={16} />
          Send
        </button>
      </div>
    </div>
  )
}
