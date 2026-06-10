import Section, { Reveal } from './Section'
import { teaching } from '../data/teaching'

export default function Teaching() {
  return (
    <Section id="teaching" theme="dark">
      <Reveal>
        <h2 className="font-display text-4xl font-light lg:text-[2.75rem]">Teaching</h2>
      </Reveal>

      <div className="mt-9 flex flex-col gap-10">
        {teaching.map((group, gi) => (
          <Reveal key={group.institution} delay={gi * 0.08}>
            <div className="md:grid md:grid-cols-[300px_1fr] md:gap-12">
              <div>
                <h3 className="font-display text-xl font-normal">{group.institution}</h3>
                <p className="mt-1 font-mono text-[12.5px] tracking-wide text-ink-2">
                  {group.role} · {group.period}
                </p>
              </div>

              <ul className="mt-4 md:mt-0">
                {group.courses.map((course, ci) => (
                  <li
                    key={course.name}
                    className={`py-4 ${ci > 0 ? 'border-t' : ''}`}
                    style={{ borderColor: 'var(--hairline)' }}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-[17px] font-medium">{course.name}</span>
                      <span className="chip">TA</span>
                      {course.term && <span className="chip">{course.term}</span>}
                    </div>
                    <p className="mt-1.5 max-w-[70ch] text-[15px] leading-relaxed text-ink-2">
                      {course.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
