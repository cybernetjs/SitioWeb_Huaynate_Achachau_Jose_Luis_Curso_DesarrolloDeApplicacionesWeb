import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cuaderno from './components/Cuaderno'
import Bibliografia from './components/Bibliografia'
import Footer from './components/Footer'
import MatrixBackground from './components/MatrixBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Cuaderno />
        <Bibliografia />
      </main>
      <Footer />
    </div>
  )
}

export default App
