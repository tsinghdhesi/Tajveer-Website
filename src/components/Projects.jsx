import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import TagChip from '../ui/TagChip'

// Add more projects here
const projects = [
  {
    id: 'maze-game',
    title: 'Maze Generation Game',
    description:
      'Procedural maze generator built in JavaFX using Kruskal\'s algorithm. Led the algorithmic implementation in a team of three — 2nd place at DandyHacks Hackathon, University of Rochester (November 2023).',
    tags: ['Java', 'JavaFX', 'Algorithms', 'Hackathon'],
  },
  {
    id: 'rideshare-app',
    title: 'Student Rideshare App',
    description:
      'Full-stack iOS/Android rideshare app built for Colgate University students with Sloop Software Group. Handled real-time ride requests and customer data using React Native and Cloud Firestore.',
    tags: ['React Native', 'Cloud Firestore', 'iOS', 'Android'],
  },
  {
    id: 'this-website',
    title: 'This Website',
    description:
      'Built with React + Vite, deployed on GitHub Pages. Designed from scratch with Framer Motion animations, a custom dark theme, and a full CSS custom-property design system.',
    tags: ['React', 'Vite', 'CSS', 'Design'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Miscellaneous"
          subtitle="Non-research projects and side work."
        />

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <TagChip key={tag} label={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
