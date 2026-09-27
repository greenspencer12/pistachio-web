'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Coffee, Sparkles, Plus, Check, MapPin, ExternalLink } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pistachio-latte',
    name: 'Signature Pistachio Latte',
    category: 'Coffee & Espresso',
    price: '$6.75',
    description: 'Rich espresso combined with creamy steamed milk, house-crafted pistachio paste, topped with edible rose petals and crushed pistachios.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/10299bb2-e19e-4e11-8e8a-e8a37c542675?w=600&fit=cover',
  },
  {
    id: 'syrian-baklava',
    name: 'Damascus Artisanal Baklava',
    category: 'Bakery & Desserts',
    price: '$4.50',
    description: 'Flaky, multi-layered filo pastry filled with premium crushed Antep pistachios and lightly sweetened with orange blossom syrup.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/bee42194-44eb-4b51-9089-01285443f9dd?w=600&fit=cover',
  },
  {
    id: 'falafel-wrap',
    name: 'Authentic Falafel Wrap',
    category: 'Sandwiches & Lunch',
    price: '$11.95',
    description: 'Crispy house-made herb falafel, tomato, pickles, fresh mint, and creamy tahini sauce wrapped inside warm pita bread.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/64587d10-78dc-488f-a6d3-5f43aa3f3603?w=600&fit=cover',
  },
  {
    id: 'chicken-shawarma',
    name: 'Chicken Shawarma Wrap',
    category: 'Sandwiches & Lunch',
    price: '$13.50',
    description: 'Tender, marinated 100% Halal roasted chicken breast, garlic toum spread, and wild cucumber pickles grilled to perfection.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/dfe26d0f-8856-4cec-a704-7ac4bee8e9a7?w=600&fit=cover',
  },
  {
    id: 'the-classic-breakfast',
    name: 'The Classic Breakfast Plate',
    category: 'Breakfast & Brunch',
    price: '$14.95',
    description: 'Two eggs cooked your way, crispy golden hash browns, labneh with za\'atar, warm pita bread, and choice of beef bacon or halal sausage.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/ae3048e3-d444-4c26-b0f0-cab2ec416401?w=600&fit=cover',
  },
  {
    id: 'turkey-pesto',
    name: 'Smoked Turkey & Pesto Sandwich',
    category: 'Sandwiches & Lunch',
    price: '$12.95',
    description: 'Thinly sliced smoked halal turkey breast, provolone cheese, baby arugula, sun-dried tomatoes, and basil pesto on toasted sourdough.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/56459e40-72a7-4ed3-88e0-98df5be85f3c?w=600&fit=cover',
  },
  {
    id: 'avocado-toast',
    name: 'Mediterranean Avocado Toast',
    category: 'Breakfast & Brunch',
    price: '$12.50',
    description: 'Smashed avocado, cherry tomatoes, crumbled feta, pickled red onions, and nigella seeds on toasted multigrain artisan bread.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/325c8751-b60b-4a03-a582-97b264859e18?w=600&fit=cover',
  },
  {
    id: 'spanish-latte',
    name: 'Dulce Spanish Latte',
    category: 'Coffee & Espresso',
    price: '$6.50',
    description: 'Bold double espresso pour sweetened with spiced condensed milk and steamed milk, served hot or over ice.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/0dc85e5b-c054-4ed5-aa6c-d4e7a3085b24?w=600&fit=cover',
  },
];

const CATEGORIES = [
  'All Items',
  'Coffee & Espresso',
  'Breakfast & Brunch',
  'Sandwiches & Lunch',
  'Bakery & Desserts',
];

interface MenuCatalogProps {
  initialLocation?: '911-whalley-ave' | '1245-chapel-st';
}

export default function MenuCatalog({ initialLocation = '911-whalley-ave' }: MenuCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [cart, setCart] = useState<{ [id: string]: number }>({});

  const filteredItems =
    selectedCategory === 'All Items'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === selectedCategory);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="py-10 sm:py-14 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#fc574a]">
          Fresh &amp; Handcrafted Daily
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#211611]">
          {selectedLocation === '1245-chapel-st'
            ? 'Pistachio Cafe Menu (1245 Chapel St)'
            : 'Pistachio Cafe Menu (911 Whalley Ave)'}
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto text-base">
          100% Halal certified Mediterranean breakfasts, artisanal coffees, and handmade pastries.
          Order online for fast, contactless pickup.
        </p>

        {/* Location Selector */}
        <div className="inline-flex p-1.5 bg-neutral-100 rounded-2xl border border-neutral-200">
          <button
            onClick={() => setSelectedLocation('911-whalley-ave')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              selectedLocation === '911-whalley-ave'
                ? 'bg-white text-[#211611] shadow-sm font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#fc574a]" /> 911 Whalley Ave (Westville)
          </button>
          <button
            onClick={() => setSelectedLocation('1245-chapel-st')}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              selectedLocation === '1245-chapel-st'
                ? 'bg-white text-[#211611] shadow-sm font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <MapPin className="w-4 h-4 text-[#fc574a]" /> 1245 Chapel St (Downtown)
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-[#211611] text-white shadow'
                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl bg-white border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-[#211611] backdrop-blur-sm shadow-sm">
                  {item.price}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#fc574a]">
                  {item.category}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#211611] group-hover:text-[#fc574a] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => addToCart(item.id)}
                className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                  cart[item.id]
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#fc574a] hover:bg-[#e0483c] text-white shadow-sm'
                }`}
              >
                {cart[item.id] ? (
                  <>
                    <Check className="w-4 h-4" /> Added ({cart[item.id]})
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" /> Add to Order
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Bar */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4">
          <div className="bg-[#211611] text-white rounded-2xl p-4 shadow-2xl flex items-center justify-between border border-neutral-700/50 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fc574a] flex items-center justify-center font-bold">
                {totalCartCount}
              </div>
              <div>
                <p className="text-sm font-bold">Your Order is Ready</p>
                <p className="text-xs text-neutral-300">
                  Fulfilling at {selectedLocation === '1245-chapel-st' ? '1245 Chapel St' : '911 Whalley Ave'}
                </p>
              </div>
            </div>
            <button
              onClick={() => alert(`Square Checkout initialized for ${selectedLocation}. Direct POS routing active.`)}
              className="px-6 py-2.5 rounded-xl bg-[#fc574a] hover:bg-[#e0483c] text-white font-semibold text-sm transition-all shadow-md"
            >
              Checkout on Square
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
