import { ArrowUpRight, Copy } from 'lucide-react'
import Section, { Reveal } from './Section'
import { useToast } from './Toast'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { publications } from '../data/publications'

/**
 * Crossover zone: every piece of text in this section sits inside the glass
 * panel, never bare on the mid-gradient background.
 */
export default function Publications() {
  const showToast = useToast()
  const copy = useCopyToClipboard()

  const copyBibtex = async (bibtex) => {
    if (await copy(bibtex)) showToast('Copied')
  }

  return (
    <Section id="publications" theme="light">
      <Reveal>
        <div className="glass rounded-2xl p-5 md:p-8">
          <h2 className="font-display text-4xl font-light lg:text-[2.75rem]">Publications</h2>

          <ul className="mt-6">
            {publications.map((pub, i) => (
              <li
                key={pub.id}
                className="grid gap-3 border-t py-6 md:grid-cols-[120px_1fr_auto] md:gap-8"
                style={{ borderColor: 'var(--card-border)' }}
              >
                <div className="flex items-start gap-3 md:flex-col md:gap-2">
                  <span className="font-mono text-[13px] text-ink-2">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="chip">{pub.chip}</span>
                </div>

                <div>
                  <h3 className="max-w-[70ch] text-[17px] font-medium leading-snug">
                    {pub.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] text-ink-2">
                    {pub.authors.map((author, j) => (
                      <span key={author}>
                        {j > 0 && ', '}
                        {author === 'T. S. Dhesi' ? (
                          <span className="font-medium text-ink">{author}</span>
                        ) : (
                          author
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex items-start gap-2 md:justify-end">
                  {pub.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[13px] font-medium text-ink transition-colors hover:border-accent"
                      style={{ borderColor: 'var(--card-border)' }}
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="text-ink-2" />
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={() => copyBibtex(pub.bibtex)}
                    className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[13px] font-medium text-ink transition-colors hover:border-accent"
                    style={{ borderColor: 'var(--card-border)' }}
                  >
                    Copy BibTeX
                    <Copy size={12} className="text-ink-2" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
