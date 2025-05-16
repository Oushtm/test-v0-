'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, Users, Calculator, VideoIcon, HelpCircle, MessageSquare } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Qui sommes nous ?', href: '/about', icon: Users },
  { name: 'Simuler votre bien', href: '/simulate', icon: Calculator },
  { name: 'Blog', href: '/blog', icon: VideoIcon },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Contacter nous', href: '/contact', icon: MessageSquare },
];

interface AnimatedNavProps {
  pathname: string;
  isScrolled: boolean;
}

export function AnimatedNav({ pathname, isScrolled }: AnimatedNavProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl transition-all duration-300",
          isScrolled ? "shadow-2xl shadow-blue-500/20" : "shadow-lg shadow-blue-500/10"
        )}
      />
      <div className="container relative flex items-center justify-between px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
          <Link href="/" className="relative flex items-center">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient"
            >
              RENTABILIO
            </motion.span>
          </Link>
        </motion.div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl transition-all duration-300",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )} />
                <Link
                  href={item.href}
                  className={cn(
                    'relative flex items-center space-x-2 text-sm font-medium transition-all duration-300 px-4 py-2 rounded-lg',
                    isActive 
                      ? 'text-blue-400 bg-white/5 backdrop-blur-sm shadow-lg shadow-blue-500/20 transform -translate-y-1' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-white/5 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10'
                  )}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      isActive ? "scale-110" : "group-hover:scale-110"
                    )} />
                  </motion.div>
                  <span className="relative">
                    {item.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 transition-transform duration-300",
                      isActive ? "scale-x-100" : "group-hover:scale-x-100"
                    )} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </>
  );
} 