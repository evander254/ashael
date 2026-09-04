import ScrollReveal from './ScrollReveal'

const services = [
  {
    title: 'Design',
    dotClass: 'bg-cyan',
    bgClass: 'bg-cyan/14',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L15 9 L22 10 L17 15 L18 22 L12 18.5 L6 22 L7 15 L2 10 L9 9 Z" stroke="#18B3E8" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    description: 'The creative groundwork — every logo, flier and profile we design is built to work in print and on a screen, using colours and fonts that stay consistent everywhere your brand shows up.',
    items: ['Logos & visual identity', 'Fliers & club posters', 'Brochures', 'Company profiles', 'Business cards & more'],
  },
  {
    title: 'Print',
    dotClass: 'bg-pink',
    bgClass: 'bg-pink/14',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="9" width="16" height="8" rx="1.5" stroke="#F7488A" strokeWidth="1.6" />
        <path d="M7 9V4h10v5M7 17v4h10v-4" stroke="#F7488A" strokeWidth="1.6" />
      </svg>
    ),
    description: 'Our production side — large-format, cloth and everyday print. If it needs to be seen, handed out, worn or displayed, we\'ve likely printed it before, from a single card to a few hundred units.',
    items: ['Flags & banners', 'Cloth & apparel printing', 'Eulogies & memorial programs', 'Business cards', 'Hotel menus & more'],
  },
  {
    title: 'Branding',
    dotClass: 'bg-gold',
    bgClass: 'bg-gold/22',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18M12 3v18" stroke="#c9a92c" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="9" stroke="#c9a92c" strokeWidth="1.6" />
      </svg>
    ),
    description: 'Turning a space or a fleet into a marketing asset. We measure, design and install on-site, so your shopfront, office or vehicle starts advertising the moment we\'re done.',
    items: ['Signage & shopfronts', 'Office branding', 'Vehicle branding', 'And much more'],
  },
]

export default function Services() {
  return (
    <section id="services" className="px-4 sm:px-8 py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-bold mb-3 text-pink">WHAT WE DO</div>
            <h2 className="text-4xl sm:text-5xl font-bold max-w-lg">Three service lines, handled by one studio.</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            Most clients come to us for one thing and end up using all three — a logo becomes a flier, the flier becomes a banner, the banner becomes a signboard. Here's the full menu.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ScrollReveal key={s.title}>
              <div className="service-card glass rounded-3xl p-8 h-full">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.bgClass}`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm mb-5 text-ink-soft">{s.description}</p>
                <ul className="text-sm space-y-2.5 text-ink-soft">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${s.dotClass}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
