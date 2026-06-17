export function TelegramCTA() {
  return (
    <section id="besplatno" className="py-20 px-6 bg-blue-50">
      <div className="mx-auto max-w-2xl text-center">
        <div className="rounded-3xl bg-white border border-gray-200 p-10 shadow-sm">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-3xl font-bold text-gray-900">Задайте вопрос бесплатно</h2>
          <p className="mt-4 text-lg text-gray-600 leading-8">
            Первая консультация — бесплатно. Просто напишите в Telegram что вас беспокоит.
            Отвечу в течение нескольких часов.
          </p>
          <a
            href="https://t.me/zulfiia424820"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-2xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            ✉️ Написать в Telegram
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Или напишите напрямую: <span className="font-medium text-blue-600">@zulfiia424820</span>
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">37</p>
              <p className="text-xs text-gray-500 mt-1">лет опыта</p>
            </div>
            <div className="text-center border-x border-gray-100">
              <p className="text-2xl font-bold text-gray-900">24ч</p>
              <p className="text-xs text-gray-500 mt-1">время ответа</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">🇷🇺</p>
              <p className="text-xs text-gray-500 mt-1">на русском</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
