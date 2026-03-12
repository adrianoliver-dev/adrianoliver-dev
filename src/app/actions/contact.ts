'use server'

import { Resend } from 'resend'
import { z } from 'zod'
import { adminEmailHtml, confirmationEmailHtml } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  budget: z.enum(['<1k', '1k-3k', '3k-5k', '5k+']),
  message: z.string().min(10).max(2000),
})

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    budget: formData.get('budget'),
    message: formData.get('message'),
  }

  const parsed = ContactSchema.safeParse(raw)
  if (!parsed.success) {
    return { status: 'error', message: 'Invalid form data. Please check all fields.' }
  }

  const { name, email, budget, message } = parsed.data
  const adminEmail = process.env.ADMIN_EMAIL || 'adrianoliver.dev@gmail.com'

  try {
    await Promise.all([
      resend.emails.send({
        from: 'Adrian Oliver <hello@adrianoliver.dev>',
        to: adminEmail,
        subject: `New inquiry from ${name} — ${budget}`,
        replyTo: email,
        html: adminEmailHtml({ name, email, budget, message }),
      }),
      resend.emails.send({
        from: 'Adrian Oliver <hello@adrianoliver.dev>',
        to: email,
        subject: "Got your message — I'll reply within 24h",
        html: confirmationEmailHtml({ name }),
      }),
    ])
    return { status: 'success', message: "Message sent. I'll reply within 24 hours." }
  } catch {
    return { status: 'error', message: `Failed to send. Email me directly at ${adminEmail}` }
  }
}
