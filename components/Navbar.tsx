'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag, MapPin, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/5e40041a-3017-4f4a-bb53-84b99789cf9d?h=48&fit=cover"
              alt="Pistachio Cafe"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6">
            <Link href="/menu" className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors">
              Menu
            </Link>
            <Link href="/catering" className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors">
              Catering
            </Link>
            <Link href="/page/breakfast" className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors">
              Breakfast
            </Link>
            <Link href="/page/brunch" className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors">
              Brunch
            </Link>
            <Link href="/page/birthdays--space-rentals" className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors">
              Private Events
            </Link>
            <Link href="/story" className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors">
              Our Story
            </Link>
            <Link href="/page/halal-at-pistachio" className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors">
              100% Halal
            </Link>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center space-x-1 text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors focus:outline-none"
              >
                <span>More</span>
                <ChevronDown className="w-4 h-4 text-stone-500" />
              </button>

              {moreOpen && (
                <div
                  onMouseLeave={() => setMoreOpen(false)}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-stone-100 py-3 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    href="/page/proudly-serving-new-haven"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-50 hover:text-[#fc574a] transition-colors"
                  >
                    Proudly Serving New Haven
                  </Link>
                  <Link
                    href="/events"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-50 hover:text-[#fc574a] transition-colors"
                  >
                    Events
                  </Link>
                  <Link
                    href="/careers"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-50 hover:text-[#fc574a] transition-colors"
                  >
                    We&apos;re Hiring
                  </Link>
                  <Link
                    href="/page/press"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-50 hover:text-[#fc574a] transition-colors"
                  >
                    Press
                  </Link>
                  <Link
                    href="/page/contact-us--locations"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-stone-800 hover:bg-stone-50 hover:text-[#fc574a] transition-colors"
                  >
                    Contact Us &amp; Locations
                  </Link>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center space-x-1 text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors focus:outline-none"
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4 text-stone-500" />
              </button>

              {locationsOpen && (
                <div
                  onMouseLeave={() => setLocationsOpen(false)}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-stone-100 py-3 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    href="/locations"
                    onClick={() => setLocationsOpen(false)}
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#fc574a] hover:bg-stone-50 border-b border-stone-100"
                  >
                    All Locations Overview →
                  </Link>
                  <Link
                    href="/911-whalley-ave"
                    onClick={() => setLocationsOpen(false)}
                    className="block px-4 py-2.5 hover:bg-stone-50 transition-colors"
                  >
                    <div className="text-sm font-semibold text-stone-900">Pistachio Cafe 1 (Westville)</div>
                    <div className="text-xs text-stone-500">911 Whalley Ave · Open til 7:30 PM</div>
                  </Link>
                  <Link
                    href="/1245-chapel-st"
                    onClick={() => setLocationsOpen(false)}
                    className="block px-4 py-2.5 hover:bg-stone-50 transition-colors border-t border-stone-100"
                  >
                    <div className="text-sm font-semibold text-stone-900">Pistachio Cafe 2 (Downtown)</div>
                    <div className="text-xs text-stone-500">1245 Chapel St · Open til 8:30 PM</div>
                  </Link>
                </div>
              )}
            </div>

            <a
              href="https://squareup.com/gift/MLRXY208CEENQ/order"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-800 hover:text-[#fc574a] font-medium text-sm transition-colors"
            >
              Gift Cards
            </a>
          </nav>

          {/* Right Action & Order Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/menu"
              className="bg-[#fc574a] hover:bg-[#e0483c] text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-3">
            <Link
              href="/menu"
              className="bg-[#fc574a] text-white px-4 py-2 rounded-full font-semibold text-xs flex items-center space-x-1"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-6 pt-4 pb-8 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="space-y-3">
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-stone-900 hover:text-[#fc574a]"
            >
              Order Online &amp; Menu
            </Link>
            <Link
              href="/catering"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Catering
            </Link>
            <Link
              href="/page/breakfast"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Breakfast
            </Link>
            <Link
              href="/page/brunch"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Brunch
            </Link>
            <Link
              href="/page/birthdays--space-rentals"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Private Events &amp; Rentals
            </Link>
            <Link
              href="/story"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Our Story
            </Link>
            <Link
              href="/page/halal-at-pistachio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              100% Halal Dining
            </Link>
            <Link
              href="/page/proudly-serving-new-haven"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Proudly Serving New Haven
            </Link>
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Events
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              We&apos;re Hiring
            </Link>
            <Link
              href="/page/press"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Press &amp; Media
            </Link>
            <Link
              href="/page/contact-us--locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Contact Us &amp; Locations
            </Link>
            <a
              href="https://squareup.com/gift/MLRXY208CEENQ/order"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-medium text-stone-700 hover:text-[#fc574a]"
            >
              Gift Cards
            </a>
          </div>

          <div className="pt-4 border-t border-stone-100 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">Our Locations</div>
            <Link
              href="/911-whalley-ave"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 text-sm text-stone-800 hover:text-[#fc574a] py-1"
            >
              <MapPin className="w-4 h-4 text-[#fc574a]" />
              <span>911 Whalley Ave (Westville)</span>
            </Link>
            <Link
              href="/1245-chapel-st"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center space-x-2 text-sm text-stone-800 hover:text-[#fc574a] py-1"
            >
              <MapPin className="w-4 h-4 text-[#fc574a]" />
              <span>1245 Chapel St (Downtown New Haven)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
