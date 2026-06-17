export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0 border-4 border-blue-100 shadow-md">
              <img src="/zulfia.jpg" alt="Зульфия — фельдшер скорой помощи" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Здравствуйте, я — Зульфия!</h2>
              <p className="mt-4 text-lg text-gray-600 leading-8">
                Фельдшер скорой помощи с <strong>37-летним стажем</strong>. За эти годы я приняла тысячи вызовов — знаю, что такое настоящий страх за близкого человека и как важно в нужный момент получить ясный ответ.
              </p>
              <p className="mt-3 text-lg text-gray-700 font-medium">Чем могу помочь:</p>

              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl mt-0.5">✅</span>
                  <span><strong>Подскажу, к какому врачу идти</strong> — терапевт, невролог, хирург или скорая? Разберёмся сразу.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl mt-0.5">✅</span>
                  <span><strong>Помогу понять результаты анализов</strong> — объясню на человеческом языке, без медицинского жаргона.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl mt-0.5">✅</span>
                  <span><strong>Скажу честно — скорая или подождёт</strong> — 37 лет на вызовах дают точное чутьё на срочность.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-500 text-xl mt-0.5">✅</span>
                  <span><strong>Советы по уходу и реабилитации</strong> — после травм, операций, для пожилых родственников.</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">
                <h3 className="text-lg font-bold text-gray-900">Почему мне доверяют?</h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold">·</span>
                    <span>37 лет на скорой — тысячи реальных случаев, никакой теории.</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold">·</span>
                    <span>Говорю просто: «к терапевту в понедельник» или «вызывайте скорую сейчас».</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500 font-bold">·</span>
                    <span>Консультирую на русском — никаких недопониманий из-за языка.</span>
                  </li>
                </ul>
              </div>

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
