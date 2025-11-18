function Plans({ plans }) {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Pick your plan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-white">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="text-sm px-2 py-1 rounded-full bg-blue-500/20 text-blue-200">{p.level}</span>
              </div>
              <p className="text-blue-200/80 mt-2 text-sm">{p.description}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-3xl font-extrabold">${p.price}</span>
                <span className="text-blue-200/80">/ program</span>
              </div>
              <p className="text-blue-200/80 text-sm mt-1">{p.duration_weeks} weeks · {p.sessions_per_week} sessions/week</p>
              <ul className="mt-6 space-y-2 text-sm text-blue-100">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-blue-400">•</span>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
