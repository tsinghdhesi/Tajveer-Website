import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion'

export default function Orb() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const top = useTransform(scrollYProgress, [0, 1], ['12vh', '64vh'])
  const left = useTransform(scrollYProgress, [0, 0.45, 1], ['64vw', '70vw', '20vw'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.45])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.6, 0.55])
  const hue = useTransform(scrollYProgress, [0, 0.85], ['#F2B880', '#C9CBE3'])
  const background = useMotionTemplate`radial-gradient(circle, ${hue} 0%, transparent 68%)`

  if (reduced) {
    // Static fallback: a neutral tint that reads quietly at any page depth.
    return (
      <div
        aria-hidden
        className="fixed z-[1] pointer-events-none rounded-full"
        style={{
          top: '12vh',
          left: '64vw',
          width: 'min(380px, 42vw)',
          height: 'min(380px, 42vw)',
          opacity: 0.35,
          background: 'radial-gradient(circle, #C9CBE3 0%, transparent 68%)',
          filter: 'blur(46px)',
        }}
      />
    )
  }

  return (
    <motion.div
      aria-hidden
      className="fixed z-[1] pointer-events-none rounded-full"
      style={{
        top,
        left,
        scale,
        opacity,
        background,
        width: 'min(380px, 42vw)',
        height: 'min(380px, 42vw)',
        filter: 'blur(46px)',
      }}
    />
  )
}
