import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Hero() {
  const stackRef = useRef(null)
  const stackInnerRef = useRef(null)

  useEffect(() => {
    const cards = stackInnerRef.current?.querySelectorAll('.card3d')
    if (cards) {
      cards.forEach((el, i) => {
        setTimeout(() => { el.style.opacity = 1 }, 350 + i * 160)
      })
    }

    const main = document.querySelector('main')
    const inner = stackInnerRef.current
    if (!main || !inner || !window.matchMedia('(min-width: 1024px)').matches) return

    const handleMouseMove = (e) => {
      const rect = stackRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      inner.style.transform = `rotateY(${-14 + dx * 16}deg) rotateX(${6 - dy * 12}deg)`
      inner.querySelectorAll('.card3d').forEach(card => {
        const depth = parseFloat(card.dataset.depth) || 30
        card.style.transform = `translateZ(${depth}px) translate(${dx * depth * 0.4}px, ${dy * depth * 0.3}px)`
      })
    }
    main.addEventListener('mousemove', handleMouseMove)
    return () => main.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative pt-40 pb-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold mb-6 text-ink-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-pink" />
              FEDHA, NAIROBI &middot; DESIGN, PRINT &amp; BRAND STUDIO
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1 className="text-[42px] sm:text-6xl lg:text-[64px] leading-[1.02] font-bold">
              Ideas printed, worn, hung and driven around <span className="grad-text">Nairobi.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="mt-7 text-lg leading-relaxed max-w-xl text-ink-soft">
              Ashael Enterprises is a design, print and branding studio based in Fedha, Nairobi. We take a business from a rough idea on WhatsApp to a finished logo, a printed banner, a branded fleet, or a lit-up shop sign — usually within the same week. Every job you see below is real work we've produced for real Nairobi businesses.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg bg-pink" style={{ boxShadow: '0 14px 30px -8px rgba(247,72,138,0.55)' }}>
                Start a project
              </a>
              <a href="#work" className="btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold glass text-ink">
                View our work
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-bold text-2xl font-[family-name:var(--font-space)]">3</div>
                <div className="text-xs mt-1 text-ink-soft">service lines</div>
              </div>
              <div>
                <div className="font-bold text-2xl font-[family-name:var(--font-space)]">20+</div>
                <div className="text-xs mt-1 text-ink-soft">print &amp; brand products</div>
              </div>
              <div>
                <div className="font-bold text-2xl font-[family-name:var(--font-space)]">Same-week</div>
                <div className="text-xs mt-1 text-ink-soft">turnaround, most jobs</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="stack hidden lg:block relative h-[480px]" ref={stackRef}>
          <div className="stack-inner relative w-full h-full" ref={stackInnerRef}>
            <div className="card3d glass-strong absolute rounded-3xl p-6 w-64 h-80 flex flex-col justify-between" style={{ top: 0, left: 10, zIndex: 1 }} data-depth="30">
              <span className="text-xs font-bold tracking-wide text-cyan">DESIGN</span>
              <div>
                <div className="font-bold text-2xl leading-tight font-[family-name:var(--font-space)]">Logos &amp; company profiles</div>
                <p className="text-xs mt-3 text-ink-soft">Identity built to hold up on a phone screen and a signboard alike.</p>
              </div>
            </div>
            <div className="card3d glass-strong absolute rounded-3xl p-6 w-64 h-80 flex flex-col justify-between" style={{ top: 70, left: 150, zIndex: 3 }} data-depth="60">
              <span className="text-xs font-bold tracking-wide text-pink">PRINT</span>
              <div>
                <div className="font-bold text-2xl leading-tight font-[family-name:var(--font-space)]">Banners, flags &amp; cloth print</div>
                <p className="text-xs mt-3 text-ink-soft">Large-format work that survives sun, rain and handling.</p>
              </div>
            </div>
            <div className="card3d glass-strong absolute rounded-3xl p-6 w-56 h-52 flex flex-col justify-between" style={{ top: 200, left: 40, zIndex: 2 }} data-depth="15">
              <span className="text-xs font-bold tracking-wide text-gold">BRAND</span>
              <div className="font-bold text-xl leading-tight font-[family-name:var(--font-space)]">Signage &amp; vehicle wraps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
