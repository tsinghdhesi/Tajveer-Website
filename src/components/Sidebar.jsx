import { useState, useEffect } from 'react'

const sections = [
  { id: 'about',        label: 'About' },
  { id: 'research',     label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'teaching',     label: 'Teaching' },
  { id: 'projects',     label: 'Projects' },
  { id: 'interests',    label: 'Interests' },
  { id: 'contact',      label: 'Contact' },
]

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observers = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="sidebar">
      <div className="sidebar__identity">
        <span className="sidebar__logo">TSD</span>
        <span className="sidebar__subtitle">PhD Student · UChicago</span>
      </div>

      <nav className="sidebar__nav">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`sidebar__nav-item${activeSection === id ? ' active' : ''}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="sidebar__bottom">
        <a
          href="/Tajveer-Website/Tajveer_Singh_Dhesi_CV.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
          style={{ fontSize: '0.8125rem', padding: '8px 14px', justifyContent: 'center' }}
        >
          ↓ Download CV
        </a>
        <a
          href="/Tajveer-Website/Tajveer_Singh_Dhesi_Resume.pdf"
          download
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost"
          style={{ fontSize: '0.8125rem', padding: '8px 14px', justifyContent: 'center' }}
        >
          ↓ Download Resume
        </a>
      </div>
    </aside>
  )
}
