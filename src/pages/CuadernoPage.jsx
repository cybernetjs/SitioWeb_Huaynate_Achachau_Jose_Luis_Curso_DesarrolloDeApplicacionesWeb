import Header from '../components/Header'
import Cuaderno from '../components/Cuaderno'
import Bibliografia from '../components/Bibliografia'
import Footer from '../components/Footer'
import MatrixBackground from '../components/MatrixBackground'

const CuadernoPage = () => {
  return (
    <div className="relative min-h-screen">
      <MatrixBackground />
      <Header />
      <main style={{ paddingTop: '90px' }}>
        <Cuaderno />
        <Bibliografia />
      </main>
      <Footer />
    </div>
  )
}

export default CuadernoPage
