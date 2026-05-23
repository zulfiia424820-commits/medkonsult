import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramMessage } from '@/lib/telegram';
import { sendEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  const { name, email, question } = await request.json();

  if (!name?.trim() || !email?.trim() || !question?.trim()) {
    return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 });
  }

  await sendTelegramMessage(
    `🆕 <b>Новый бесплатный вопрос</b>\n\n` +
    `👤 <b>Имя:</b> ${name}\n` +
    `📧 <b>Email:</b> ${email}\n\n` +
    `❓ <b>Вопрос:</b>\n${question}`
  );

  await sendEmail(
    email,
    'Ваш вопрос получен — медицинская консультация',
    `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1d4ed8;">Здравствуйте, ${name}!</h2>
      <p>Ваш вопрос получен. Я отвечу вам в ближайшее время.</p>
      <div style="background: #f1f5f9; border-radius: 12px; padding: 16px; margin: 20px 0;">
        <p style="margin: 0; color: #64748b; font-size: 14px;">Ваш вопрос:</p>
        <p style="margin: 8px 0 0; color: #1e293b;">${question}</p>
      </div>
      <p style="color: #64748b; font-size: 14px;">С уважением,<br>Ваш медицинский консультант</p>
    </div>`
  );

  return NextResponse.json({ success: true });
}
