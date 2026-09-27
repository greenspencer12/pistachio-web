import React from 'react';
import Link from 'next/link';
import { Utensils, Calendar, Users } from 'lucide-react';
import CateringForm from '@/components/CateringForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering & Event Platters | Pistachio Cafe New Haven, CT',
  description:
    'Order artisan Mediterranean catering, brunch boxes, pastry trays, and coffee carafes for your business meeting, wedding, or celebration in New Haven.',
  alternates: {
    canonical: 'https://pistachiocafe.com/catering',
  },
};

export default function CateringPage() {
  return (
    <div className="py-12 sm:py-16 space-y-16 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#fc574a]">Group Dining &amp; Events</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900">
          Catering from Pistachio Cafe
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
          Elevate your morning meeting, university symposium, or family gathering with handcrafted Mediterranean feasts, fresh bakery platters, and artisan coffee.
        </p>
      </div>

      {/* Catering Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
            <Utensils className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Breakfast &amp; Brunch Boxes</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Freshly scrambled egg wraps, za’atar labneh bowls, artisanal cheeses, Damascus flatbreads, and fresh seasonal fruit trays.
          </p>
        </div>

        <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-rose-100 flex items-center justify-center text-[#fc574a]">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Mediterranean Lunch Trays</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Platters of tender chicken shawarma wraps, crispy falafel, rich roasted garlic hummus, baba ghanoush, and crisp Greek salads.
          </p>
        </div>

        <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200 space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-800">
            <Calendar className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Artisan Coffee &amp; Pastries</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Insulated carafes of single-origin coffee or pistachio tea, paired with authentic pistachio baklava, éclairs, and French macarons.
          </p>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold text-stone-900">Request a Catering Quote</h2>
          <p className="text-sm text-stone-500">
            Fill out the form below or call us directly at <a href="tel:2038004262" className="text-[#fc574a] font-semibold">(203) 800-4262</a>.
          </p>
        </div>

        <CateringForm />
      </div>
    </div>
  );
}
