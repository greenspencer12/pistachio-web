import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, MapPin, Utensils } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Halal at Pistachio | 100% Halal Dining in New Haven, CT',
  description: '100% Halal Dining in New Haven at Pistachio Cafe. Proudly Muslim-owned, offering certified halal dining with zero cross-contamination at Whalley Ave and Chapel St.',
  alternates: {
    canonical: 'https://pistachiocafe.com/page/halal-at-pistachio',
  },
};

export default function HalalAtPistachioPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#211611] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://pistachiocafe.com/pluto-images/funnel/images/1014ce30-4215-4d37-9785-0007f763a70b?w=1920&fit=cover"
            alt="Halal Dining at Pistachio Cafe"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-emerald-600 text-white mb-6">
            <ShieldCheck className="w-4 h-4" /> 100% Halal Certified Kitchen
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            100% Halal Dining in New Haven
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8">
            As a proud Muslim-owned business, offering authentic halal food is deeply important to us. Pistachio Cafe brings high-quality, halal-certified dining to the local community across both our New Haven locations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/20"
            >
              Order Halal Online <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/catering"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-all"
            >
              <Utensils className="w-4 h-4" /> Halal Catering
            </Link>
          </div>
        </div>
      </section>

      {/* Feature 1: Fresh. Delicious. Halal. */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/b17850ac-9458-482b-8639-51b33c6981d0?w=960&h=960&fit=cover"
              alt="Fresh Delicious Halal at Pistachio Cafe"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">Authentic Integrity</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              100% Halal. Dine with Total Peace of Mind
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              We want you to eat without a single worry. That is why our entire menu is fully halal. From a quick morning coffee to a relaxing lunch, every bite is safe.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              We buy exclusively from certified halal providers to ensure the absolute highest integrity for all our fresh ingredients. You can find us at two convenient locations: 911 Whalley Ave, New Haven, CT 06515 and 1245 Chapel St, New Haven, CT 06511.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>100% Halal Certified Meats &amp; Ingredients</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Zero Alcohol or Non-Halal Products in Any Recipe</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Strict Supplier Verification Protocols</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Zero Compromise */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">Our Kitchen Standards</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
                Zero Compromise: Our Strict Halal Kitchen
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
                We take halal food preparation very seriously. We source from certified suppliers, verify every certification, and use dedicated storage. Because our whole restaurant is halal, we never carry non-halal items. This completely eliminates any risk of cross-contamination.
              </p>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
                To protect our integrity, all cooking utensils and equipment are strictly dedicated to halal prep. If you have questions about our process, just ask any server! Our staff is trained on our procedures and happy to assist you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#211611] text-white font-medium hover:bg-neutral-800 transition-colors"
                >
                  Explore Full Halal Menu <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/c4acae56-08d5-483c-8c46-67eac890149c?w=960&h=960&fit=cover"
                alt="Strict Halal Kitchen Standards at Pistachio Cafe"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Craveable Menu Favorites & Halal Catering */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/0e71e6c5-5955-4608-9266-da768fef08e1?w=960&h=960&fit=cover"
              alt="Craveable Menu Favorites & Halal Catering"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Menu Highlights</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              Craveable Menu Favorites &amp; Halal Catering
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              Explore our tasty choices! Try the savory Pistachio Classic Omelette, a Smoked Turkey Croissant, or a Shawarma Wrap.
            </p>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
              We also offer catering for your special events. Let us bring our amazing, fully halal menu directly to your next gathering, office luncheon, or university meeting.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-colors shadow-lg shadow-[#fc574a]/20"
              >
                <Utensils className="w-4 h-4" /> Request Halal Catering Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Halal Food Done Right */}
      <section className="py-16 md:py-24 bg-white border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-emerald-700 font-semibold text-sm tracking-wider uppercase">Muslim-Owned &amp; Operated</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
                Halal Food Done Right at Pistachio Cafe
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
                Finding a trusted spot for incredible halal food in New Haven is easy. Our team works hard to serve meals that honor Islamic traditions and your dietary needs.
              </p>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
                Stop by today to enjoy a fresh, delicious, and strictly halal meal in our beautiful space!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/page/proudly-serving-new-haven"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-medium transition-colors"
                >
                  <HeartHandshake className="w-4 h-4 text-[#fc574a]" /> Proudly Serving New Haven
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/2cd974cf-3516-4fed-829d-8b2c3b9de65f?w=960&h=960&fit=cover"
                alt="Halal Food Done Right at Pistachio Cafe"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Visit Us Today</h2>
          <p className="text-xl text-neutral-300 font-light mb-8">
            Experience authentic Middle Eastern hospitality and strictly 100% Halal dining in New Haven.
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
              <MapPin className="w-4 h-4" /> View Locations &amp; Hours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
