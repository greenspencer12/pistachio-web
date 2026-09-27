import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pistachio Cafe',
  description: 'Privacy Policy for Pistachio Cafe (Pistachio LLC). Details regarding personal data protection, order processing, and customer privacy.',
  alternates: {
    canonical: 'https://pistachiocafe.com/privacy',
  },
};

export default function PrivacyPage() {
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
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Lock className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-700">Privacy &amp; Data Security</span>
            <p className="text-xs text-neutral-500">Updated: February 11, 2026</p>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mb-8 pb-6 border-b border-neutral-200">
          Pistachio Cafe Privacy Policy
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            <strong>Pistachio LLC</strong> and its parents, subsidiaries, and affiliated entities (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respect your concerns about privacy and value the relationship we have with you. We are committed to protecting it through our compliance with this privacy policy.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">1. Information We Collect</h2>
          <p>
            When you visit or place an order through <strong>pistachiocafe.com</strong>, we collect necessary personal details to fulfill your order, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact details such as name, email address, and telephone number.</li>
            <li>Order specifications, pickup preferences, and catering notes.</li>
            <li>Payment transaction details processed securely via certified PCI-compliant payment gateways (e.g. Square). We do not store raw credit card numbers on our local servers.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">2. How We Use Your Information</h2>
          <p>
            Your information is used solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fulfill, verify, and notify you of order readiness and pickup updates.</li>
            <li>Process private event space rental inquiries and catering quotes.</li>
            <li>Improve site navigation, page load speed, and user experience.</li>
            <li>Send periodic updates or promotions only if you have explicitly opted in.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">3. We Never Sell Your Data</h2>
          <p>
            Pistachio Cafe does not sell, rent, trade, or monetize your personal information to third-party data brokers or external advertisers.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">4. Security Standards</h2>
          <p>
            We implement industry-standard encryption, SSL protocols, and restricted access controls to safeguard your personal data from unauthorized access or disclosure.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">5. Contact Us Regarding Your Privacy</h2>
          <p>
            For questions or requests regarding your personal information, please contact us at:
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
