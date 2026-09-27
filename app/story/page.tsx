import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Sparkles, MapPin, Coffee, Utensils } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | Pistachio Cafe | New Haven, CT',
  description: 'Our Journey Began With a Dream. Discover the story behind Pistachio Cafe in New Haven, founded by Syrian artist Mohamad Hafez, celebrating Middle Eastern culture and culinary artistry.',
  alternates: {
    canonical: 'https://pistachiocafe.com/story',
  },
};

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-[#211611] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://pistachiocafe.com/pluto-images/funnel/images/549ceaf2-e226-45c9-999a-6d58ee487897?w=1920&fit=cover"
            alt="Pistachio Cafe Story Hero"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <Heart className="w-3.5 h-3.5" /> Heritage &amp; Hospitality
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
            Bridging cultures, honoring grandmothers&apos; recipes, and creating a warm sanctuary in the heart of New Haven.
          </p>
        </div>
      </section>

      {/* Chapter 1: Our Journey Began With a Dream */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/549ceaf2-e226-45c9-999a-6d58ee487897?w=960&fit=cover"
              alt="Our Journey Began With a Dream"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Humble Beginnings</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              Our Journey Began With a Dream
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              Pistachio Cafe started with a simple goal—bring the flavors of our Middle Eastern home to the heart of New Haven. Having grown up surrounded by the smell of coffee, fresh herbs, and warm bread, opening Pistachio was our way of sharing those memories with others, one dish at a time.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              With two locations in New Haven, CT, we offer a fine dining experience with timeless Middle Eastern dishes in a peaceful setting. Each one gives you a different way to enjoy our food.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <p className="font-serif font-bold text-xl text-[#211611]">911 Whalley Ave</p>
                <p className="text-sm text-neutral-600 mt-1">Westville Sanctuary &amp; Brunch</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <p className="font-serif font-bold text-xl text-[#211611]">1245 Chapel St</p>
                <p className="text-sm text-neutral-600 mt-1">Downtown Elegant Dining</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: A Menu Experience Like No Other */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Culinary Tapestry</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
                A Menu Experience Like No Other 🍽️
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
                Our Syrian breakfast is served family-style with fresh bread, creamy labneh, rich olive oil, and sweet jam. Our coffee menu features traditional Middle Eastern drinks like Turkish coffee and cardamom latte alongside modern favorites.
              </p>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
                Our desserts come from around the world - baklava from Lebanon, tiramisu from Italy, and French pastries. Each bite tells a story of its homeland.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-colors shadow-lg shadow-[#fc574a]/20"
                >
                  <Utensils className="w-4 h-4" /> View Full Menu
                </Link>
                <Link
                  href="/page/press"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium transition-colors"
                >
                  Read Press &amp; Reviews <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/7d118de9-5d62-4ad9-8629-f2764bb917cd?w=960&fit=cover"
                alt="A Menu Experience Like No Other"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: What Makes Pistachio Special */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/842efd27-ae46-4dbd-8093-d6a6be69e344?w=960&fit=cover"
              alt="What Makes Pistachio Special"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Artisanal Craft</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              What Makes Pistachio Special 🌟
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              We honor age-old recipes passed down through generations. We&apos;re one of the few restaurants in the area that still makes dishes the way our grandmothers did. Every spice blend is mixed by hand. Every sauce is made from scratch.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              We use only the freshest ingredients and coffee beans roasted weekly. Our outdoor seating at both locations also lets you enjoy your meal in the fresh air.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-800">
                <Sparkles className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                <span>Hand-mixed ancestral spice blends</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <Coffee className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                <span>Weekly artisanal bean roasting</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <Heart className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                <span>Scratch-made sauces and authentic pastries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Visit Pistachio Cafe Today */}
      <section className="py-20 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6">Visit Pistachio Cafe Today</h2>
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            People come to Pistachio for more than just a meal. They come for the feeling. The warmth of our staff, the taste of our food, and the comfort of our spaces make a lasting impression. We’re proud to be a part of the New Haven community. Whether you stop by for brunch at 911 Whalley Avenue or enjoy fine dining at 1245 Chapel Street, you’ll find something that brings you back. We can’t wait to welcome you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-semibold hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/25"
            >
              Order Online Ahead
            </Link>
            <Link
              href="/page/contact-us--locations"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm transition-all"
            >
              <MapPin className="w-4 h-4" /> View Both Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
