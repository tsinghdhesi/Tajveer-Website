import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Wordmark({ theme }) {
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      type="button"
      data-theme={theme}
      onClick={() => window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })}
      aria-label="Back to top"
      className="fixed left-6 top-5 z-40 font-display text-lg font-light tracking-[0.18em] text-ink"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: reduced ? 0 : 0.35 }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      TSD
    </motion.button>
  )
}
