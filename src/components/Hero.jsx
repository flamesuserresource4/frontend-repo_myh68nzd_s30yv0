import { useEffect, useState } from 'react'

export default function Hero() {
  const [info, setInfo] = useState({ title: 'SAT Prep', subtitle: '', description: '', highlights: [] })
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/class`)
        const data = await res.json()
        setInfo(data)
      } catch (e) {
        // keep defaults
      }
    }
    fetchInfo()
  }, [baseUrl])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_35%)]" />
      <div className="max-w-6xl mx-auto px-6 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              {info.title}
            </h1>
            {info.subtitle && (
              <p className="mt-4 text-xl text-blue-200/90">{info.subtitle}</p>
            )}
            {info.description && (
              <p className="mt-6 text-blue-100/80 leading-relaxed">{info.description}</p>
            )}
            {info.highlights?.length > 0 && (
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {info.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-blue-100/90">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">View Pricing</a>
              <a href="#reviews" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur transition-colors">Read Reviews</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-white/10 shadow-2xl backdrop-blur flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-6xl font-black text-white/90">1500+</p>
                <p className="mt-2 text-blue-200">Average top-quartile scores</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-blue-100 backdrop-blur">
              Official practice • Weekly reports
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
