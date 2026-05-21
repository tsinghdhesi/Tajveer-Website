import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const highlights = [
  { label: 'Affiliation', value: 'University of Chicago · NOISE Lab' },
  { label: 'Advisor', value: 'Prof. Nick Feamster' },
  { label: 'Undergrad', value: 'Colgate University · CS + Mathematics' },
  { label: 'Honors', value: 'Summa cum laude · High Honors CS · Laura Sanchis Award' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          <div className="about__sidebar">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="about__sidebar-title">About</h2>
              <div className="about__highlights">
                {highlights.map(({ label, value }) => (
                  <div key={label} className="about__highlight">
                    <span className="about__highlight-label">{label}</span>
                    <span className="about__highlight-value">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about__prose"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p>
              I'm a first-year PhD student in Computer Science at the{' '}
              <strong>University of Chicago</strong>, where I work in the{' '}
              <strong>NOISE Lab</strong> with Prof. Nick Feamster. My research sits at the
              intersection of web measurement, online safety policy, and AI governance — I
              build measurement systems that audit how the internet enforces its own rules,
              from age verification requirements on e-commerce sites to content moderation
              consistency across major platforms.
            </p>
            <p>
              Before Chicago, I was an undergraduate at <strong>Colgate University</strong>,
              where I double-majored in Computer Science and Mathematics. I graduated{' '}
              <strong>summa cum laude</strong> with High Honors in CS, received the{' '}
              <strong>Laura Sanchis Award for Excellence in Research</strong> (2025), and was
              an <strong>Alumni Memorial Scholar</strong> — an honor held by roughly 1% of
              the graduating class. I maintained the Dean's Award with Distinction across five
              consecutive semesters. I also spent a semester as a visiting student at the{' '}
              <strong>University of Wollongong</strong> in Australia, which was formative in
              ways that had little to do with coursework.
            </p>
            <p>
              Beyond the work, I'm genuinely interested in discrete dynamical systems and
              combinatorics — areas I explore past what my program requires. I travel solo
              when I can. I've recently been to Tokyo, and South Korea is next.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
