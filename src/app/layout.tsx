import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'amtrixmarketing — Marketing Agency',
  description: 'Wir bauen Marken, Websites und digitale Erlebnisse mit Intention, Klarheit und Leidenschaft.',
  openGraph: {
    title: 'amtrixmarketing — Marketing Agency',
    description: 'Wir bauen Marken, Websites und digitale Erlebnisse mit Intention, Klarheit und Leidenschaft.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
