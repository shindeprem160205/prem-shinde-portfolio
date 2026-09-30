import Navbar from "./components/common/navbar"
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/skills"
import Education from "./components/sections/Education"
import Contact from "./components/sections/Contact"
import Footer from "./components/common/footer"

function App() {
  return (
    <main className="min-h-screen bg-[#f2f0eb] text-[#171717]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

export default App