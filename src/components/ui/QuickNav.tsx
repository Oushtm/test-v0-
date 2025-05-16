'use client';

import { motion } from 'framer-motion';
import { 
  Home, 
  Info, 
  Calculator, 
  BookOpen, 
  HelpCircle, 
  Mail 
} from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { 
    id: 1, 
    label: 'Accueil', 
    href: '/', 
    icon: Home 
  },
  { 
    id: 2, 
    label: 'Qui sommes nous ?', 
    href: '/about', 
    icon: Info 
  },
  { 
    id: 3, 
    label: 'Simuler votre bien', 
    href: '/simulate', 
    icon: Calculator 
  },
  { 
    id: 4, 
    label: 'Blog', 
    href: '/blog', 
    icon: BookOpen 
  },
  { 
    id: 5, 
    label: 'FAQ', 
    href: '/faq', 
    icon: HelpCircle 
  },
  { 
    id: 6, 
    label: 'Contacter nous', 
    href: '/contact', 
    icon: Mail 
  }
];

export default function QuickNav() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={item.href}
                className="feature-card flex flex-col items-center justify-center p-4 text-center hover:bg-indigo-50 transition-colors duration-300"
              >
                <item.icon className="w-8 h-8 text-indigo-600 mb-2" />
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 