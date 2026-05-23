import Link from 'next/link';

export default function SpasiboPage() {
  const telegramLink = process.env.NEXT_PUBLIC_TELEGRAM_LINK ?? '#';

  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center px-6">
      <div className="max-w-lg text-center rounded-3xl bg-white border border-gray-200 p-12 shadow-sm">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900">Оплата прошла!</h1>
        <p className="mt-4 text-lg text-gray-600">
          У вас <strong>5 консультаций</strong>. Ссылка и подтверждение отправлены на вашу почту.
        </p>
        <p className="mt-6 text-gray-600">
          Напишите мне в Telegram — и мы начнём:
        </p>
        <a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow hover:bg-blue-700 transition"
        >
          Написать в Telegram
        </a>
        <div className="mt-6">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600">
            ← На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
