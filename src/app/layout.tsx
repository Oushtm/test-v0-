import type { Metadata } from 'next';
import './globals.css';
import RootLayoutClient from '@/components/RootLayoutClient';

export const metadata: Metadata = {
  title: 'Rentabilio - Gestion Immobilière Professionnelle',
  description: 'Investissez dans l\'immobilier avec confiance et simplicité. Rentabilio vous accompagne dans la gestion de vos biens immobiliers.',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
        sizes: '1024x1024'  // Maximum recommended size
      }
    ],
    shortcut: '/favicon.png',
  },
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#0fc28b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
} 