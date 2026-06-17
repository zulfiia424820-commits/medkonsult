export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Фельдшер скорой помощи · 37 лет опыта · Испания
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Не знаешь к какому врачу идти?
          <span className="block text-blue-600 mt-2">Спроси фельдшера скорой</span>
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
          Объясню на русском — без очередей, без языкового барьера, без лишних анализов.
          Отвечаю в течение нескольких часов.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/zulfiia424820"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            ✉️ Написать бесплатно в Telegram
          </a>
          <a
            href="#tseny"
            className="rounded-2xl border-2 border-blue-600 px-8 py-4 text-base font-semibold text-blue-600 hover:bg-blue-50 transition"
          >
            Посмотреть цены
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">Первая консультация — бесплатно</p>
      </div>
    </section>
  );
}
