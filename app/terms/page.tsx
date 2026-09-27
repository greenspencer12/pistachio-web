import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Pistachio Cafe',
  description: 'Terms and Conditions for Pistachio Cafe (Pistachio LLC). Guidelines regarding online ordering, in-store pickup, catering bookings, and website use.',
  alternates: {
    canonical: 'https://pistachiocafe.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-neutral-200/80 shadow-md">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#fc574a] hover:text-[#e0483c] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#fc574a]/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#fc574a]" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#fc574a]">Legal Policy</span>
            <p className="text-xs text-neutral-500">Updated: February 11, 2026</p>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mb-8 pb-6 border-b border-neutral-200">
          Terms and Conditions
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to <strong>Pistachio Cafe</strong> (owned and operated by <strong>Pistachio LLC</strong>). By accessing our website (<strong>pistachiocafe.com</strong>), purchasing items through our online ordering portal, booking private event spaces, or placing catering orders, you agree to be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">1. Online Ordering &amp; Pickup</h2>
          <p>
            Orders placed via our website are processed and routed directly to our kitchen POS systems at either 911 Whalley Ave or 1245 Chapel St in New Haven, CT. Please ensure that you have selected your desired pickup location and reviewed your order carefully before submitting payment.
          </p>
          <p>
            Estimated pickup times are provided as guidelines based on kitchen volume. Freshly prepared meals and espresso drinks are held for in-store pickup during regular business hours.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">2. Catering &amp; Event Space Rentals</h2>
          <p>
            Catering requests and private event space reservations require advance notice and confirmation by our management team. Cancellation policies and deposit terms for private dining reservations will be specified in your reservation agreement.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">3. Pricing &amp; Menu Availability</h2>
          <p>
            Menu items, seasonal specials, prices, and ingredient sourcing are subject to change without prior notice. In the rare event an ordered item is unavailable, our team will contact you to offer a comparable substitution or issue a prompt refund.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">4. 100% Halal Food Standard</h2>
          <p>
            Pistachio Cafe operates a strictly 100% Halal kitchen across all food prep and beverage stations. We source from verified halal distributors with certified documentation.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">5. Intellectual Property</h2>
          <p>
            All original photography, branding, trademarks, graphics, and architectural designs displayed on this website are the intellectual property of Mohamad Hafez and Pistachio LLC and may not be reproduced without written permission.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">6. Contact Information</h2>
          <p>
            If you have questions regarding these terms, please contact us at:
            <br />
            <strong>Pistachio LLC</strong>
            <br />
            911 Whalley Avenue, New Haven, CT 06515
            <br />
            Phone: (203) 800-4262
          </p>
        </div>
      </div>
    </div>
  );
}
