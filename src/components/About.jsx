import ScrollReveal from './ScrollReveal'

const stats = [
  { value: '100+', label: 'design & print jobs completed for Nairobi businesses' },
  { value: 'Fedha', label: 'based studio, with on-site installs across Nairobi' },
  { value: '6 days', label: 'a week open, Monday through Saturday' },
  { value: '1 team', label: 'design, print and branding, no outsourcing' },
]

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-8 py-28">
      <div className="max-w-6xl mx-auto glass-strong rounded-[2.5rem] p-10 sm:p-16 grid lg:grid-cols-2 gap-14 items-center">
        <ScrollReveal>
          <div className="text-xs font-bold mb-3 text-pink">ABOUT ASHAEL</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            A Fedha studio built around one idea: your brand should look finished everywhere it appears.
          </h2>
          <p className="text-[15px] leading-relaxed mb-4 text-ink-soft">
            Ashael Enterprises started as a small design and print outfit in Fedha, Nairobi, and has grown into a full studio that businesses, restaurants, hotels, churches, DJs and families come to for one reason: consistency. A logo we design shows up correctly on the business card, the flier, the signboard and the vehicle — because the same team handles all of it.
          </p>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            We work with small businesses printing their first batch of fliers just as often as we work with hotels and restaurants rolling out staff uniforms and shop signage. Whatever the size of the job, it goes through the same process — a clear brief, a design proof you approve before we print, careful production, and delivery or installation on your timeline.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.value} className="glass rounded-2xl p-6">
                <div className="font-bold text-3xl font-[family-name:var(--font-space)]">{s.value}</div>
                <div className="text-xs mt-2 text-ink-soft">{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
