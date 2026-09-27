import React from 'react';
import { Briefcase, Clock, Sparkles, Heart } from 'lucide-react';
import CareersForm from '@/components/CareersForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at Pistachio Cafe | Join Our Team',
  description:
    'Join the Pistachio Cafe family in New Haven, CT. We are always hiring baristas, line cooks, and shift supervisors who value great hospitality and artisanal food.',
  alternates: {
    canonical: 'https://pistachiocafe.com/careers',
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Header */}
      <section className="py-20 md:py-24 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <Briefcase className="w-3.5 h-3.5" /> Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            Careers at Pistachio Cafe
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            We are always hiring passionate individuals who love great food, artisanal coffee, and warm hospitality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-lg">
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#211611] mb-4">
              Why work with us?
            </h2>
            <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
              We are always hiring A players who work hard, love helping others, and do great work. Fill out the 2-minute form below with your resume and a few sentences about you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 py-8 border-y border-neutral-100 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-[#fc574a]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-[#fc574a]" />
              </div>
              <p className="font-semibold text-neutral-900 mb-1">Supportive Culture</p>
              <p className="text-sm text-neutral-600">A welcoming, close-knit family environment.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-[#fc574a]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-[#fc574a]" />
              </div>
              <p className="font-semibold text-neutral-900 mb-1">Artisanal Craft</p>
              <p className="text-sm text-neutral-600">Master traditional Middle Eastern coffees and cuisine.</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-[#fc574a]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-[#fc574a]" />
              </div>
              <p className="font-semibold text-neutral-900 mb-1">Flexible Scheduling</p>
              <p className="text-sm text-neutral-600">Great for students, creatives, and hospitality pros.</p>
            </div>
          </div>

          <CareersForm />
        </div>
      </section>
    </div>
  );
}
