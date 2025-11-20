import { Menu, Bot, Music2 } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/60 to-transparent backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-white font-semibold">
          <Music2 className="w-5 h-5 text-orange-400" /> SOLA Studio
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-white/80">
          <a href="#studio" className="hover:text-white">Studio</a>
          <a href="#connect" className="hover:text-white">Connect</a>
          <a href="/test" className="hover:text-white">Status</a>
        </nav>
        <button className="sm:hidden text-white/80">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
