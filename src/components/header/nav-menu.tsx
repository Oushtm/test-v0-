'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, Users, Calculator, VideoIcon, HelpCircle, MessageSquare, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Qui sommes nous ?', href: '/about', icon: Users },
  { name: 'Simuler votre bien', href: '/simulate', icon: Calculator },
  { name: 'Blog', href: '/blog', icon: VideoIcon },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Contacter nous', href: '/contact', icon: MessageSquare },
];

interface NavMenuProps {
  pathname: string;
}

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

const NavItem = ({ item, isActive, isMobile = false }) => (
  <motion.div
    variants={isMobile ? itemVariants : {}}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={cn("relative group flex-shrink-0", isMobile && "w-full")}
  >
    <div className={cn(
      "absolute inset-0 bg-gradient-to-r from-[#0fc28b]/20 to-[#0fc28b]/20 rounded-lg blur-xl transition-all duration-300",
      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    )} />
    <Link
      href={item.href}
      className={cn(
        'relative flex items-center space-x-3 text-sm font-medium transition-all duration-300 px-4 rounded-lg',
        isActive 
          ? 'text-[#0fc28b] bg-white/5 backdrop-blur-sm shadow-lg shadow-[#0fc28b]/20 transform -translate-y-1' 
          : 'text-gray-300 hover:text-[#0fc28b] hover:bg-white/5 hover:backdrop-blur-sm hover:shadow-lg hover:shadow-[#0fc28b]/10',
        isMobile ? 'py-4 justify-start' : 'py-2'
      )}
      onClick={() => isMobile && window.scrollTo(0, 0)}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0"
      >
        <item.icon className={cn(
          "h-5 w-5 transition-transform duration-300",
          isActive ? "scale-110" : "group-hover:scale-110"
        )} />
      </motion.div>
      <span className="relative whitespace-nowrap">
        {item.name}
        <span className={cn(
          "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0fc28b] to-[#0fc28b]/70 transform scale-x-0 transition-transform duration-300",
          isActive ? "scale-x-100" : "group-hover:scale-x-100"
        )} />
      </span>
    </Link>
  </motion.div>
);

export function NavMenu({ pathname }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-end space-x-6 pr-8">
        {navigation.map((item) => (
          <NavItem key={item.name} item={item} isActive={pathname === item.href} />
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 shadow-lg"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#0fc28b]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0fc28b]" />
            )}
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-x-0 top-[80px] bottom-0 bg-gray-900/98 backdrop-blur-xl border-t border-white/10 shadow-2xl"
            >
              <motion.div 
                className="flex flex-col space-y-1 p-4"
                variants={menuVariants}
              >
                {navigation.map((item) => (
                  <NavItem 
                    key={item.name} 
                    item={item} 
                    isActive={pathname === item.href}
                    isMobile={true}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 