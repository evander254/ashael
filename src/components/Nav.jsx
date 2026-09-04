import ScrollReveal from './ScrollReveal'

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-4">
      <nav className="glass-strong max-w-6xl mx-auto rounded-2xl flex items-center justify-between px-5 sm:px-7 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src="/ashael-logo.png" alt="Ashael Enterprises" className="h-8 w-auto" />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-ink">
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#work" className="nav-link">Portfolio</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#process" className="nav-link">Process</a></li>
          <li><a href="#faq" className="nav-link">FAQ</a></li>
        </ul>
        <a href="tel:+254711592290" className="btn hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold shadow-lg bg-ink" style={{ color: '#fff' }}>
          📞 +254 711 592290
        </a>
        <a href="#contact" className="btn sm:hidden inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold bg-ink" style={{ color: '#fff' }}>
          Contact
        </a>
      </nav>
    </header>
  )
}
