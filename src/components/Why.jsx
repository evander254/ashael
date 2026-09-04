import ScrollReveal from './ScrollReveal'

const reasons = [
  { number: '01', title: 'Everything under one roof', description: 'Design, print and physical branding are handled by the same team, so nothing gets lost between a logo file and the banner it ends up on.' },
  { number: '02', title: 'Built for Nairobi business', description: 'From club posters to hotel menus, our work is shaped by the local market — realistic pricing and quick turnarounds without cutting corners.' },
  { number: '03', title: 'On-site branding', description: 'Office signage and vehicle branding are installed on location, so your space and fleet start working as marketing from day one.' },
]

export default function Why() {
  return (
    <section className="px-4 sm:px-8 py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal className="relative h-[420px] hidden lg:flex items-center justify-center">
          <div className="absolute rounded-full border" style={{ width: 180, height: 180, borderColor: 'rgba(21,14,43,0.08)' }} />
          <div className="absolute rounded-full border" style={{ width: 280, height: 280, borderColor: 'rgba(21,14,43,0.08)' }} />
          <div className="absolute rounded-full border" style={{ width: 380, height: 380, borderColor: 'rgba(21,14,43,0.08)' }} />
          <div className="glass-strong rounded-3xl w-28 h-28 flex items-center justify-center font-bold text-sm text-center px-2 font-[family-name:var(--font-space)]">ASHAEL</div>
          <div className="glass absolute top-[10%] left-[6%] rounded-full px-4 py-2 text-xs font-semibold">Design</div>
          <div className="glass absolute bottom-[14%] right-[4%] rounded-full px-4 py-2 text-xs font-semibold">Vehicle wraps</div>
          <div className="glass absolute top-[8%] right-[8%] rounded-full px-4 py-2 text-xs font-semibold">Large format</div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <div className="text-xs font-bold mb-3 text-pink">WHY ASHAEL</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">Three reasons Nairobi businesses come back.</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {reasons.map((r) => (
              <ScrollReveal key={r.number}>
                <div className="flex gap-5">
                  <div className="font-bold text-sm font-[family-name:var(--font-space)] text-yellow" style={{ WebkitTextStroke: '1px var(--color-ink)' }}>{r.number}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1.5">{r.title}</h3>
                    <p className="text-sm text-ink-soft">{r.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
