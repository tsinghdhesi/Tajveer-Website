import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section, { Reveal } from './Section'
import Modal from './Modal'
import { research } from '../data/research'

// Light-zone glass tint so the modal inherits this section's depth.
const ZONE_TINT = 'rgba(243, 240, 251, 0.94)'

export default function Research() {
  const [openId, setOpenId] = useState(null)
  const open = research.find((item) => item.id === openId)

  return (
    <Section id="research" theme="light">
      <div className="md:grid md:grid-cols-[230px_1fr] md:gap-12">
        <Reveal>
          <h2 className="font-display text-4xl font-light md:sticky md:top-24 lg:text-[2.75rem]">
            Research
          </h2>
        </Reveal>

        <div className="mt-7 flex flex-col gap-5 md:mt-1">
          {research.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.07} className={i % 2 === 1 ? 'md:ml-[7%]' : 'md:mr-[7%]'}>
              <motion.button
                type="button"
                layoutId={`research-${item.id}`}
                onClick={() => setOpenId(item.id)}
                className="glass card-hover block w-full rounded-2xl p-5 text-left md:p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="chip">{item.chip}</span>
                  <span className="hidden flex-wrap gap-1.5 md:flex">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[70ch] text-base leading-relaxed text-ink-2">
                  {item.summary}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[15px] font-medium text-accent">
                  Read more
                  <ArrowUpRight size={14} />
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Modal
            item={open}
            layoutId={`research-${open.id}`}
            theme="light"
            tint={ZONE_TINT}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}
