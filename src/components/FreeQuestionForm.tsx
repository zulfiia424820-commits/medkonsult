'use client';

import { useState } from 'react';

export function FreeQuestionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/free-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, question }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? 'Что-то пошло не так');

      setStatus('success');
      setName('');
      setEmail('');
      setQuestion('');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Ошибка отправки');
    }
  };

  if (status === 'success') {
    return (
      <section id="besplatno" className="py-20 px-6 bg-blue-50">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-3xl bg-white border border-green-200 p-10 shadow-sm">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900">Вопрос отправлен!</h2>
            <p className="mt-4 text-gray-600">Проверьте почту — я отправила подтверждение. Отвечу в ближайшее время и разберём вашу ситуацию вместе.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="besplatno" className="py-20 px-6 bg-blue-50">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">Бесплатная первая консультация</h2>
        <p className="mt-4 text-center text-gray-600">Опишите вашу ситуацию подробно — разберём вместе и найдём решение</p>
        <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-3xl bg-white border border-gray-200 p-8 shadow-sm">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Ваше имя</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Например: Анна"
              required
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email для ответа</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="anna@example.com"
              required
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Ваш вопрос / симптомы</span>
            <textarea
              rows={5}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Опишите подробно что вас беспокоит, как давно, что помогает или не помогает..."
              required
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </label>
          {status === 'error' && (
            <p className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">{errorMsg}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {status === 'loading' ? '⏳ Отправляем...' : 'Отправить вопрос'}
          </button>
        </form>
      </div>
    </section>
  );
}
