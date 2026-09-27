import React from 'react';
import Link from 'next/link';
import { Eye, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Pistachio Cafe',
  description: 'Accessibility Statement for Pistachio Cafe. Our commitment to ensuring an inclusive digital experience for all customers and visitors.',
  alternates: {
    canonical: 'https://pistachiocafe.com/accessibility',
  },
};

export default function AccessibilityPage() {
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
            <Eye className="w-5 h-5 text-[#fc574a]" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#fc574a]">Digital Inclusion</span>
            <p className="text-xs text-neutral-500">WCAG 2.1 AA Compliance Standard</p>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#211611] mb-8 pb-6 border-b border-neutral-200">
          Accessibility Statement
        </h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-neutral-700 leading-relaxed text-sm sm:text-base">
          <p>
            We want everyone to be able to access our site and services. Accessibility needs vary, and we&apos;re committed to improving the experience for all customers, diners, and community members.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">How We Support Digital Access</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Our web engineering adheres to W3C Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.</li>
            <li>We utilize high-contrast color ratios, semantic HTML structures, and descriptive alt attributes for all photography.</li>
            <li>Most modern browsers and assistive technologies (such as screen readers, voice dictation, and magnification software) work seamlessly across our pages.</li>
            <li>We continuously iterate and make improvements to our site, implementing emerging technologies that increase ease of use for everyone.</li>
          </ul>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">Third-Party Content</h2>
          <p>
            Some features (such as interactive maps, payment gateways, and social integrations) are powered by third-party platforms. While we do not control third-party code directly, we encourage our partners to maintain rigorous accessibility standards.
          </p>

          <h2 className="text-xl font-serif font-bold text-[#211611] mt-8 mb-3">Assistance &amp; Feedback</h2>
          <p>
            If you encounter difficulty accessing any part of our website or need assistance with ordering or booking an event space, please reach out directly:
          </p>
          <div className="bg-[#fbf9f6] p-6 rounded-2xl border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 font-medium text-neutral-900">
              <Phone className="w-4 h-4 text-[#fc574a]" /> Phone: (203) 800-4262
            </div>
            <div className="flex items-center gap-2 font-medium text-neutral-900">
              <Mail className="w-4 h-4 text-[#fc574a]" /> Address: 911 Whalley Ave, New Haven, CT 06515
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
