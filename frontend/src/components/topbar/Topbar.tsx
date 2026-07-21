import { SearchBar } from './SearchBar'
import { NotificationButton } from './NotificationButton'
import { ProfileMenu } from './ProfileMenu'

const todayLabel = 'Monday, July 21'
const timeLabel = '10:35 AM'

export function Topbar() {
  return (
    <header className="flex h-[70px] items-center justify-between border-b border-white/10 bg-space-900/70 px-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-[0_0_24px_rgba(139,92,246,0.3)]">
          <span className="text-sm font-semibold">G</span>
        </div>
        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-white">Gipsy</p>
          <p className="text-xs text-slate-400">Control center</p>
        </div>
      </div>

      <div className="ml-4 hidden flex-1 md:flex">
        <SearchBar />
      </div>

      <div className="ml-4 flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium text-white">{todayLabel}</p>
          <p className="text-xs text-slate-400">{timeLabel}</p>
        </div>
        <NotificationButton />
        <ProfileMenu />
      </div>
    </header>
  )
}
