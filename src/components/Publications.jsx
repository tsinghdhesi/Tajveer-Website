import SectionHeader from '../ui/SectionHeader'
import PublicationEntry from '../ui/PublicationEntry'
import { peerReviewed, academicWriting } from '../data/publications'
import { motion } from 'framer-motion'

export default function Publications() {
  return (
    <section id="publications" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Publications"
          title="Writing"
        />

        <div className="pub-list">
          {peerReviewed.map((entry, i) => (
            <PublicationEntry key={entry.id} entry={entry} index={i} />
          ))}
        </div>

        <motion.div
          className="pub-section-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Academic Writing / Reports</h3>
        </motion.div>

        <div className="pub-list">
          {academicWriting.map((entry, i) => (
            <PublicationEntry
              key={entry.id}
              entry={entry}
              index={peerReviewed.length + i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
