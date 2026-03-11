export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
        <p className="text-sm text-text-secondary font-mono">
          © {year} Adrian Oliver
        </p>
        <p className="text-sm text-text-secondary">
          Built with Next.js 15 · Deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
