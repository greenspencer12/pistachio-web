import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#211611] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Locations & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & About */}
          <div className="space-y-4">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/5e40041a-3017-4f4a-bb53-84b99789cf9d?h=48&fit=cover"
              alt="Pistachio Cafe"
              className="h-10 w-auto brightness-200 contrast-200"
            />
            <p className="text-sm text-stone-400 leading-relaxed">
              New Haven’s favorite artisan cafe and gathering space. Serving handcrafted coffee, warm Syrian pastries, global brunch, and authentic Halal comfort food every day.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com/pistachionhv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-[#fc574a] hover:bg-stone-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/103408134798120"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-[#fc574a] hover:bg-stone-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location 1 Card */}
          <div className="space-y-3 bg-stone-800/40 p-5 rounded-2xl border border-stone-800">
            <h3 className="text-white font-semibold text-base flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fc574a] inline-block"></span>
              <span>Pistachio 1 (Westville)</span>
            </h3>
            <div className="text-xs text-stone-400 space-y-2">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>911 Whalley Ave, New Haven, CT 06515</span>
              </p>
              <p className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>Mon–Thu 7am–7:30pm<br />Fri–Sun 7am–9:30pm</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <a href="tel:2038004262" className="hover:text-white transition-colors">(203) 800-4262</a>
              </p>
            </div>
            <div className="pt-2 flex gap-3">
              <Link
                href="/911-whalley-ave"
                className="text-xs font-semibold text-[#fc574a] hover:text-white transition-colors"
              >
                Details →
              </Link>
              <Link
                href="/menu"
                className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                Order Whalley →
              </Link>
            </div>
          </div>

          {/* Location 2 Card */}
          <div className="space-y-3 bg-stone-800/40 p-5 rounded-2xl border border-stone-800">
            <h3 className="text-white font-semibold text-base flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fc574a] inline-block"></span>
              <span>Pistachio 2 (Downtown)</span>
            </h3>
            <div className="text-xs text-stone-400 space-y-2">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>1245 Chapel St, New Haven, CT 06511</span>
              </p>
              <p className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>Sun–Thu 8:30am–8:30pm<br />Fri–Sat 8:30am–10:30pm</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <a href="tel:2038004533" className="hover:text-white transition-colors">(203) 800-4533</a>
              </p>
            </div>
            <div className="pt-2 flex gap-3">
              <Link
                href="/1245-chapel-st"
                className="text-xs font-semibold text-[#fc574a] hover:text-white transition-colors"
              >
                Details →
              </Link>
              <Link
                href="/menu/1245-chapel-st"
                className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                Order Chapel →
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/menu" className="hover:text-[#fc574a] transition-colors">Digital Menu &amp; Ordering</Link>
              </li>
              <li>
                <Link href="/catering" className="hover:text-[#fc574a] transition-colors">Catering Inquiries</Link>
              </li>
              <li>
                <Link href="/page/birthdays--space-rentals" className="hover:text-[#fc574a] transition-colors">Event Space Rentals</Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-[#fc574a] transition-colors">Our Story &amp; Heritage</Link>
              </li>
              <li>
                <Link href="/page/halal-at-pistachio" className="hover:text-[#fc574a] transition-colors">100% Halal Certification</Link>
              </li>
              <li>
                <Link href="/page/proudly-serving-new-haven" className="hover:text-[#fc574a] transition-colors">Serving Universities &amp; Hospitals</Link>
              </li>
              <li>
                <Link href="/page/press" className="hover:text-[#fc574a] transition-colors">Press &amp; Media Highlights</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#fc574a] transition-colors">Careers / Join Our Team</Link>
              </li>
              <li>
                <a href="https://squareup.com/gift/MLRXY208CEENQ/order" target="_blank" rel="noopener noreferrer" className="hover:text-[#fc574a] transition-colors">Square Gift Cards</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Pistachio Cafe (Pistachio LLC). All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-stone-300 transition-colors">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
