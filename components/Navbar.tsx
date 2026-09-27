'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav
      aria-label="Main menu"
      className="z-30 pointer-events-auto transition-all sticky top-0 bg-mercury-ui-primary duration-300 border-b border-mercury-ui-divider/40"
      data-has-banner="false"
      data-scrolled="false"
    >
      <div className="mx-auto flex max-w-section-content items-center px-4 py-4 md:pr-6 md:pl-8 gap-2">
        {/* Brand Logo */}
        <div className="md:shrink-0 md:max-w-[640px]" style={{ width: 'min(241px, 640px)' }}>
          <Link
            aria-label="Pistachio Cafe"
            className="flex md:shrink-0 max-w-full"
            href="/"
            style={{ height: '64px' }}
          >
            <img
              alt="Pistachio Cafe"
              className="max-h-full max-w-full object-contain transition-opacity duration-300"
              height="64"
              width="241"
              src="https://pistachiocafe.com/pluto-images/funnel/images/5e40041a-3017-4f4a-bb53-84b99789cf9d?w=241&h=64&fit=cover"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 justify-end items-center min-w-0 hidden md:flex">
          <div className="relative w-full max-w-full">
            <div className="flex items-center justify-end gap-2 p-[9px]">
              <div className="flex gap-2 items-center min-w-0">
                <ul className="flex gap-2 items-center list-none m-0 p-0" role="list">
                  <li className="flex">
                    <Link
                      className="nav-link flex min-h-10 items-center px-3 py-2 font-mercury-ui-secondary font-medium whitespace-nowrap text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                      href="/menu"
                    >
                      Menu
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      className="nav-link flex min-h-10 items-center px-3 py-2 font-mercury-ui-secondary font-medium whitespace-nowrap text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                      href="/catering"
                    >
                      Catering
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      className="nav-link flex min-h-10 items-center px-3 py-2 font-mercury-ui-secondary font-medium whitespace-nowrap text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                      href="/page/breakfast"
                    >
                      Breakfast
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      className="nav-link flex min-h-10 items-center px-3 py-2 font-mercury-ui-secondary font-medium whitespace-nowrap text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                      href="/page/brunch"
                    >
                      Brunch
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      className="nav-link flex min-h-10 items-center px-3 py-2 font-mercury-ui-secondary font-medium whitespace-nowrap text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                      href="/page/birthdays--space-rentals"
                    >
                      Private Events
                    </Link>
                  </li>

                  {/* More dropdown */}
                  <li className="relative flex">
                    <button
                      type="button"
                      aria-label="More menu"
                      aria-expanded={moreOpen}
                      onClick={() => setMoreOpen(!moreOpen)}
                      className="flex min-h-10 items-center px-3 py-2 font-mercury-ui-secondary font-medium whitespace-nowrap text-mercury-ui-button-base text-mercury-ui-secondary transition-all duration-150 ease-out rounded-mercury-ui-control hover:bg-mercury-ui-tertiary"
                    >
                      <span>More</span>
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {moreOpen && (
                      <div
                        onMouseLeave={() => setMoreOpen(false)}
                        className="absolute right-0 top-full mt-2 w-64 rounded-mercury-ui-control bg-white shadow-mercury-ui-control border border-mercury-ui-button-secondary p-2 z-50 animate-in fade-in slide-in-from-top-2"
                      >
                        <Link
                          href="/story"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          Our Story
                        </Link>
                        <Link
                          href="/page/proudly-serving-new-haven"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          Proudly Serving New Haven
                        </Link>
                        <a
                          href="https://squareup.com/gift/MLRXY208CEENQ/order"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          Gift Cards
                        </a>
                        <Link
                          href="/events"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          Events
                        </Link>
                        <Link
                          href="/careers"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          We&apos;re Hiring
                        </Link>
                        <Link
                          href="/page/press"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          Press
                        </Link>
                        <Link
                          href="/page/contact-us--locations"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          Contact Us &amp; Locations
                        </Link>
                        <Link
                          href="/page/halal-at-pistachio"
                          onClick={() => setMoreOpen(false)}
                          className="block px-3 py-2 font-mercury-ui-secondary text-base font-medium rounded-mercury-ui-control transition-all hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
                        >
                          Halal at Pistachio
                        </Link>
                      </div>
                    )}
                  </li>
                </ul>

                {/* Sign in button */}
                <Link
                  className="group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-10 py-2 px-3 border-mercury-ui-button-secondary shadow-mercury-ui-control border-0 bg-mercury-ui-button-secondary hover:bg-mercury-ui-tertiary text-mercury-ui-button-secondary no-underline"
                  href="/login"
                >
                  Sign in
                </Link>

                {/* Order online primary CTA button */}
                <Link
                  className="group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-10 py-2 px-3 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary"
                  href="/menu?dialogState=orderDetails"
                >
                  Order online
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex md:hidden items-center gap-2 ml-auto">
          <Link
            className="group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-10 py-2 px-3 no-underline border-mercury-ui-button-secondary shadow-mercury-ui-control border-0 bg-mercury-ui-button-secondary hover:bg-mercury-ui-tertiary text-mercury-ui-button-secondary"
            href="/menu"
          >
            Menu
          </Link>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex justify-center items-center w-10 h-10 transition-all rounded-mercury-ui-control hover:bg-mercury-ui-secondary focus-visible:outline-mercury-ui-text-primary focus-visible:outline-2"
          >
            <svg className="w-6 h-6 text-mercury-ui-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-mercury-ui-divider bg-white px-4 pt-4 pb-6 space-y-2 animate-in slide-in-from-top-2">
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base text-mercury-ui-secondary transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline"
          >
            Sign in
          </Link>
          <Link
            href="/menu"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Menu
          </Link>
          <Link
            href="/catering"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Catering
          </Link>
          <Link
            href="/page/breakfast"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Breakfast
          </Link>
          <Link
            href="/page/brunch"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Brunch
          </Link>
          <Link
            href="/page/birthdays--space-rentals"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Private Events
          </Link>
          <Link
            href="/story"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Our Story
          </Link>
          <Link
            href="/page/proudly-serving-new-haven"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Proudly Serving New Haven
          </Link>
          <a
            href="https://squareup.com/gift/MLRXY208CEENQ/order"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Gift Cards
          </a>
          <Link
            href="/events"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Events
          </Link>
          <Link
            href="/careers"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            We&apos;re Hiring
          </Link>
          <Link
            href="/page/press"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Press
          </Link>
          <Link
            href="/page/contact-us--locations"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Contact Us &amp; Locations
          </Link>
          <Link
            href="/page/halal-at-pistachio"
            onClick={() => setMobileMenuOpen(false)}
            className="mobile-menu-link flex min-h-12 items-center px-4 py-3 font-mercury-ui-secondary font-medium text-mercury-ui-button-base transition-all rounded-mercury-ui-control hover:bg-mercury-ui-tertiary no-underline text-mercury-ui-secondary"
          >
            Halal at Pistachio
          </Link>

          <div className="pt-2">
            <Link
              href="/menu?dialogState=orderDetails"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-4 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary text-center"
            >
              Order online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
