import { motion } from 'framer-motion'

interface AIAvatarProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: { outer: 48, inner: 32, ring: 56 },
  md: { outer: 72, inner: 48, ring: 84 },
  lg: { outer: 96, inner: 64, ring: 112 },
}

export function AIAvatar({ size = 'md' }: AIAvatarProps) {
  const dims = sizeMap[size]

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: dims.ring, height: dims.ring }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-purple-500/20"
          style={{ width: dims.ring, height: dims.ring }}
          animate={{
            scale: [1, 1.15 + i * 0.05, 1],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.div
        className="absolute rounded-full bg-purple-500/20 blur-xl"
        style={{ width: dims.outer, height: dims.outer }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 neon-glow-purple"
        style={{ width: dims.inner, height: dims.inner }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="flex items-center justify-center rounded-full bg-space-950/40 backdrop-blur-sm"
          style={{ width: dims.inner - 8, height: dims.inner - 8 }}
        >
          <motion.div
            className="rounded-full bg-gradient-to-br from-white/90 to-purple-200/80"
            style={{
              width: dims.inner * 0.35,
              height: dims.inner * 0.35,
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400"
        style={{ top: '10%', right: '15%' }}
        animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute h-1 w-1 rounded-full bg-purple-300"
        style={{ bottom: '15%', left: '10%' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  )
}
