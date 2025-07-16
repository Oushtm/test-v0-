'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Qui sommes nous ?', href: '/about' },
  { name: 'Simuler votre bien', href: '/simulate' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contacter nous', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-light tracking-wide">
              Rentabilio
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Connexion
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="text-xl font-light tracking-wide">
                Rentabilio
              </Link>
              <button
                type="button"
                className="text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-gray-600 hover:text-black transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="block text-sm text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connexion
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 