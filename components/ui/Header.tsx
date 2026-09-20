'use client';

import { motion } from 'motion/react';

const links = [
  { label: 'À PROPOS', href: '#about', number: '01' },
  { label: 'PROJETS', href: '#portfolio', number: '02' },
  { label: 'SAVOIR-FAIRE', href: '#services', number: '03' },
  { label: 'CONTACT', href: '#contact', number: '04' },
  { label: 'ARCHIVES', href: '#archive', number: '05' },
];

export function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8, ease: [.44, 0, .34, .98] }}
    >
      <nav id="main-navigation" aria-label="Navigation principale">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            <span>{link.label}</span>
            <sup>{link.number}</sup>
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
