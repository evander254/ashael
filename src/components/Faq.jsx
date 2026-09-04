import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

const faqs = [
  {
    question: 'How long does a typical job take?',
    answer: 'Most design and print jobs — fliers, business cards, banners, cloth printing — are turned around within the same week. Larger jobs like signage or vehicle branding are scoped and timed during the consultation, since they depend on materials and installation scheduling.',
  },
  {
    question: 'Do you require a deposit?',
    answer: "For larger production and branding jobs, yes — a deposit secures materials and a production slot. Smaller design and print jobs are usually paid on collection. We'll confirm the terms when we quote your job.",
  },
  {
    question: 'Can you install signage and vehicle branding on-site?',
    answer: 'Yes. Signage, office branding and vehicle wraps are measured and installed at your premises across Nairobi, so the finished piece is fitted correctly the first time.',
  },
  {
    question: 'Is there a minimum order for apparel or cloth printing?',
    answer: "We print anything from a single branded T-shirt to full staff uniform runs. Pricing per unit improves with larger quantities, which we'll walk you through when you reach out.",
  },
  {
    question: 'Do I need a print-ready design file already?',
    answer: 'No — most clients come to us with just an idea, a photo, or a rough sketch. Our design team builds the artwork from scratch and sends you a proof before anything is printed.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="px-4 sm:px-8 py-28">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="text-xs font-bold mb-3 text-pink">QUESTIONS</div>
          <h2 className="text-4xl sm:text-5xl font-bold">Frequently asked questions.</h2>
        </ScrollReveal>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i}>
              <details
                className="faq-item glass rounded-2xl px-6 py-5"
                open={openIndex === i}
                onToggle={(e) => { if (e.target.open) setOpenIndex(i) }}
              >
                <summary className="flex items-center justify-between font-bold text-[15px]">
                  {faq.question}
                  <span className="chev text-xl text-pink">+</span>
                </summary>
                <p className="text-sm mt-3 text-ink-soft">{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
