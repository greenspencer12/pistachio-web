import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us & Locations | Pistachio Cafe New Haven',
  description:
    'Contact Pistachio Cafe at 911 Whalley Ave and 1245 Chapel St in New Haven, CT. Hours of operation, direct phone numbers, directions, and inquiry form.',
  alternates: {
    canonical: 'https://pistachiocafe.com/page/contact-us--locations',
  },
};

export default function ContactUsLocationsPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Header */}
      <section className="py-20 md:py-28 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <MessageSquare className="w-3.5 h-3.5" /> Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            Contact Us &amp; Locations
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            We value your thoughts and inquiries. Reach out to either of our New Haven locations or send us a message below.
          </p>
        </div>
      </section>

      {/* Notice Banner */}
      <div className="bg-[#fc574a]/10 border-b border-[#fc574a]/20 py-4 px-4 text-center">
        <p className="text-sm md:text-base font-medium text-[#211611]">
          ✨ <strong>Walk-Ins Welcome:</strong> No reservations required for parties under 10 guests!
        </p>
      </div>

      {/* Dual Locations Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location 1: Whalley Ave */}
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-md flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/a288de7c-58c8-4fc6-9194-7184ed49085f?w=960&fit=cover"
                alt="Pistachio Cafe 1 - Whalley Ave"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#211611]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Westville • Pistachio 1
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#211611] mb-2">
                  Contact Us @ Pistachio 1
                </h2>
                <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                  We value your thoughts and inquiries. Feel free to share your comments or questions with us, and rest assured, our team will respond promptly to assist you.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#fc574a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">911 Whalley Avenue</p>
                      <p className="text-neutral-600 text-sm">New Haven, CT 06515, USA</p>
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

              <div className="flex flex-wrap gap-3 pt-6 border-t border-neutral-100">
                <Link
                  href="/911-whalley-ave"
                  className="flex-1 text-center py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm transition-colors"
                >
                  Location Details
                </Link>
                <Link
                  href="/menu"
                  className="flex-1 text-center py-3 rounded-xl bg-[#fc574a] hover:bg-[#e0483c] text-white font-semibold text-sm transition-all shadow-md shadow-[#fc574a]/20"
                >
                  Order Whalley
                </Link>
              </div>
            </div>
          </div>

          {/* Location 2: Chapel St */}
          <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-md flex flex-col">
            <div className="relative h-64 w-full">
              <Image
                src="https://pistachiocafe.com/pluto-images/funnel/images/89bc8855-d126-4b5e-8e81-0189364d5b5d?w=960&fit=cover"
                alt="Pistachio Cafe 2 - Chapel St"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#211611]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Downtown • Pistachio 2
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#211611] mb-2">
                  Contact Us @ Pistachio 2
                </h2>
                <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                  We value your thoughts and inquiries. Feel free to share your comments or questions with us, and rest assured, our team will respond promptly to assist you.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#fc574a] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-900">1245 Chapel Street</p>
                      <p className="text-neutral-600 text-sm">New Haven, CT 06511, United States</p>
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

              <div className="flex flex-wrap gap-3 pt-6 border-t border-neutral-100">
                <Link
                  href="/1245-chapel-st"
                  className="flex-1 text-center py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm transition-colors"
                >
                  Location Details
                </Link>
                <Link
                  href="/menu"
                  className="flex-1 text-center py-3 rounded-xl bg-[#fc574a] hover:bg-[#e0483c] text-white font-semibold text-sm transition-all shadow-md shadow-[#fc574a]/20"
                >
                  Order Chapel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 md:py-20 bg-white border-t border-neutral-200/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-[#211611] mb-2">Send Us a Direct Message</h2>
            <p className="text-neutral-600">Have feedback or an inquiry? We&apos;d love to hear from you.</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
