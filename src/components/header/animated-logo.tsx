'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        href="/" 
        className="relative flex items-center -ml-20 sm:-ml-16 lg:-ml-48 transition-all duration-300"
      >
        <motion.div 
          className="relative w-[320px] sm:w-[300px] lg:w-[600px] h-[100px] sm:h-[100px] lg:h-[150px] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="/logo.png"
            alt="Rentabilio Logo"
            fill
            className="object-contain transition-transform duration-300"
            priority
          />
        </motion.div>
      </Link>
    </motion.div>
  );
} 