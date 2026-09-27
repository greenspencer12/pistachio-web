import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, Sparkles, CheckCircle } from 'lucide-react';
import SpaceRentalForm from '@/components/SpaceRentalForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Event Rentals & Birthday Parties | Pistachio Cafe New Haven',
  description:
    'Host your birthday party, baby shower, or private gathering at Pistachio Cafe. Beautiful aesthetic spaces available on Chapel St and Whalley Ave with dedicated catering.',
  alternates: {
    canonical: 'https://pistachiocafe.com/page/birthdays--space-rentals',
  },
};

export default function SpaceRentalsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#fc574a]">Host With Us</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900">
          Private Events &amp; Space Rentals
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
          Celebrate life’s special milestones in one of New Haven’s most picturesque, welcoming community hubs. Ideal for birthdays, bridal showers, baby showers, and academic celebrations.
        </p>
      </div>

      {/* Venues Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc574a]">Option 1</span>
            <span className="text-xs text-stone-500 font-medium">Up to 40 Guests</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            The Westville Lounge (Whalley Ave)
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Cozy antique chandeliers, plush velvet couches, and an intimate garden patio. Perfect for book launches, small family brunches, and birthday celebrations.
          </p>
          <ul className="text-xs text-stone-500 space-y-1.5 pt-2">
            <li>• Private sound system integration</li>
            <li>• Custom espresso bar &amp; pastry display</li>
            <li>• Dedicated event barista and server</li>
          </ul>
        </div>

        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#fc574a]">Option 2</span>
            <span className="text-xs text-stone-500 font-medium">Up to 80 Guests</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            The Downtown Hall (Chapel St)
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Spacious high ceilings, ample natural light, and modern Mediterranean architecture in Downtown New Haven near Yale. Ideal for corporate mixers and showers.
          </p>
          <ul className="text-xs text-stone-500 space-y-1.5 pt-2">
            <li>• High-capacity seating &amp; buffet configuration</li>
            <li>• Late evening rental availability (after 8 PM)</li>
            <li>• Full Mediterranean buffet catering packages</li>
          </ul>
        </div>
      </div>

      {/* Booking Form (Google Calendar Hook) */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>Instant Google Calendar Integration</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">Reserve Your Event Date</h2>
          <p className="text-sm text-stone-500">
            Select your preferred location and date. Inquiries automatically sync with our management team’s Google Calendar.
          </p>
        </div>

        <SpaceRentalForm />
      </div>
    </div>
  );
}
