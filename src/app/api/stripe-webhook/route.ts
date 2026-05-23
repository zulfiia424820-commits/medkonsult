import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendTelegramMessage } from '@/lib/telegram';
import { sendEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const clientEmail = session.customer_details?.email ?? '';
    const clientName = session.customer_details?.name ?? 'Клиент';
    const telegramLink = process.env.TELEGRAM_CONSULTANT_LINK ?? '';

    await sendTelegramMessage(
      `💰 <b>Новая оплата!</b>\n\n` +
      `👤 <b>Имя:</b> ${clientName}\n` +
      `📧 <b>Email:</b> ${clientEmail}\n` +
      `💶 <b>Сумма:</b> 25€\n\n` +
      `📱 Ожидайте — клиент напишет в Telegram`
    );

    if (clientEmail) {
      await sendEmail(
        clientEmail,
        '✅ Оплата прошла — ваша ссылка на консультацию',
        `<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8;">Здравствуйте, ${clientName}!</h2>
          <p>Оплата <strong>25€</strong> прошла успешно. У вас <strong>5 консультаций</strong>.</p>
          <p style="margin-top: 24px;">Напишите мне в Telegram, чтобы начать:</p>
          <a href="${telegramLink}" style="display: inline-block; margin-top: 12px; background: #1d4ed8; color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: 600;">
            Написать в Telegram
          </a>
          <p style="margin-top: 32px; color: #94a3b8; font-size: 14px;">
            Срок действия пакета — 3 месяца с даты оплаты.<br>
            Консультации носят информационный характер.
          </p>
        </div>`
      );
    }
  }

  return NextResponse.json({ received: true });
}
