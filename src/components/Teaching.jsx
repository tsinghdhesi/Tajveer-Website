import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const institutions = [
  {
    name: 'University of Chicago',
    period: 'September 2025 – Present',
    courses: [
      {
        name: 'Introduction to Computer Security',
        topics: 'TOCTOU exploits, RSA padding-oracle attacks, web scraping tasks',
        detail: 'TA',
      },
      {
        name: 'Machine Learning for Computer Systems',
        topics: 'Network packet-trace ML',
        detail: 'TA',
      },
      {
        name: 'Creating Interactive Systems with User-Centered Design',
        topics: 'Mentored 3 student groups on quarter-long HCI projects',
        detail: 'TA',
      },
    ],
  },
  {
    name: 'Colgate University',
    period: 'August – December 2023',
    courses: [
      {
        name: 'Discrete Structures (COSC 290)',
        topics: '50+ students across 2 sections, taught in Java',
        detail: 'TA · 2 sections',
      },
      {
        name: 'Data Structures & Algorithms (COSC 202)',
        topics: '1 section, taught in Java',
        detail: 'TA · 1 section',
      },
    ],
  },
]

export default function Teaching() {
  return (
    <section id="teaching" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Teaching"
          title="Teaching"
          subtitle="TA experience across security, ML, HCI, and core CS theory."
        />

        {institutions.map((inst, instIdx) => (
          <motion.div
            key={inst.name}
            className="teaching-institution"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: instIdx * 0.1,
            }}
          >
            <div className="teaching-institution__header">
              <h3 className="teaching-institution__name">{inst.name}</h3>
              <span className="teaching-institution__period">{inst.period}</span>
            </div>

            <div className="teaching-courses">
              {inst.courses.map((course, courseIdx) => (
                <motion.div
                  key={course.name}
                  className="teaching-course"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: instIdx * 0.1 + courseIdx * 0.06,
                  }}
                >
                  <p className="teaching-course__name">{course.name}</p>
                  <p className="teaching-course__topics">{course.topics}</p>
                  <span className="teaching-course__detail">{course.detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
