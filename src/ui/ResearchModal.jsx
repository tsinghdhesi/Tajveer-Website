import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TagChip from './TagChip'

export default function ResearchModal({ item, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="modal"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__header">
            <div className="modal__meta">
              <span className={`status-badge status-badge--${item.status}`}>
                {item.status === 'active' ? 'Active' : 'Completed'}
              </span>
              <span className="modal__date">{item.dateRange}</span>
            </div>
            <h2 className="modal__title">{item.title}</h2>
            <button className="modal__close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>

          <div className="modal__body">
            <ul className="modal__bullets">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="modal__bullet">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="modal__tags">
              {item.tags.map((tag) => (
                <TagChip key={tag} label={tag} />
              ))}
            </div>

            {item.publication && (
              <a
                href={item.publication.href}
                className="modal__pub-link"
                target={item.publication.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                ↗ {item.publication.label}
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
