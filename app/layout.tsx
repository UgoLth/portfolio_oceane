import type { Metadata } from 'next';
import './globals.css';
import './reference.css';
import './interactions.css';

export const metadata: Metadata = {
  title: 'Océane Lemaître — Portfolio Mode',
  description: 'Portfolio d’Océane Lemaître, étudiante en stylisme et modélisme à ESMOD Roubaix.',
  icons: { icon: '/assets/images/f0EhgXWunWZsCvCzDGy44b0jj6Y.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
