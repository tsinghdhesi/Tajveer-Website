import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Abstract background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <motion.div
          className="hero-orb hero-orb--1"
          animate={{ x: [0, 28, -12, 0], y: [0, -18, 14, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-orb hero-orb--2"
          animate={{ x: [0, -22, 16, 0], y: [0, 14, -22, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-orb hero-orb--3"
          animate={{ x: [0, 12, -18, 0], y: [0, 18, -8, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container hero__content">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Status indicator */}
          <motion.div variants={itemVariants}>
            <div className="hero__status">
              <span className="hero__status-dot" />
              Currently: First year PhD @ UChicago NOISE Lab
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero__name" variants={itemVariants}>
            Tajveer Singh Dhesi
          </motion.h1>

          {/* Title */}
          <motion.p className="hero__title" variants={itemVariants}>
            PhD Student in Computer Science · University of Chicago
          </motion.p>

          {/* Divider */}
          <motion.div className="hero__divider" variants={itemVariants} />

          {/* Tagline */}
          <motion.p className="hero__tagline" variants={itemVariants}>
            "I build measurement systems that audit how the internet enforces its own rules."
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={itemVariants}>
            <button className="btn btn-primary" onClick={() => scrollTo('research')}>
              View Research
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
