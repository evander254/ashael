import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    text: 'We sent through a rough idea for our shop sign and had a proof to approve within a day. Installation was clean and the sign has held up well through the rains.',
    author: 'Butchery Owner',
    role: 'Signage client, Nairobi',
  },
  {
    text: 'Staff uniforms for our whole front-of-house and kitchen team were printed and ready before our opening date, with the sizing sorted out in advance.',
    author: 'Restaurant Manager',
    role: 'Apparel client, Nairobi',
  },
  {
    text: 'Memorial programs for a family service were designed with care and printed in time, with no issues on collection day despite a tight deadline.',
    author: 'Family Representative',
    role: 'Print client, Nairobi',
  },
]

export default function Testimonials() {
  return (
    <section className="px-4 sm:px-8 py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-xl mx-auto mb-14">
          <div className="text-xs font-bold mb-3 text-cyan">CLIENT FEEDBACK</div>
          <h2 className="text-4xl sm:text-5xl font-bold">What it's like working with us.</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <ScrollReveal key={t.author}>
              <div className="glass rounded-3xl p-7 h-full">
                <p className="text-sm leading-relaxed text-ink-soft">{t.text}</p>
                <div className="mt-5 text-sm font-bold">{t.author}</div>
                <div className="text-xs text-ink-soft">{t.role}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
