export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 pb-10">
      <div className="max-w-6xl mx-auto border-t border-white/70 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold font-[family-name:var(--font-space)]">
          <img src="/ashael-logo.png" alt="Ashael Enterprises" className="h-6" /> ENTERPRISES
        </div>
        <p className="text-xs text-ink-soft">&copy; 2026 Ashael Enterprises · Fedha, Nairobi · Design · Print · Brand</p>
      </div>
    </footer>
  )
}
