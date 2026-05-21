import { motion } from 'framer-motion'

export default function PublicationEntry({ entry, index }) {
  return (
    <motion.div
      className="pub-entry"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
    >
      <span className="pub-entry__index">{String(index + 1).padStart(2, '0')}</span>
      <div className="pub-entry__content">
        <p className="pub-entry__title">{entry.title}</p>
        <p className="pub-entry__authors">{entry.authors}</p>
        <p className="pub-entry__venue">
          {entry.venue} · {entry.year}
        </p>
        <div className="pub-entry__footer">
          <a
            href={entry.href}
            className="pub-link"
            target={entry.href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            ↗ {entry.linkLabel}
          </a>
          {entry.doi && (
            <span className="pub-doi">DOI: {entry.doi}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
