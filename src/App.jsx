import GradientBackdrop from './components/GradientBackdrop'
import Orb from './components/Orb'
import Starfield from './components/Starfield'
import NavRail from './components/NavRail'
import Wordmark from './components/Wordmark'
import Hero from './components/Hero'
import Research from './components/Research'
import Publications from './components/Publications'
import Teaching from './components/Teaching'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'
import { ToastProvider } from './components/Toast'
import { useActiveSection } from './hooks/useActiveSection'
import { sections } from './data/site'

export default function App() {
  const activeId = useActiveSection(sections)
  const activeTheme = sections.find((s) => s.id === activeId)?.theme ?? 'light'

  return (
    <ToastProvider>
      <GradientBackdrop />
      <Orb />
      <Starfield />
      <Wordmark theme={activeTheme} />
      <NavRail sections={sections} activeId={activeId} theme={activeTheme} />
      <main className="relative z-[2]">
        <Hero />
        <Research />
        <Publications />
        <Teaching />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </ToastProvider>
  )
}
