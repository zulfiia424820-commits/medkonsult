export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Фельдшер скорой помощи · 20+ лет опыта
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Медицинская консультация онлайн
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
          Понятный медицинский совет на русском языке — без очередей и языкового барьера. Где бы вы ни находились.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#besplatno"
            className="rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Бесплатная первая консультация
          </a>
          <a
            href="#tseny"
            className="rounded-2xl border-2 border-blue-600 px-8 py-4 text-base font-semibold text-blue-600 hover:bg-blue-50 transition"
          >
            Купить 5 консультаций — 25€
          </a>
        </div>
      </div>
    </section>
  );
}
