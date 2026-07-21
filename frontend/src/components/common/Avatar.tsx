interface AvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass = {
  sm: 'h-9 w-9 text-sm',
  md: 'h-11 w-11 text-base',
  lg: 'h-14 w-14 text-lg',
}

export default function Avatar({ name, size = 'md' }: AvatarProps) {
  return (
    <div className={`flex items-center justify-center rounded-full bg-linear-to-br from-neon-purple to-neon-cyan font-semibold text-white ${sizeClass[size]}`}>
      {name.slice(0, 1).toUpperCase()}
    </div>
  )
}
