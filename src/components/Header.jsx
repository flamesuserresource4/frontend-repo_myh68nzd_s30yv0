import { Phone, Mail } from 'lucide-react'

function Header() {
  return (
    <header className="border-b border-white/10 bg-slate-900/70 backdrop-blur sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white font-extrabold tracking-tight">BrightScore</div>
        <div className="hidden md:flex items-center gap-6 text-blue-200/80 text-sm">
          <a href="#plans" className="hover:text-white">Plans</a>
          <a href="#reviews" className="hover:text-white">Reviews</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3 text-blue-200">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4"/> (123) 456-7890</a>
          <a href="mailto:hello@brightscore.com" className="hidden sm:flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4"/> Email</a>
        </div>
      </div>
    </header>
  )
}

export default Header
