import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-10 backdrop-blur bg-slate-900/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-500" />
            <span className="font-semibold">Elite SAT</span>
          </div>
          <nav className="hidden sm:flex gap-6 text-sm text-blue-200/80">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Pricing />
        <Reviews />
      </main>

      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Elite SAT Prep</p>
          <div className="flex gap-4">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
            <a href="/test" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
