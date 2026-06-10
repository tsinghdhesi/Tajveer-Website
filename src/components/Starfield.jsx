import { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const STAR_COUNT = 40

export default function Starfield() {
  const { scrollYProgress } = useScroll()
  // Only present over the darkest stretch of the page.
  const opacity = useTransform(scrollYProgress, [0.72, 0.88], [0, 1])

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() < 0.6 ? 1 : 2,
        delay: `${(Math.random() * 6).toFixed(2)}s`,
        duration: `${(3 + Math.random() * 3).toFixed(2)}s`,
      })),
    []
  )

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ opacity }}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--twinkle-delay': star.delay,
            '--twinkle-duration': star.duration,
          }}
        />
      ))}
    </motion.div>
  )
}
