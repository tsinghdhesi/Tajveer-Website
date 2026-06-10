import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, ArrowUpRight } from 'lucide-react'

/**
 * Card-to-modal morph target. Rendered inside AnimatePresence by the caller.
 * `theme` and `tint` come from the section the card was opened in, so the
 * modal inherits the depth of its scroll zone.
 */
export default function Modal({ item, layoutId, theme, tint, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    panelRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previouslyFocused?.focus?.()
    }
  }, [onClose])

  return (
    <div data-theme={theme} className="fixed inset-0 z-50 grid place-items-center p-5 md:p-8">
      <motion.div
        className="absolute inset-0"
        style={{ background: 'rgba(11, 10, 20, 0.45)', backdropFilter: 'blur(6px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        layoutId={layoutId}
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="relative w-full max-w-3xl max-h-[84vh] overflow-y-auto rounded-2xl border p-7 md:p-8 text-ink outline-none"
        style={{ background: tint, borderColor: 'var(--card-border)' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 rounded-full border p-1.5 text-ink-2 transition-colors hover:text-ink"
          style={{ borderColor: 'var(--card-border)' }}
        >
          <X size={15} />
        </button>

        <span className="chip">{item.chip}</span>
        <h3 className="mt-3 pr-10 font-display text-3xl font-light leading-snug">
          {item.title}
        </h3>

        <div className="mt-4 space-y-3 max-w-[70ch] text-base leading-relaxed text-ink-2">
          {item.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        {item.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-[15px] text-ink transition-colors hover:border-accent"
                style={{ borderColor: 'var(--card-border)' }}
              >
                {link.label}
                <ArrowUpRight size={14} className="text-ink-2" />
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
