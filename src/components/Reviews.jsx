import { useEffect, useState } from 'react'

const stars = (n) => '★★★★★☆☆☆☆☆'.slice(5 - Math.max(0, Math.min(5, n)), 10 - Math.max(0, Math.min(5, n)))

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { name: 'Ava S.', rating: 5, comment: 'Jumped 180 points in 6 weeks. The weekly reports kept me accountable.', role: 'Student' },
    { name: 'Michael R.', rating: 5, comment: 'Clear curriculum and fantastic tutors. Worth every dollar.', role: 'Parent' },
    { name: 'Noah K.', rating: 4, comment: 'Great pace and materials. Practice exams felt very realistic.', role: 'Student' },
  ])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/reviews`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length) setReviews(data)
        }
      } catch (e) {}
    }
    fetchReviews()
  }, [baseUrl])

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What students and parents say</h2>
          <p className="mt-3 text-blue-200/80">Transparent, unfiltered feedback from real sessions.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold">{r.name}</p>
                <div className="text-yellow-300" aria-label={`${r.rating} out of 5 stars`}>
                  {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                </div>
              </div>
              <p className="mt-4 text-blue-100/90">{r.comment}</p>
              {r.role && <p className="mt-2 text-xs text-blue-200/70">{r.role}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
