'use client';

import { usePathname } from 'next/navigation';
import { NavMenu } from './header/nav-menu';
import { AnimatedLogo } from './header/animated-logo';
import { ScrollEffect } from './header/scroll-effect';

export function Header() {
  const pathname = usePathname() || '/';

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative flex justify-center items-center h-20">
        <ScrollEffect />
        <div className="container relative flex items-center justify-between px-6">
          <AnimatedLogo />
          <NavMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
} 