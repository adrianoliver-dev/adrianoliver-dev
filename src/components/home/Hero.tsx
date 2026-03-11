import HeroAnimations from "./HeroAnimations"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-6xl px-6 py-32">
        <HeroAnimations />
      </div>
    </section>
  )
}
