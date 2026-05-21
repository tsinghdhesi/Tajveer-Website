import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import ResearchCard from '../ui/ResearchCard'
import ResearchModal from '../ui/ResearchModal'
import { currentResearch, pastResearch } from '../data/research'

export default function Research() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Research"
          title="What I Work On"
          subtitle="Building measurement infrastructure to audit how online systems enforce their own policies — from age gates to content moderation to agentic AI."
        />

        <div className="research-subsection">
          <p className="research-subsection__label">Current Projects</p>
          <div className="research-grid">
            {currentResearch.map((item, i) => (
              <ResearchCard
                key={item.id}
                item={item}
                index={i}
                onClick={setActiveItem}
              />
            ))}
          </div>
        </div>

        <div className="research-subsection">
          <p className="research-subsection__label">Past Work</p>
          <div className="research-grid">
            {pastResearch.map((item, i) => (
              <ResearchCard
                key={item.id}
                item={item}
                index={i}
                onClick={setActiveItem}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <ResearchModal item={activeItem} onClose={() => setActiveItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
