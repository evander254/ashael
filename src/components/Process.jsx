import ScrollReveal from './ScrollReveal'

const steps = [
  { step: 'STEP 01', color: 'text-cyan', title: 'Brief & consultation', description: 'Call, WhatsApp or visit us in Fedha. We ask about your brand, the deadline and the budget before quoting.' },
  { step: 'STEP 02', color: 'text-pink', title: 'Design & proof', description: 'You see and approve a proof before anything goes to print, so there are no surprises on collection day.' },
  { step: 'STEP 03', color: 'text-gold', title: 'Production', description: 'Printing, cutting, pressing or fabricating happens in-house, using materials suited to the job.' },
  { step: 'STEP 04', color: 'text-cyan', title: 'Delivery & install', description: 'Collect from Fedha, or we deliver and install signage and branding directly at your premises.' },
]

export default function Process() {
  return (
    <section id="process" className="px-4 sm:px-8 py-28">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold mb-3 text-cyan">HOW WE WORK</div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">From your first message to a finished job.</h2>
          <p className="text-sm text-ink-soft">A simple, four-step process that keeps every job — big or small — moving without surprises.</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <ScrollReveal key={s.step}>
              <div className="glass rounded-3xl p-7 h-full">
                <div className={`text-xs font-bold mb-4 ${s.color}`}>{s.step}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-ink-soft">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
