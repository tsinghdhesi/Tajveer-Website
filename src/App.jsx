import Sidebar from './components/Sidebar'
import MobileNav from './components/MobileNav'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Publications from './components/Publications'
import Teaching from './components/Teaching'
import Projects from './components/Projects'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Sidebar />
      <MobileNav />
      <main className="main-with-sidebar">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Teaching />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
