'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Briefcase, Phone, FileText, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Accueil', icon: Home },
  { href: '/about', label: 'À propos', icon: Info },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Phone },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-lg shadow-lg' : 'bg-[#1a1a1a]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Rentabilio" 
                width={90}
                height={30}
                className="h-6 w-auto object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-white bg-[#0fc28b]/20 hover:bg-[#0fc28b]/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Estimation badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#0fc28b]/10 text-[#0fc28b] border border-[#0fc28b]/20"
            >
              <span className="w-1.5 h-1.5 bg-[#0fc28b] rounded-full mr-1.5 animate-pulse"></span>
              En direct
            </motion.span>

            {/* Hamburger button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/5 text-white/90 hover:text-white focus:outline-none hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.button>
        </div>
      </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-[#1a1a1a] border-t border-white/5"
            >
              <div className="py-2 space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
              <Link
                href={item.href}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                          pathname === item.href
                            ? 'text-white bg-[#0fc28b]/20'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
              >
                        <span className="flex items-center">
                          <Icon className="h-4 w-4 mr-3" />
                          {item.label}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-50" />
              </Link>
                    </motion.div>
                  );
                })}
          </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
    </nav>
  );
};

export default Navbar; 