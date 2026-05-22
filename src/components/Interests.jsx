import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

export default function Interests() {
  return (
    <section id="interests" className="section">
      <div className="container">
        <SectionHeader eyebrow="Interests" title="Interests" />

        <motion.div
          className="interests__grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="interests__column">
            <p className="interests__col-label">Sports & Activity</p>
            <ul className="interests__list">
              <li>Football (soccer), American football, rugby, badminton</li>
              <li>Gym and bouldering / climbing</li>
            </ul>
          </div>

          <div className="interests__column">
            <p className="interests__col-label">Culture & Media</p>
            <ul className="interests__list">
              <li>Favourite film: <em>The Nightmare Before Christmas</em></li>
              <li>Favourite band: Green Day</li>
              <li>Television: <em>Fleabag</em>, <em>Beef</em>, <em>BAIT</em></li>
              <li>Solo travel — recently Tokyo; South Korea is next</li>
              <li>Mathematics beyond the degree: discrete dynamical systems, combinatorics</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="interests__extra"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p>
            Before the PhD, I spent four years directing live Division I athletics broadcasts at
            Colgate — liaising with ESPN on ad breaks and media timeouts, and making camera-cut
            decisions in real time during NCAA games. It is a different kind of systems problem.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
