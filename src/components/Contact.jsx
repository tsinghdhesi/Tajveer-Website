import { Copy, Linkedin, Github, GraduationCap, FileDown } from 'lucide-react'
import Section, { Reveal } from './Section'
import { useToast } from './Toast'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { site } from '../data/site'
import { meta } from '../data/meta'

export default function Contact() {
  const showToast = useToast()
  const copy = useCopyToClipboard()

  const copyEmail = async () => {
    if (await copy(site.email)) showToast('Copied')
  }

  return (
    <Section id="contact" theme="dark">
      <Reveal>
        <h2 className="font-display text-4xl font-light lg:text-[2.75rem]">Get in touch</h2>

        <button
          type="button"
          onClick={copyEmail}
          aria-label={`Copy email address ${site.email}`}
          className="group mt-6 inline-flex items-center gap-2.5 font-mono text-[17px] text-ink transition-colors hover:text-accent"
        >
          {site.email}
          <Copy size={15} className="text-ink-2 transition-colors group-hover:text-accent" />
        </button>

        <div className="mt-6 flex items-center gap-4">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border p-3 text-ink-2 transition-colors hover:border-accent hover:text-ink"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <Linkedin size={19} />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border p-3 text-ink-2 transition-colors hover:border-accent hover:text-ink"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <Github size={19} />
          </a>
          <a
            href={site.links.scholar}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
            className="rounded-full border p-3 text-ink-2 transition-colors hover:border-accent hover:text-ink"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <GraduationCap size={19} />
          </a>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="Tajveer-Singh-Dhesi-CV.pdf"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-accent"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <FileDown size={16} className="text-ink-2" />
            Download CV
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Tajveer-Singh-Dhesi-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-medium text-ink transition-colors hover:border-accent"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <FileDown size={16} className="text-ink-2" />
            Download Resume
          </a>
        </div>

        <p className="mt-14 font-mono text-[13px] text-ink-2">
          {site.name} · Last updated · {meta.lastUpdated}
        </p>
      </Reveal>
    </Section>
  )
}
