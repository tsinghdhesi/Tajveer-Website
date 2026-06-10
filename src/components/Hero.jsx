import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { site } from '../data/site'

export default function Hero() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const hintOpacity = useTransform(scrollY, [0, 90], [1, 0])

  return (
    <section
      id="about"
      data-theme="light"
      className="relative flex min-h-[90vh] flex-col justify-center text-ink"
    >
      <div className="mx-auto w-full max-w-content px-6 md:px-10">
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="font-display font-light leading-[1.04] tracking-tight text-[clamp(3.25rem,7vw,8rem)]">
            Tajveer
            <span className="block pl-[0.9em]">
              Singh Dhesi
              <span
                aria-hidden
                className="ml-6 hidden h-px w-[18vw] max-w-[220px] align-middle md:inline-block"
                style={{ background: 'linear-gradient(90deg, var(--hairline), transparent)' }}
              />
            </span>
          </h1>

          <p className="mt-5 pl-[0.5em] text-[17px] text-ink-2 md:pl-[4.2em] lg:text-xl">
            {site.subline}
          </p>
          <p className="mt-3 pl-[0.5em] md:pl-[4.2em]">
            <span className="chip inline-block !whitespace-normal leading-relaxed md:!whitespace-nowrap">
              {site.status}
            </span>
          </p>
        </motion.div>

        <motion.p
          className="mt-10 max-w-[70ch] border-l pl-6 text-[17px] leading-relaxed text-ink-2 md:ml-[22%] md:mt-12 lg:text-lg"
          style={{ borderColor: 'var(--hairline)' }}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          {site.intro}
        </motion.p>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-7 left-1/2 h-10 w-px -translate-x-1/2"
        style={{ background: 'var(--hairline)', opacity: reduced ? 1 : hintOpacity }}
      />
    </section>
  )
}
