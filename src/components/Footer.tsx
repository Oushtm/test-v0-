'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Simulateur', href: '/simulate' },
    { name: 'Contact', href: '/#contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'CGU', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Quick Links */}
          <div className="flex flex-col sm:items-center md:items-start">
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-left sm:text-center md:text-left">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#0fc28b] transition-colors duration-300 text-sm sm:text-base py-1 block text-left sm:text-center md:text-left"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:items-center md:items-start">
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-left sm:text-center md:text-left">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 group">
                <MapPin className="h-5 w-5 text-[#0fc28b] mr-3" />
                <span className="text-sm sm:text-base">Maroc, Casablanca</span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <Phone className="h-5 w-5 text-[#0fc28b] mr-3" />
                <span className="text-sm sm:text-base">(+212) 660-408470</span>
              </li>
              <li className="flex items-center text-gray-400 group">
                <Mail className="h-5 w-5 text-[#0fc28b] mr-3" />
                <span className="text-sm sm:text-base">Contact@rentabilio.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:items-center md:items-start">
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-left sm:text-center md:text-left">
              Légal
            </h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#0fc28b] transition-colors duration-300 text-sm sm:text-base py-1 block text-left sm:text-center md:text-left"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 max-w-5xl mx-auto">
            <p className="text-gray-400 text-xs sm:text-sm text-left sm:text-center md:text-left">
              © {new Date().getFullYear()} RENTABILIO. Tous droits réservés. | Site créé par Oussama Hatim
            </p>
            <div className="flex items-center space-x-6 w-full sm:w-auto justify-start sm:justify-center">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#0fc28b] transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 