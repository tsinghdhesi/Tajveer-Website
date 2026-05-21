import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Publications from './components/Publications'
import Teaching from './components/Teaching'
import Projects from './components/Projects'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Teaching />
        <Projects />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
