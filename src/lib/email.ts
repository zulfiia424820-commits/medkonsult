import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  await resend.emails.send({
    from: 'Медконсультация <onboarding@resend.dev>',
    to,
    subject,
    html,
  });
}
