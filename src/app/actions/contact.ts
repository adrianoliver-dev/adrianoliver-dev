'use server'

import { Resend } from 'resend'
import { z } from 'zod'

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

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'adrianoliver.dev@gmail.com',
      subject: `New project inquiry from ${name} — Budget: ${budget}`,
      text: `
Name: ${name}
Email: ${email}
Budget: ${budget}
Message:
${message}
      `.trim(),
    })
    return { status: 'success', message: 'Message sent. I\'ll reply within 24 hours.' }
  } catch {
    return { status: 'error', message: 'Failed to send. Email me directly at adrianoliver.dev@gmail.com' }
  }
}
