import type { Metadata } from 'next';
import './globals.css';
import RootLayoutClient from '@/components/RootLayoutClient';

export const metadata: Metadata = {
  title: 'RNB - Investissement Immobilier',
  description: 'Investissez dans l\'immobilier avec confiance et simplicité',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
} 