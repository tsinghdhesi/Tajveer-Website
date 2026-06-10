import { motion, useReducedMotion } from 'framer-motion'

/**
 * Shared section wrapper: anchor id, data-theme, top horizon hairline,
 * and consistent horizontal gutters. Vertical padding stays compact.
 */
export default function Section({ id, theme, children, className = '', hairline = true }) {
  return (
    <section id={id} data-theme={theme} className={`relative text-ink ${className}`}>
      {hairline && <Hairline />}
      <div className="mx-auto w-full max-w-content px-6 md:px-10 py-14 md:py-[96px]">
        {children}
      </div>
    </section>
  )
}

function Hairline() {
  return (
    <motion.div
      aria-hidden
      className="hairline-h absolute inset-x-0 top-0"
      initial={{ opacity: 0.35 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8 }}
    />
  )
}

/** Once-only entrance: small rise, fade, slight blur-to-sharp. */
export function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      className={className}
      initial={
        reduced ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(4px)' }
      }
      whileInView={
        reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: 'blur(0px)' }
      }
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}
