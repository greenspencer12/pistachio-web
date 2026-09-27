import React from 'react';
import MenuCatalog from '@/components/MenuCatalog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu (1245 Chapel St) | Pistachio Cafe | Downtown New Haven',
  description: 'Online Menu for Pistachio Cafe Downtown at 1245 Chapel St. Order ahead for Mediterranean breakfast, brunch, signature coffees, and artisanal pastries.',
  alternates: {
    canonical: 'https://pistachiocafe.com/menu/1245-chapel-st',
  },
};

export default function ChapelMenuPage() {
  return <MenuCatalog initialLocation="1245-chapel-st" />;
}
