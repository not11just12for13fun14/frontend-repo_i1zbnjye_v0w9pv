import { useEffect, useMemo, useState } from 'react'
import { Play, Square, Mic, Equalizer, SlidersHorizontal, Piano, Bluetooth, Music2, Cable, Wallet, Bot } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-5 h-5 text-orange-400" />
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {subtitle && <p className="text-xs text-white/60">{subtitle}</p>}
      </div>
    </div>
  )
}

function Knob({ label }) {
  const [val, setVal] = useState(50)
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 relative">
        <input type="range" min="0" max="100" value={val} onChange={e=>setVal(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
        <div className="absolute inset-1 rounded-full bg-black/50" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[90%] w-1 h-4 bg-orange-400 rounded" style={{ transform: `translate(-50%, -90%) rotate(${val*2.7-135}deg)` }} />
      </div>
      <span className="text-xs text-white/70">{label}</span>
    </div>
  )
}

function ChannelStrip({ index }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-white/80 text-sm">CH {index+1}</span>
        <div className="flex items-center gap-2 text-white/60">
          <Mic className="w-4 h-4" />
          <Music2 className="w-4 h-4" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Knob label="Gain" />
        <Knob label="Pan" />
        <Knob label="Comp" />
      </div>
      <div className="h-24 bg-gradient-to-b from-emerald-400/40 to-emerald-500/10 rounded overflow-hidden relative">
        <div className="absolute bottom-0 left-0 right-0 bg-emerald-400/80" style={{ height: `${30 + Math.random()*60}%` }} />
      </div>
      <button className="w-full py-2 rounded-lg bg-orange-500/90 hover:bg-orange-500 text-black font-semibold">Arm</button>
    </div>
  )
}

function GraphEQ() {
  const [points, setPoints] = useState([10, 40, 20, 60, 30, 50, 25, 70])
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <SectionTitle icon={Equalizer} title="Graphical Equalizer" subtitle="Futuristic multi-band" />
      <div className="h-40 bg-black/40 rounded relative grid grid-cols-8 gap-2 p-2">
        {points.map((p, i) => (
          <div key={i} className="relative group">
            <div className="absolute bottom-0 left-0 right-0 bg-cyan-400/80 rounded" style={{ height: `${p}%` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function AssistantPanel() {
  const [prompt, setPrompt] = useState('Create a 120 BPM Afrobeats template with 5 channels and sidechain on bass.')
  const [reply, setReply] = useState('')

  const ask = async () => {
    const r = await fetch(`${baseUrl}/assistant/sola`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt })
    })
    const data = await r.json()
    setReply(data.reply)
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <SectionTitle icon={Bot} title="Solavatzkamax65" subtitle="Your hyper-intelligent studio copilot" />
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} className="w-full h-24 bg-black/40 text-white rounded p-3 text-sm border border-white/10" />
      <div className="flex items-center gap-3 mt-3">
        <button onClick={ask} className="px-4 py-2 rounded-lg bg-orange-500/90 hover:bg-orange-500 text-black font-semibold">Ask</button>
        {reply && <p className="text-white/80 text-sm">{reply}</p>}
      </div>
    </div>
  )
}

function Connectivity() {
  const [channels, setChannels] = useState([])
  const [name, setName] = useState('Bluetooth Squad')

  const load = async () => {
    const r = await fetch(`${baseUrl}/channels`)
    setChannels(await r.json())
  }
  const add = async () => {
    await fetch(`${baseUrl}/channels`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) })
    setName('');
    load()
  }
  useEffect(()=>{ load() },[])

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4" id="connect">
      <SectionTitle icon={Bluetooth} title="Realtime Channels" subtitle="Up to 5 minimal channels" />
      <div className="flex gap-2">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="New channel name" className="flex-1 bg-black/40 text-white rounded p-2 border border-white/10" />
        <button onClick={add} className="px-3 py-2 rounded bg-orange-500/90 hover:bg-orange-500 text-black font-semibold">Create</button>
      </div>
      <ul className="mt-3 space-y-2">
        {channels.slice(0,5).map(c => (
          <li key={c._id} className="flex items-center justify-between bg-black/40 border border-white/10 rounded p-2">
            <span className="text-white/80">{c.name}</span>
            <span className="text-xs text-white/50">id {c._id}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Studio() {
  return (
    <section id="studio" className="relative w-full bg-gradient-to-br from-[#0b0c12] via-[#0d0f16] to-[#0b0c12] text-white py-14">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <ChannelStrip key={i} index={i} />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <SectionTitle icon={SlidersHorizontal} title="Master Mixer" subtitle="Complex routing" />
              <div className="grid grid-cols-5 gap-4">
                {['Low', 'Low-Mid', 'Mid', 'High-Mid', 'High'].map(b => <Knob key={b} label={b} />)}
              </div>
            </div>
            <GraphEQ />
          </div>
        </div>

        <div className="space-y-6">
          <AssistantPanel />
          <Connectivity />
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <SectionTitle icon={Wallet} title="Payments" subtitle="Purchase or subscribe" />
            <a href="#" className="inline-block px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20">Open Checkout</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studio
