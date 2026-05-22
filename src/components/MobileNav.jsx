import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  { id: 'about',        label: 'About' },
  { id: 'research',     label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'teaching',     label: 'Teaching' },
  { id: 'projects',     label: 'Projects' },
  { id: 'interests',    label: 'Interests' },
  { id: 'contact',      label: 'Contact' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <button
        className={`navbar__hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="nav-drawer__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {sections.map(({ id, label }) => (
              <button
                key={id}
                className="nav-drawer__link"
                onClick={() => handleNav(id)}
              >
                {label}
              </button>
            ))}

            <div className="nav-drawer__downloads">
              <a
                href="/Tajveer-Website/Tajveer_Singh_Dhesi_CV.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                ↓ Download CV
              </a>
              <a
                href="/Tajveer-Website/Tajveer_Singh_Dhesi_Resume.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                ↓ Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
