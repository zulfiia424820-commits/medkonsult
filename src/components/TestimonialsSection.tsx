const testimonials = [
  {
    name: 'Марина, Барселона',
    text: 'Муж упал, сильно ударился головой. Не знала — скорую или сами в больницу. Зульфия ответила за 20 минут, объяснила на что смотреть и когда звонить 112. Очень спокойно и чётко.',
    emoji: '🙏',
  },
  {
    name: 'Дмитрий',
    text: 'Ночью разболелся зуб — ни одного специалиста не найти. Написал Зульфие, она помогла снять боль, дала рекомендации и обезболивающее на один приём — хватило до утра. Спасибо огромное!',
    emoji: '❤️',
  },
  {
    name: 'Александр',
    text: 'Боль и отёк коленного сустава, поставили бурсит. Пока врачи долго консультировали и обследовали — Зульфия посоветовала компрессы. К концу обследования отёк уже спал и боль почти прошла. Реально помогло.',
    emoji: '⭐',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">Что говорят люди</h2>
        <p className="mt-3 text-center text-gray-600">Реальные истории от тех, кто уже написал</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-gray-200 bg-gray-50 p-8 flex flex-col">
              <div className="text-4xl mb-4">{t.emoji}</div>
              <p className="text-gray-700 leading-7 flex-1">«{t.text}»</p>
              <p className="mt-6 text-sm font-semibold text-blue-600">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
