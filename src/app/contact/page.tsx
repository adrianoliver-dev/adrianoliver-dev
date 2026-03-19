import ContactForm from "@/components/home/ContactForm"
import FadeUp from "@/components/ui/FadeUp"

export const metadata = {
  title: "Contact | Adrian Oliver — Let's build your next project",
  description: "Get in touch to discuss your e-commerce, internal tool, or technical architecture needs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-32 px-6">
      <div className="mx-auto max-w-4xl font-sans">
        <FadeUp>
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">
              Let&apos;s build <em>something.</em>
            </h1>
            <p className="text-text-secondary text-lg">
              Tell me about your project, timeline, and goals.
            </p>
          </div>
          <ContactForm />
        </FadeUp>
      </div>
    </main>
  )
}
