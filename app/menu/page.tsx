import React from 'react';
import MenuCatalog from '@/components/MenuCatalog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Pistachio Cafe | New Haven, CT',
  description: 'Online Menu for Pistachio Cafe. Fresh Mediterranean breakfast, brunch, specialty pistachio lattes, falafel wraps, and handmade Syrian baklava in New Haven, CT.',
  alternates: {
    canonical: 'https://pistachiocafe.com/menu',
  },
};

export default function MenuPage() {
  return <MenuCatalog initialLocation="911-whalley-ave" />;
}
