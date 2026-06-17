'use client';

import { useState } from 'react';

export function PricingSection() {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout', { method: 'POST' });
      const data = await response.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tseny" className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">Цены</h2>
        <p className="mt-4 text-center text-gray-600">Начните бесплатно — убедитесь что это работает</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Free card */}
          <div className="rounded-3xl border-2 border-gray-200 bg-gray-50 p-8 flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Попробовать</p>
            <p className="mt-3 text-4xl font-bold text-gray-900">0€</p>
            <p className="mt-2 text-gray-600">Первая консультация</p>
            <ul className="mt-6 space-y-3 flex-1">
              {[
                'Полноценная консультация по вашей проблеме',
                'Разбор симптомов и рекомендации',
                'Совет к какому врачу обратиться',
                'Ответ на русском языке',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/zulfiia424820"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center rounded-2xl border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Написать в Telegram
            </a>
          </div>

          {/* Single card */}
          <div className="rounded-3xl border-2 border-gray-200 bg-gray-50 p-8 flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">Разовая</p>
            <p className="mt-3 text-4xl font-bold text-gray-900">15€</p>
            <p className="mt-2 text-gray-600">1 консультация</p>
            <ul className="mt-6 space-y-3 flex-1">
              {[
                'Полноценная консультация в Telegram',
                'Чат + голос + видео по выбору',
                'Без ограничений по времени',
                'Ответ в течение нескольких часов',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://t.me/zulfiia424820"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block text-center rounded-2xl border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Написать в Telegram
            </a>
          </div>

          {/* Paid card */}
          <div className="rounded-3xl border-2 border-blue-600 bg-blue-600 p-8 flex flex-col text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Выгоднее всего</p>
            <p className="mt-3 text-4xl font-bold">60€</p>
            <p className="mt-2 text-blue-200">5 консультаций · 12€ каждая</p>
            <ul className="mt-6 space-y-3 flex-1">
              {[
                '5 полноценных консультаций в Telegram',
                'Чат + голос + видео по выбору',
                'Без ограничений по времени',
                'Срок действия — 3 месяца',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-100">
                  <span className="text-white font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <button
              onClick={handleBuy}
              disabled={loading}
              className="mt-8 block w-full text-center rounded-2xl bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 disabled:opacity-60 transition"
            >
              {loading ? '⏳ Переходим к оплате...' : 'Купить 5 консультаций'}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
