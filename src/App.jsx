import Navbar from "./components/common/navbar"
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/skills"
import Education from "./components/sections/Education"
import Contact from "./components/sections/Contact"
import Footer from "./components/common/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#f2f0eb] text-[#171717]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
