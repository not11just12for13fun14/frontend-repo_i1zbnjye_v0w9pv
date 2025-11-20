import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-[#0a0b0f] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-xs tracking-widest uppercase text-orange-300">SOLA VATZKA MAX 65</span>
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
          Futuristic AI Music Studio
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">for Creators Beyond Time</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Produce, mix, DJ, and collaborate. A visionary environment inspired by mobile studios and pro DAWs — guided by the AI assistant, Solavatzkamax65.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#studio" className="px-5 py-3 rounded-xl bg-orange-500/90 hover:bg-orange-500 text-black font-semibold shadow-lg shadow-orange-500/30 transition">Enter Studio</a>
          <a href="#connect" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 font-semibold transition">Connect Devices</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent"></div>
    </section>
  )
}

export default Hero
