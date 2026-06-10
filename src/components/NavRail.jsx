import { motion, useReducedMotion } from 'framer-motion'

const DOT_GAP = 36

export default function NavRail({ sections, activeId, theme }) {
  const reduced = useReducedMotion()
  const railHeight = (sections.length - 1) * DOT_GAP

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <nav
      data-theme={theme}
      aria-label="Sections"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:block"
    >
      <svg
        aria-hidden
        width="2"
        height={railHeight}
        className="absolute left-1/2 top-[5px] -translate-x-1/2"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2={railHeight}
          stroke="var(--hairline)"
          strokeWidth="1"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
      </svg>
      <ul className="relative flex flex-col" style={{ gap: DOT_GAP - 10 }}>
        {sections.map(({ id, label }, i) => {
          const active = id === activeId
          return (
            <li key={id} className="group relative flex items-center justify-center">
              <span
                className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap font-mono text-xs tracking-wide text-ink-2 opacity-0 transition-all duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 md:block"
                aria-hidden
              >
                {label}
              </span>
              <motion.button
                type="button"
                onClick={() => scrollTo(id)}
                aria-label={label}
                aria-current={active ? 'true' : undefined}
                className="h-2.5 w-2.5 rounded-full border transition-colors duration-300"
                style={{
                  borderColor: active ? 'var(--accent)' : 'var(--hairline)',
                  backgroundColor: active ? 'var(--accent)' : 'transparent',
                  boxShadow: active ? '0 0 10px 2px var(--accent)' : 'none',
                }}
                initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
