import ScrollReveal from './ScrollReveal'

const projects = [
  {
    image: '/work-signage.jpg',
    alt: 'CK Meat Hub illuminated shop signage',
    category: 'BRANDING · SIGNAGE',
    categoryColor: 'text-gold',
    title: 'Shopfront signage, CK Meat Hub',
    description: 'Backlit acrylic signboard with cut lettering, produced and installed on-site.',
  },
  {
    image: '/work-restaurant-apparel.jpg',
    alt: 'Cook Book Restaurant branded staff apparel',
    category: 'PRINT · APPAREL',
    categoryColor: 'text-pink',
    title: 'Staff uniforms, Cook Book Restaurant',
    description: 'Branded T-shirts and polos, printed to match front-of-house and kitchen roles.',
  },
  {
    image: '/work-hotel-cloth.jpg',
    alt: 'New Vine Hotel branded cloth printing',
    category: 'PRINT · CLOTH',
    categoryColor: 'text-pink',
    title: 'Branded linen, New Vine Hotel',
    description: 'Cloth printing with hotel name and contact details, for in-room and staff use.',
  },
  {
    image: '/work-jersey-press.jpg',
    alt: 'Heat-press jersey printing in progress',
    category: 'PRINT · SPORTSWEAR',
    categoryColor: 'text-pink',
    title: 'Heat-pressed team jerseys',
    description: 'Vinyl name and number printing, pressed for a durable, wash-resistant finish.',
  },
  {
    image: '/work-business-card.jpg',
    alt: 'DJ Stevie M business card design',
    category: 'DESIGN · BUSINESS CARD',
    categoryColor: 'text-cyan',
    title: 'Business card, DJ Stevie M',
    description: 'Personal brand card design with photo, socials and a clean dark layout.',
  },
  {
    image: '/work-memorial-program.jpg',
    alt: 'Memorial program booklet printing',
    category: 'PRINT · MEMORIAL PROGRAM',
    categoryColor: 'text-pink',
    title: 'Memorial service booklets',
    description: 'Full-colour "celebrating the life of" programs, printed and bound for a service.',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="px-4 sm:px-8 py-8 pb-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-bold mb-3 text-cyan">RECENT WORK</div>
            <h2 className="text-4xl sm:text-5xl font-bold max-w-lg">Straight off our production table.</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-soft">
            A working sample of jobs we've printed and branded for clients across Nairobi — from a heat-pressed jersey to a lit shopfront sign.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ScrollReveal key={p.title}>
              <div className="gal-card glass rounded-3xl">
                <div className="aspect-[4/3] overflow-hidden rounded-t-3xl">
                  <img src={p.image} alt={p.alt} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className={`text-xs font-bold mb-1 ${p.categoryColor}`}>{p.category}</div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-sm mt-1 text-ink-soft">{p.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
