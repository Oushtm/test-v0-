'use client';

import { useEffect, useState } from 'react';

export function useScrollEffect() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
}

export function ScrollEffect() {
  const isScrolled = useScrollEffect();

  return (
    <div className={`absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl transition-all duration-300 ${
      isScrolled ? 'shadow-2xl shadow-blue-500/20' : 'shadow-lg shadow-blue-500/10'
    }`} />
  );
} 