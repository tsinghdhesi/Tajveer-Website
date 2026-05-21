import { motion } from 'framer-motion'

export default function CV() {
  return (
    <section id="cv" className="section cv">
      <div className="container">
        <motion.div
          className="cv__inner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cv__text">
            <h2>Curriculum Vitae</h2>
            <p>Full academic CV and one-page resume available as PDF.</p>
          </div>
          <div className="cv__actions">
            {/* Replace /Tajveer-Website/cv.pdf and /Tajveer-Website/resume.pdf with actual file paths */}
            <a href="/Tajveer-Website/cv.pdf" className="btn btn-primary" download>
              Download CV
            </a>
            <a href="/Tajveer-Website/resume.pdf" className="btn btn-ghost" download>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
