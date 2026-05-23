const steps = [
  {
    number: '01',
    icon: '✍️',
    title: 'Опишите симптомы',
    description: 'Напишите что вас беспокоит — подробно, своими словами. Не стесняйтесь, здесь нет лишних деталей.',
  },
  {
    number: '02',
    icon: '💬',
    title: 'Получите ответ',
    description: 'Я отвечу в течение нескольких часов. Объясню что происходит, что делать и стоит ли идти к врачу.',
  },
  {
    number: '03',
    icon: '📞',
    title: 'При необходимости — созвонимся',
    description: 'Если нужно — можем поговорить голосом или видео через Telegram. Вы выбираете удобный формат.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">Как это работает</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="rounded-3xl bg-white border border-gray-200 p-8 text-center shadow-sm">
              <div className="text-5xl mb-4">{step.icon}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">Шаг {step.number}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
