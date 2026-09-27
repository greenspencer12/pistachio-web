import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Coffee, Clock, MapPin, Sparkles, Utensils } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Breakfast | Pistachio Cafe | New Haven, CT',
  description: 'Top New Haven Breakfast at Pistachio Cafe. Fresh avocado toast tartines, handcrafted pistachio cardamom lattes, and artisanal Mediterranean morning plates in Westville.',
  alternates: {
    canonical: 'https://pistachiocafe.com/page/breakfast',
  },
};

export default function BreakfastPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#211611] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://pistachiocafe.com/pluto-images/funnel/images/438a9a34-2bc5-489d-b46f-cd34eb251f2d?w=1920&fit=cover"
            alt="Pistachio Cafe Breakfast"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Served Daily From 7:00 AM
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Top New Haven Breakfast at Pistachio Cafe
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Pistachio Cafe brings a splash of color to your morning routine. We serve the most vibrant breakfast in New Haven right here in the Westville neighborhood. Our kitchen blends Mediterranean tradition with modern flair to start your day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/20"
            >
              Order Breakfast Online <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/page/contact-us--locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-all"
            >
              <MapPin className="w-4 h-4" /> Find Our Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 1: Avocado Toast Tartine */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/438a9a34-2bc5-489d-b46f-cd34eb251f2d?w=960&h=960&format=auto&fit=cover"
              alt="The Best Avocado Toast Tartine in New Haven"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Culinary Highlight</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              The Best Avocado Toast Tartine in New Haven
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              Forget the bland toast you find at chain cafes. Our picture-perfect Avocado Toast Tartine is a Westville legend for a reason. We pile fresh, zesty ingredients onto artisanal bread for a breakfast that hits every high note.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              It’s the ultimate fuel before you explore the Yale University art galleries. We focus on bold textures and vibrant colors that look as good as they taste. This isn&apos;t just breakfast; it&apos;s a culinary highlight of your New Haven weekend. Stop by and grab a slice of perfection.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 font-semibold text-[#fc574a] hover:text-[#db493e] transition-colors"
            >
              Order on Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 2: Hand-Crafted Coffee Classics */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Artisanal Beverage Bar</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
                Hand-Crafted Coffee Classics
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
                We don&apos;t just brew coffee; we craft artistic liquid gold. Our signature lattes bring a vibrant Middle Eastern twist to the New Haven coffee culture. Every cup features intricate latte art and premium beans that smell like a dream.
              </p>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
                Whether you crave the nutty depth of pistachio or the warmth of cardamom, our drinks offer a cultural journey. Locals from all over the Elm City visit us for this specific, high-end experience. Your morning deserves a drink that is both bold and beautiful.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
                  <Coffee className="w-5 h-5 text-[#fc574a]" /> Turkish Coffee &amp; Cardamom
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
                  <Sparkles className="w-5 h-5 text-[#fc574a]" /> Signature Pistachio Latte
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/6ef54b1a-ed16-478f-acce-a7ac8a9bc777?w=960&h=960&format=auto&fit=cover"
                alt="Hand-Crafted Coffee Classics at Pistachio Cafe"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Cozy Mornings */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/2000e506-096d-4511-b014-f8ba27f8ff02?w=960&h=960&format=auto&fit=cover"
              alt="Cozy Mornings at Pistachio Cafe"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Enchanted Atmosphere</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              Cozy Mornings at Pistachio Cafe
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              Escape the New Haven hustle and step into our enchanted Westville sanctuary. The air here is thick with the scent of fresh pastries and roasted coffee. We&apos;ve created a whimsical space where every detail invites you to linger longer.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              It’s the heart of our community—a place where neighbors meet and travelers feel at home. From the plush seating to the stunning decor, we offer a morning vibe you simply won&apos;t find elsewhere. Come find your new favorite corner and stay a while.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/page/contact-us--locations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#211611] text-white font-medium hover:bg-neutral-800 transition-colors"
              >
                <Clock className="w-4 h-4 text-[#fc574a]" /> View Hours &amp; Locations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Visit us Today */}
      <section className="py-20 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl text-neutral-300 font-light mb-8">
            A piping hot Pistachio Latte &amp; freshly baked Croissant await you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-semibold hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/25"
            >
              <Utensils className="w-4 h-4" /> Order Ahead Online
            </Link>
            <Link
              href="/page/birthdays--space-rentals"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm transition-all"
            >
              Private Events &amp; Rentals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
