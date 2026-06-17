export function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-white font-semibold text-lg">Спроси фельдшера</p>
        <p className="mt-2 text-sm">Фельдшер скорой помощи · 37 лет опыта · Испания</p>
        <div className="mt-6">
          <a
            href="https://t.me/zulfiia424820"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-white font-medium hover:bg-blue-600 transition"
          >
            Написать в Telegram
          </a>
        </div>
        <p className="mt-8 text-xs text-gray-600">© 2026 · Консультации носят информационный характер и не заменяют очный приём врача</p>
      </div>
    </footer>
  );
}
