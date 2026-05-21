import { motion } from 'framer-motion'
import TagChip from './TagChip'

export default function ResearchCard({ item, onClick, index }) {
  return (
    <motion.div
      className="research-card"
      onClick={() => onClick(item)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(item)}
      aria-label={`View details for ${item.title}`}
    >
      <div className="research-card__header">
        <div className="research-card__meta">
          <span className={`status-badge status-badge--${item.status}`}>
            {item.status === 'active' ? 'Active' : 'Completed'}
          </span>
          <span className="research-card__date">{item.dateRange}</span>
        </div>
      </div>

      <h3 className="research-card__title">{item.title}</h3>

      <p className="research-card__desc">{item.shortDesc}</p>

      <div className="research-card__footer">
        <div className="research-card__tags">
          {item.tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
        <span className="research-card__cta">
          Details →
        </span>
      </div>
    </motion.div>
  )
}
