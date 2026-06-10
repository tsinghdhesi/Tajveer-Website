import {
  Trophy,
  Clapperboard,
  Plane,
  Music,
  Film,
  Tv,
  Sigma,
} from 'lucide-react'
import Section, { Reveal } from './Section'
import { interests } from '../data/interests'

const ICONS = { Trophy, Clapperboard, Plane, Music, Film, Tv, Sigma }

export default function Interests() {
  return (
    <Section id="interests" theme="dark">
      <Reveal>
        <h2 className="font-display text-4xl font-light lg:text-[2.75rem]">Interests</h2>
      </Reveal>

      <ul className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {interests.map((interest, i) => {
          const Icon = ICONS[interest.icon] ?? Trophy
          return (
            <Reveal key={interest.id} delay={i * 0.06} as="li">
              <div className="glass card-hover group h-full rounded-xl p-5">
                <div className="flex items-center gap-2.5">
                  <Icon size={18} className="text-accent" aria-hidden />
                  <p className="text-[17px] font-medium">{interest.label}</p>
                </div>
                <p className="mt-2 min-h-[3.2em] text-[14px] leading-snug text-ink-2 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                  {interest.detail}
                </p>
              </div>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
