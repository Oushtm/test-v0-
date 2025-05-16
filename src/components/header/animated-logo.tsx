'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function AnimatedLogo() {
  return (
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
  );
} 