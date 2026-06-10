import { motion } from 'framer-motion'
import { useScrollGradient } from '../hooks/useScrollGradient'

const STOPS = [
  { id: 'about', color: '#EFEAF7' },
  { id: 'research', color: '#C9C0E8' },
  { id: 'publications', color: '#8B7FC7' },
  { id: 'teaching', color: '#574F9E' },
  { id: 'teaching', color: '#3B3470', anchor: 'mid' },
  { id: 'projects', color: '#262052' },
  { id: 'interests', color: '#161330' },
  { id: 'contact', color: '#0B0A14' },
]

export default function GradientBackdrop() {
  const backgroundColor = useScrollGradient(STOPS)
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ backgroundColor }}
    />
  )
}
