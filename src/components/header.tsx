'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { NavMenu } from './header/nav-menu';
import { AnimatedLogo } from './header/animated-logo';
import { ScrollEffect } from './header/scroll-effect';
import ClientOnly from './client-only';

export function Header() {
  const pathname = usePathname() || '/';

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative flex justify-center items-center h-20">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-xl transition-all duration-300 shadow-lg shadow-blue-500/10" />
        }>
          <ClientOnly>
        <ScrollEffect />
          </ClientOnly>
        </Suspense>
        <div className="container relative flex items-center justify-between px-6">
          <AnimatedLogo />
          <NavMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
} 