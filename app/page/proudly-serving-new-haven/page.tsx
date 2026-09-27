import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, Hospital, CheckCircle2, MapPin, Coffee, Utensils } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proudly Serving New Haven | Universities, Hospitals & Community',
  description: 'Pistachio Cafe proudly serves Yale University, SCSU, UNH, and Yale New Haven Hospital workers across our Whalley Ave and Chapel St locations.',
  alternates: {
    canonical: 'https://pistachiocafe.com/page/proudly-serving-new-haven',
  },
};

export default function ProudlyServingNewHavenPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#211611] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="https://pistachiocafe.com/pluto-images/funnel/images/c01997e5-9d8f-4439-95a0-a672b615889c?w=1920&fit=cover"
            alt="Proudly Serving New Haven"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            Elm City Community Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            Proudly Serving New Haven
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed mb-8">
            At Pistachio Cafe, we’re proud to serve the heart of New Haven with fresh, flavorful meals made for busy days. With two convenient locations at 911 Whalley Ave and 1245 Chapel St, we’re perfectly positioned to fuel students, professionals, and hospital staff across the city.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/20"
            >
              Order Ahead &amp; Skip the Line <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/page/contact-us--locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-all"
            >
              <MapPin className="w-4 h-4" /> View Both Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/a0f300de-5e87-4c36-b57c-453ba3b51298?w=960&fit=cover"
              alt="Serving New Haven Leading Universities"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 text-[#fc574a] font-semibold text-sm tracking-wider uppercase mb-2">
              <GraduationCap className="w-5 h-5" /> Campus Dining
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mb-6">
              Serving New Haven’s Leading Universities
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              We’re a go-to spot for students, faculty, and campus staff looking for fresh, fast, and satisfying meals near campus. We proudly serve and support:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-neutral-900 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                <span>Yale University (Undergraduate, Graduate &amp; Medical Schools)</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-900 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                <span>Southern Connecticut State University (SCSU)</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-900 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                <span>University of New Haven (UNH)</span>
              </div>
            </div>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              From early morning coffee runs to late-night study fuel, Pistachio Cafe is your neighborhood stop for quality meals that fit your schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Hospitals & Healthcare Workers */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 text-[#fc574a] font-semibold text-sm tracking-wider uppercase mb-2">
                <Hospital className="w-5 h-5" /> Healthcare Support
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mb-6">
                Fueling New Haven’s Hospitals &amp; Healthcare Workers
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
                We understand the demanding pace of healthcare work, which is why we provide quick, comforting, and reliable meals for hospital teams and visitors. We proudly support:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-neutral-900 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                  <span>Yale New Haven Hospital (YNHH - York Street &amp; Saint Raphael Campuses)</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-900 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                  <span>New Haven Healthcare Centers &amp; Clinics</span>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-8">
                Whether you&apos;re on a short break or working long shifts, we’re here to make sure you’re well-fed, energized, and ready to care for others.
              </p>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#211611] text-white font-medium hover:bg-neutral-800 transition-colors"
              >
                Quick Pickup for Shifts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/2a901f3f-a190-43a1-af3f-a11149bd6cfd?w=960&fit=cover"
                alt="Fueling New Haven Hospitals & Healthcare Workers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why New Haven Chooses Us */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/03935411-4ed2-4153-91e7-83d045824e14?w=960&fit=cover"
              alt="Why New Haven Chooses Pistachio Cafe"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="text-[#fc574a] font-semibold text-sm tracking-wider uppercase">Everyday Excellence</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mt-2 mb-6">
              Why New Haven Chooses Pistachio Cafe
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg mb-6">
              From fresh ingredients to fast service, Pistachio Cafe is built for convenience without compromising quality. Our menu is crafted to satisfy every craving—from hearty meals to light bites and energizing drinks.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Grab-and-go between classes or hospital shifts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Order ahead for instant, contactless counter pickup</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Enjoy fresh meals and artisanal pastries made daily</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Find comforting, 100% Halal food that keeps you going</span>
              </div>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/20"
            >
              Order Online Ahead <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Two Locations Section */}
      <section className="py-20 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-6">Two Convenient New Haven Locations</h2>
          <p className="text-lg text-neutral-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            No matter where your day takes you, Pistachio Cafe is always nearby—ready to serve fresh, fast, and delicious food across New Haven.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
              <p className="font-serif font-bold text-xl text-white mb-1">Pistachio Cafe 1 (Westville)</p>
              <p className="text-sm text-neutral-400 mb-2">911 Whalley Ave, New Haven, CT 06515</p>
              <p className="text-sm text-[#fc574a]">Phone: (203) 800-4262</p>
            </div>
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
              <p className="font-serif font-bold text-xl text-white mb-1">Pistachio Cafe 2 (Downtown)</p>
              <p className="text-sm text-neutral-400 mb-2">1245 Chapel St, New Haven, CT 06511</p>
              <p className="text-sm text-[#fc574a]">Phone: (203) 800-4533</p>
            </div>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#fc574a] text-white font-semibold hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/25"
          >
            Order Ahead &amp; Skip the Line Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
