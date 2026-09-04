const items = [
  { text: 'DESIGN', color: 'text-ink' },
  { text: 'PRINT', color: 'text-cyan' },
  { text: 'BRAND', color: 'text-pink' },
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="border-y border-white/70 py-6 overflow-hidden bg-white/40">
      <div className="marquee">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className={`font-bold text-3xl px-6 font-[family-name:var(--font-space)] ${item.color}`}>
              {item.text}
            </span>
            <span className="font-bold text-3xl text-yellow">&#8226;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
