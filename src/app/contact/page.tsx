import Contact from "@/components/home/Contact"
import FadeUp from "@/components/ui/FadeUp"

export const metadata = {
  title: "Contact | Adrian Oliver — Let's build your next project",
  description: "Get in touch to discuss your e-commerce, internal tool, or technical architecture needs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <Contact />
        </FadeUp>
      </div>
    </main>
  )
}
