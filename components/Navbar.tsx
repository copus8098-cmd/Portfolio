// components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/work', label: 'work' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Portfolio<span className="text-blue-600">.</span>
        </Link>
        <ul className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-blue-600 transition">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-2">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className="block py-2" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}