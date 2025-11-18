import { useEffect, useState } from 'react'

const formatUSD = (v) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v)

export default function Pricing() {
  const [plans, setPlans] = useState([
    { name: 'Essentials', price: 299, frequency: 'per course', features: ['Diagnostic test', '8 live sessions', 'Homework sets'], popular: false },
    { name: 'Plus', price: 599, frequency: 'per course', features: ['Everything in Essentials', '16 live sessions', '2 practice exams'], popular: true },
    { name: '1:1 Elite', price: 1299, frequency: 'per month', features: ['Personalized plan', 'Weekly 1:1 tutoring', 'Priority support'], popular: false },
  ])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/plans`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length) setPlans(data)
        }
      } catch (e) {}
    }
    fetchPlans()
  }, [baseUrl])

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-200/80">Choose the plan that fits your schedule and goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.popular ? 'border-blue-400/40 bg-blue-500/5' : 'border-white/10 bg-white/5'} p-6 backdrop-blur shadow-xl` }>
              {p.popular && (
                <div className="inline-block mb-3 text-xs font-semibold text-blue-700 bg-blue-200/70 px-2.5 py-1 rounded-full">Most popular</div>
              )}
              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">{formatUSD(p.price)}</span>
                <span className="text-blue-200/70">{p.frequency}</span>
              </div>
              <ul className="mt-6 space-y-2 text-blue-100/90 text-sm">
                {p.features?.map((f, i) => (
                  <li key={i} className="flex gap-2 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg transition-colors">Enroll</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
