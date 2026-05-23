export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <span className="text-6xl">👩‍⚕️</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Здравствуйте!</h2>
              <p className="mt-4 text-lg text-gray-600 leading-8">
                Я — фельдшер скорой помощи с <strong>37-летним стажем</strong>. Знаю, как бывает непросто попасть к врачу: очереди, записи, а иногда и просто страшно или дорого.
              </p>
              <p className="mt-3 text-lg text-gray-700 font-medium">Я здесь, чтобы помочь вам быстро и без стресса:</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl mt-0.5">✅</span>
                  <span><strong>Подскажу, к какому врачу обратиться</strong> — разберёмся, нужен ли терапевт, хирург, невролог или другой специалист.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl mt-0.5">✅</span>
                  <span><strong>Дам советы по уходу и реабилитации</strong> — как правильно ухаживать за больным, что делать после травм или операций.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl mt-0.5">✅</span>
                  <span><strong>Помогу понять, когда нужна скорая, а когда можно лечиться дома</strong> — чтобы не тратить нервы и деньги зря.</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">
                <h3 className="text-lg font-bold text-gray-900">Почему мне можно доверять?</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold">·</span>
                    <span>37 лет на скорой — это тысячи спасённых жизней и реальных историй.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold">·</span>
                    <span>Говорю просто и понятно, без сложных медицинских терминов.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold">·</span>
                    <span>Даю только проверенные советы, основанные на многолетнем опыте.</span>
                  </li>
                </ul>
              </div>

              <p className="mt-6 text-lg font-semibold text-blue-600">
                Не откладывайте здоровье на потом! Напишите мне прямо сейчас — вместе разберёмся с вашей ситуацией.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {['37 лет опыта', 'Фельдшер скорой', 'Испания', 'Русский язык'].map((tag) => (
                  <span key={tag} className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
