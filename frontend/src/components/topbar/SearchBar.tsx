import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <label className="group flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-200 focus-within:border-purple-400/40 focus-within:bg-white/10 focus-within:text-white focus-within:shadow-[0_0_30px_rgba(168,85,247,0.14)]">
      <Search size={16} className="text-slate-500 transition-colors group-focus-within:text-purple-300" />
      <input
        className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        placeholder="Ask Gipsy anything..."
      />
    </label>
  )
}
