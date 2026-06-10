import { Github } from 'lucide-react'
import Section, { Reveal } from './Section'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Section id="projects" theme="dark">
      <Reveal>
        <h2 className="font-display text-4xl font-light lg:text-[2.75rem]">Projects</h2>
      </Reveal>

      <div className="mt-7 grid gap-5 md:grid-cols-12">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.07} className="md:col-span-7">
            <article className="glass card-hover h-full rounded-2xl p-5 md:p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="chip">{project.chip}</span>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="text-ink-2 transition-colors hover:text-ink"
                  >
                    <Github size={17} />
                  </a>
                )}
              </div>
              <h3 className="mt-3 font-display text-2xl font-normal leading-snug">
                {project.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
