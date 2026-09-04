import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const contactInfo = [
  { icon: '📍', label: 'Location', value: 'Fedha, Nairobi, Kenya' },
  { icon: '📞', label: 'Phone / WhatsApp', value: '+254 711 592290', href: 'tel:+254711592290' },
  { icon: '🕒', label: 'Working hours', value: 'Mon – Sat, 8:00am – 6:00pm' },
  { icon: '🖨️', label: 'Turnaround', value: 'Same-week on most design & print jobs' },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('Design')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Ashael Enterprises, I'm ${name} (${phone}).%0AService needed: ${service}%0ADetails: ${message || 'N/A'}`
    window.open(`https://wa.me/254711592290?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="px-4 sm:px-8 pb-28">
      <div className="max-w-6xl mx-auto glass-strong rounded-[2.5rem] p-8 sm:p-14 grid lg:grid-cols-2 gap-12">
        <ScrollReveal>
          <div className="text-xs font-bold mb-3 text-pink">GET IN TOUCH</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5">Tell us what you need printed or branded.</h2>
          <p className="text-[15px] mb-9 max-w-md text-ink-soft">
            Fill in the form and it opens a pre-filled WhatsApp message straight to our studio — or call, email, or drop by Fedha directly. We usually reply within the same working day.
          </p>

          <div className="space-y-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl glass flex items-center justify-center shrink-0">{c.icon}</div>
                <div>
                  <div className="font-bold text-sm">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-ink-soft">{c.value}</a>
                  ) : (
                    <div className="text-sm text-ink-soft">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-7 space-y-4">
            <div>
              <label className="text-xs font-bold block mb-1.5 text-ink-soft">Full name</label>
              <input
                required
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-sm bg-white/70 border border-white focus:border-pink transition"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold block mb-1.5 text-ink-soft">Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="07XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-sm bg-white/70 border border-white focus:border-pink transition"
                />
              </div>
              <div>
                <label className="text-xs font-bold block mb-1.5 text-ink-soft">Service needed</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-xl px-4 py-3 text-sm bg-white/70 border border-white focus:border-pink transition"
                >
                  <option>Design</option>
                  <option>Print</option>
                  <option>Branding</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-bold block mb-1.5 text-ink-soft">What do you need?</label>
              <textarea
                rows={4}
                placeholder="Tell us about the job — quantity, deadline, anything useful"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl px-4 py-3 text-sm bg-white/70 border border-white focus:border-pink transition resize-none"
              />
            </div>
            <button type="submit" className="btn w-full rounded-full py-3.5 text-sm font-bold text-white shadow-lg bg-pink" style={{ boxShadow: '0 14px 30px -8px rgba(247,72,138,0.5)' }}>
              Send via WhatsApp
            </button>
            <p className="text-xs text-center text-ink-soft">
              Prefer email or a call? Reach us at <a href="tel:+254711592290" className="font-semibold underline">+254 711 592290</a>.
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
