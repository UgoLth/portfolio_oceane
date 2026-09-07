import type { Metadata } from 'next';
import './globals.css';
import './reference.css';
import './interactions.css';

export const metadata: Metadata = {
  title: 'Fuel - Premium Agency & Portfolio',
  description: 'Fuel, a premium agency framer template, is a perfect fit for designers, freelancers, agencies, and photographers.',
  icons: { icon: '/assets/images/f0EhgXWunWZsCvCzDGy44b0jj6Y.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
