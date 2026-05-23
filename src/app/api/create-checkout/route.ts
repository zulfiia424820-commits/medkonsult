import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(_request: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key || key === 'ПОКА_ПУСТО') {
    return NextResponse.json({ error: 'Оплата временно недоступна' }, { status: 503 });
  }

  const stripe = new Stripe(key);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: '5 медицинских консультаций',
            description: 'Пакет из 5 онлайн-консультаций с опытным фельдшером на русском языке',
          },
          unit_amount: 2500,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/spasibo?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#tseny`,
  });

  return NextResponse.json({ url: session.url });
}
