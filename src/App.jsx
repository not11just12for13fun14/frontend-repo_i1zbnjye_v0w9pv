import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Studio from './components/Studio'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f]">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Studio />
      </main>
      <Footer />
    </div>
  )
}

export default App