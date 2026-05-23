import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Медицинская консультация онлайн | Фельдшер скорой помощи',
  description: 'Онлайн консультация с опытным фельдшером на русском языке. Первый вопрос бесплатно. Работаем по всему миру.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
