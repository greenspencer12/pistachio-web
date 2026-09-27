import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock, ArrowRight, ExternalLink, Sparkles, Utensils } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locations | Pistachio Cafe | Best Cafe in New Haven, CT',
  description: 'Visit Pistachio Cafe at 911 Whalley Ave (Westville) and 1245 Chapel St (Downtown New Haven). Authentic Syrian dining, artisanal coffee, and fresh pastries.',
  alternates: {
    canonical: 'https://pistachiocafe.com/locations',
  },
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Header */}
      <section className="py-20 md:py-28 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <MapPin className="w-3.5 h-3.5" /> Elm City Destinations
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            Welcome to Pistachio Cafe Locations
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Pistachio Cafe brings you the best cafe experience in New Haven, Connecticut. We serve fresh coffee, amazing food, and sweet treats that make every visit special.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location 1: Whalley Ave */}
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lg flex flex-col group">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/a288de7c-58c8-4fc6-9194-7184ed49085f?w=960&fit=cover"
                alt="Pistachio Cafe 1 - Whalley Ave Westville"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#fc574a] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
                Westville • Pistachio 1
              </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#211611] mb-2">
                  Pistachio Cafe (Whalley Ave)
                </h2>
                <p className="text-neutral-600 mb-6 text-base leading-relaxed">
                  Our original enchanted sanctuary nestled in the artistic Westville village. Featuring cozy lounge seating, antique decor, and outdoor patio tables.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#fc574a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">911 Whalley Avenue</p>
                      <p className="text-neutral-600 text-sm">New Haven, CT 06515</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                    <a href="tel:2038004262" className="text-neutral-900 font-semibold hover:text-[#fc574a] transition-colors">
                      (203) 800-4262
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#fc574a] mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-neutral-700">
                      <p><strong>Mon – Thu:</strong> 7:00 AM – 7:30 PM</p>
                      <p><strong>Fri – Sun:</strong> 7:00 AM – 9:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-100">
                <Link
                  href="/menu"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#fc574a] hover:bg-[#e0483c] text-white font-semibold transition-all shadow-md shadow-[#fc574a]/20"
                >
                  <Utensils className="w-4 h-4" /> Order Whalley Ave Online
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/911-whalley-ave"
                    className="text-center py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm transition-colors"
                  >
                    View Page Details
                  </Link>
                  <a
                    href="https://maps.google.com/?q=911+Whalley+Ave,+New+Haven,+CT+06515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm transition-colors"
                  >
                    Google Maps <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location 2: Chapel St */}
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lg flex flex-col group">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/89bc8855-d126-4b5e-8e81-0189364d5b5d?w=960&fit=cover"
                alt="Pistachio Cafe 2 - Chapel St Downtown New Haven"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#211611] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow">
                Downtown • Pistachio 2
              </div>
            </div>
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#211611] mb-2">
                  Pistachio Cafe 2 (Chapel St)
                </h2>
                <p className="text-neutral-600 mb-6 text-base leading-relaxed">
                  Our grand Downtown location situated steps from Yale University and the arts district. Featuring spacious dining halls, signature brunch, and late-night dessert hours.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#fc574a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">1245 Chapel Street</p>
                      <p className="text-neutral-600 text-sm">New Haven, CT 06511</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#fc574a] flex-shrink-0" />
                    <a href="tel:2038004533" className="text-neutral-900 font-semibold hover:text-[#fc574a] transition-colors">
                      (203) 800-4533
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#fc574a] mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-neutral-700">
                      <p><strong>Sun – Thu:</strong> 8:30 AM – 8:30 PM</p>
                      <p><strong>Fri – Sat:</strong> 8:30 AM – 10:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-neutral-100">
                <Link
                  href="/menu"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#fc574a] hover:bg-[#e0483c] text-white font-semibold transition-all shadow-md shadow-[#fc574a]/20"
                >
                  <Utensils className="w-4 h-4" /> Order Chapel St Online
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/1245-chapel-st"
                    className="text-center py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm transition-colors"
                  >
                    View Page Details
                  </Link>
                  <a
                    href="https://maps.google.com/?q=1245+Chapel+St,+New+Haven,+CT+06511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm transition-colors"
                  >
                    Google Maps <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
