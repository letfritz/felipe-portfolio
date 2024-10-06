import About from "./components/About"
import BlurBackgroud from "./components/BlurBackground"
import Contacts from "./components/Contacts"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Testimonial from "./components/Testimonial"

const App = () => {
  return(
    <>
      <BlurBackgroud/>
      <Navbar/>
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar/>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contacts />
      </main>
    </>
  )
}

export default App