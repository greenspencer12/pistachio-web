import React from 'react';
import Link from 'next/link';
import { Calendar, CalendarDays, Sparkles, ArrowRight, MapPin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events at Pistachio Cafe | Community & Private Gatherings',
  description: 'Upcoming events at Pistachio Cafe across 911 Whalley Ave and 1245 Chapel St in New Haven, CT. Host private celebrations, book space rentals, and community events.',
  alternates: {
    canonical: 'https://pistachiocafe.com/events',
  },
};

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Header */}
      <section className="py-20 md:py-24 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <Calendar className="w-3.5 h-3.5" /> Community Calendar
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            Upcoming Events at Pistachio Cafe
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Join us for community gatherings, poetry readings, art exhibitions, and special culinary showcases.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location Tabs / Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button className="px-5 py-2.5 rounded-full bg-[#211611] text-white text-sm font-medium shadow-sm">
            All Locations
          </button>
          <button className="px-5 py-2.5 rounded-full bg-white text-neutral-700 hover:bg-neutral-100 text-sm font-medium border border-neutral-200 transition-colors">
            911 Whalley Ave (Westville)
          </button>
          <button className="px-5 py-2.5 rounded-full bg-white text-neutral-700 hover:bg-neutral-100 text-sm font-medium border border-neutral-200 transition-colors">
            1245 Chapel St (Downtown)
          </button>
        </div>

        {/* Empty State Banner (Matches Live Site) */}
        <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200/80 shadow-sm max-w-2xl mx-auto mb-16">
          <div className="w-16 h-16 bg-[#fc574a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CalendarDays className="w-8 h-8 text-[#fc574a]" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#211611] mb-2">
            There are no public events right now
          </h2>
          <p className="text-neutral-600 mb-6">
            Check back later to see if we&apos;ve added any new dates or sign up for our newsletter to stay updated.
          </p>
        </div>

        {/* Private Event CTA Box */}
        <div className="bg-gradient-to-br from-[#211611] to-[#36231a] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#fc574a] text-white mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Book Your Celebration
            </span>
            <h3 className="text-3xl font-serif font-bold mb-4">
              Looking to Host a Private Event?
            </h3>
            <p className="text-neutral-200 text-base sm:text-lg mb-8 leading-relaxed">
              Our whimsical spaces on Whalley Ave and Chapel St are available for private rentals—including birthdays, baby showers, bridal dinners, corporate meetings, and cocktail mixers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/page/birthdays--space-rentals"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#fc574a] text-white font-medium hover:bg-[#e0483c] transition-all shadow-lg shadow-[#fc574a]/20"
              >
                Explore Private Rentals <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-sm transition-all"
              >
                Catering Menu &amp; Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
