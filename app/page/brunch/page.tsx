import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Sparkles, Utensils } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brunch | Pistachio Cafe | New Haven, CT',
  description: 'Cozy New Haven Brunch and Coffee at Pistachio Cafe. The best Salmon Tartine, Syrian-inspired Mediterranean plates, and 7-day brunch in Westville & Downtown.',
  alternates: {
    canonical: 'https://pistachiocafe.com/page/brunch',
  },
};

export default function BrunchPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#211611] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://pistachiocafe.com/pluto-images/funnel/images/c77365b9-a0ed-4236-b8e3-cf19524d0304?w=1920&fit=cover"
            alt="Pistachio Cafe Brunch"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <Sparkles className="w-3.5 h-3.5" /> 7-Day New Haven Brunch
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Cozy New Haven Brunch and Coffee
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8">
            You want a brunch that feels like a getaway. Our Westville cafe serves more than just food. We offer a cozy escape from the busy New Haven streets. You can sit among vintage decor and enjoy a slow morning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/20"
            >
              Order Brunch Online <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/catering"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-all"
            >
              <Utensils className="w-4 h-4" /> Brunch Catering
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 1: The Best Salmon Tartine */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/0e7c5d1c-8716-456a-8d13-6365597c3210?w=960&h=960&format=auto&fit=cover"
              alt="The Best Salmon Tartine in New Haven"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Signature Brunch Item</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              The Best Salmon Tartine in New Haven
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              Our Salmon Tartine is a whimsical masterpiece. We layer delicate smoked fish over artisanal bread and garnish it with fresh greens. It is almost too beautiful to eat.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              This dish reflects the artistic soul of our Westville sanctuary. Locals love how the bright flavors pop against our vintage backdrop. It is the perfect choice for a light, sophisticated meal near the Yale campus. You get a taste of luxury in a relaxed, cozy setting. Come see why this plate is a neighborhood icon.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 font-semibold text-[#fc574a] hover:text-[#db493e] transition-colors"
            >
              View on Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 2: Lively Weekend Mornings */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Community Energy</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
                Lively Weekend Mornings at Pistachio Cafe
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
                Saturday mornings here are a Westville staple. Our cafe hums with the energy of students and local families alike. You will find a vibrant scene that still feels intimate and warm.
              </p>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
                It is the heart of the community on Whalley Avenue. We blend a fast-paced kitchen with a friendly, welcoming spirit. You can grab a seat and soak in the artistic charm of our decor. It is the best way to kick off your weekend in the city. Experience the buzz that makes us a true hidden gem.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/911-whalley-ave"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#211611] text-white font-medium hover:bg-neutral-800 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#fc574a]" /> Westville (Whalley Ave)
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/183afef8-8a65-488a-870c-9673937904e2?w=960&h=960&format=auto&fit=cover"
                alt="Lively Weekend Mornings at Pistachio Cafe"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Modern Mediterranean Brunch Plates */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/c7cff23c-f1f4-457e-8901-87fc6cc9af9c?w=960&h=960&format=auto&fit=cover"
              alt="Modern Mediterranean Brunch Plates in New Haven"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Mediterranean Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              Modern Mediterranean Brunch Plates in New Haven
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              We serve the most authentic Mediterranean flavors in the region. Our Syrian-inspired plates offer a bold escape from standard breakfast fare. We use rich spices and creamy textures to delight your palate.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              These dishes are the soul of our kitchen. You will find global tastes right here in our cozy New Haven corner. It is a culinary journey that feels personal and handcrafted. Neighbors love our unique twist on traditional brunch. Join us for a meal that celebrates culture, flavor, and community.
            </p>
            <Link
              href="/page/halal-at-pistachio"
              className="inline-flex items-center gap-2 font-semibold text-[#fc574a] hover:text-[#db493e] transition-colors"
            >
              Explore 100% Halal Integrity <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Location Brunch Hours & Menus */}
      <section className="py-16 bg-[#211611] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Served Daily</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2 mb-4">
              Brunch Service Hours Across Both Locations
            </h2>
            <p className="text-neutral-300">
              Join us 7 days a week for freshly prepared breakfast, brunch, and specialty beverages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Whalley Ave */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-[#fc574a]/50 transition-colors">
              <h3 className="text-2xl font-serif font-bold mb-2">MENU - WHALLEY AVE</h3>
              <p className="text-[#fc574a] font-medium text-sm mb-4">Pistachio Cafe 1 • Westville</p>
              <p className="text-neutral-300 text-sm mb-6">911 Whalley Ave, New Haven, CT 06515</p>
              <div className="bg-neutral-800/60 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-200">
                  <Clock className="w-4 h-4 text-[#fc574a]" />
                  <span><strong>Served Daily:</strong> Mon–Thu 8:30am–3pm | Fri–Sun 8:30am–5pm</span>
                </div>
              </div>
              <Link
                href="/menu"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all"
              >
                Order Whalley Ave Brunch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Chapel St */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-[#fc574a]/50 transition-colors">
              <h3 className="text-2xl font-serif font-bold mb-2">MENU - CHAPEL ST</h3>
              <p className="text-[#fc574a] font-medium text-sm mb-4">Pistachio Cafe 2 • Downtown New Haven</p>
              <p className="text-neutral-300 text-sm mb-6">1245 Chapel St, New Haven, CT 06511</p>
              <div className="bg-neutral-800/60 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-200">
                  <Clock className="w-4 h-4 text-[#fc574a]" />
                  <span><strong>Served Daily:</strong> Mon–Thu 8:30am–3pm | Fri–Sun 8:30am–5pm</span>
                </div>
              </div>
              <Link
                href="/menu"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all"
              >
                Order Chapel St Brunch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
