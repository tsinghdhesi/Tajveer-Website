import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

// Simple inline SVG icons — no icon library needed
const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tajveersd7@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // fallback: do nothing
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader eyebrow="Contact" title="Get in Touch" />

        <motion.p
          className="contact__tagline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          I'm always open to research collaborations, internship conversations, or just talking
          about web measurement and AI policy.
        </motion.p>

        <motion.div
          className="contact__links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {/* Email — click to copy */}
          <button
            onClick={handleCopyEmail}
            className="contact__link"
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              textAlign: 'left',
              fontFamily: 'var(--font-body)',
              width: 'fit-content',
            }}
          >
            <span className="contact__link-icon">
              <EmailIcon />
            </span>
            <span className="contact__link-text">
              <span className="contact__link-label">Email</span>
              <span className="contact__link-value">
                tsinghdhesi@uchicago.edu
                <span style={{
                  fontSize: '0.72rem',
                  color: copied ? 'var(--color-green-text)' : 'var(--color-text-muted)',
                  fontFamily: 'var(--font-body)',
                  marginLeft: '0.5rem',
                  transition: 'color var(--transition-fast)',
                  letterSpacing: '0.02em',
                }}>
                  {copied ? '✓ Copied' : 'click to copy'}
                </span>
              </span>
            </span>
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tajveer-singh-dhesi-606a75221/"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            <span className="contact__link-icon">
              <LinkedInIcon />
            </span>
            <span className="contact__link-text">
              <span className="contact__link-label">LinkedIn</span>
              <span className="contact__link-value">linkedin.com/in/tajveer-singh-dhesi-606a75221</span>
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tsinghdhesi"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            <span className="contact__link-icon">
              <GitHubIcon />
            </span>
            <span className="contact__link-text">
              <span className="contact__link-label">GitHub</span>
              <span className="contact__link-value">github.com/tsinghdhesi</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
