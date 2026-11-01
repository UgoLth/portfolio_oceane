import type { Metadata } from 'next';
import './globals.css';
import './reference.css';
import './interactions.css';
import { withBasePath } from '../lib/site-path';

export const metadata: Metadata = {
  title: 'Océane Lemaître — Portfolio Mode',
  description: 'Portfolio d’Océane Lemaître, étudiante en stylisme et modélisme à ESMOD Roubaix.',
  icons: { icon: withBasePath("/assets/images/f0EhgXWunWZsCvCzDGy44b0jj6Y.png") },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
