import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-mercury-ui-tertiary pb-18 md:pb-0 border-t border-mercury-ui-divider/40">
      <div className="max-w-section-content mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Navigation Links 1 */}
          <div>
            <ul className="space-y-3 p-0 m-0 list-none">
              <li>
                <Link
                  href="/menu"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/catering"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Catering
                </Link>
              </li>
              <li>
                <Link
                  href="/page/breakfast"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link
                  href="/page/brunch"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Brunch
                </Link>
              </li>
              <li>
                <Link
                  href="/page/birthdays--space-rentals"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Private Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation Links 2 */}
          <div>
            <ul className="space-y-3 p-0 m-0 list-none">
              <li>
                <Link
                  href="/story"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/page/proudly-serving-new-haven"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Proudly Serving New Haven
                </Link>
              </li>
              <li>
                <a
                  href="https://squareup.com/gift/MLRXY208CEENQ/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  We&apos;re Hiring
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links 3 */}
          <div>
            <ul className="space-y-3 p-0 m-0 list-none">
              <li>
                <Link
                  href="/page/press"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/page/contact-us--locations"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Contact Us &amp; Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/page/halal-at-pistachio"
                  className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:text-mercury-ui-text-primary no-underline transition-colors"
                >
                  Halal at Pistachio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: App Download & Social */}
          <div className="space-y-4">
            <div>
              <h3 className="font-mercury-ui-primary text-base font-semibold text-mercury-ui-text-primary mb-1">
                Download our app
              </h3>
              <p className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary">
                Earn points for free food
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="https://pistachiocafesmci.app.ordersave.com/download-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src="https://pistachiocafe.com/pluto-images/directus/fe79ce4f-1efd-41ee-a46c-874bb33d01a9.png?h=40&fit=cover"
                  alt="Download on the App Store"
                  className="h-10 w-auto object-contain"
                />
              </a>
              <a
                href="https://pistachiocafesmci.app.ordersave.com/download-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src="https://pistachiocafe.com/pluto-images/directus/b8f4b064-1c8a-4bf7-80ea-8718c426401d.png?h=40&fit=cover"
                  alt="Get it on Google Play"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 pt-2">
              <a
                aria-label="View Facebook page (opens in new tab)"
                href="https://www.facebook.com/103408134798120"
                rel="noreferrer noopener"
                target="_blank"
                className="rounded-mercury-ui-control inline-flex h-10 w-10 items-center justify-center no-underline hover:bg-mercury-ui-primary/60 transition-colors border border-mercury-ui-divider/50 bg-white"
              >
                <svg className="h-4 w-4 text-mercury-ui-text-secondary" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M9.00002 1.79987C5.02382 1.79987 1.80002 5.02367 1.80002 8.99986C1.80002 12.6095 4.45922 15.5903 7.92362 16.1111V10.9079H6.14222V9.01546H7.92362V7.75606C7.92362 5.67107 8.93942 4.75607 10.6722 4.75607C11.502 4.75607 11.9412 4.81787 12.1488 4.84547V6.49727H10.9668C10.2312 6.49727 9.97442 7.19506 9.97442 7.98106V9.01546H12.1302L11.838 10.9079H9.97442V16.1261C13.4886 15.6497 16.2 12.6449 16.2 8.99986C16.2 5.02367 12.9762 1.79987 9.00002 1.79987Z" />
                </svg>
              </a>
              <a
                aria-label="View Instagram page (opens in new tab)"
                href="http://instagram.com/pistachionhv"
                rel="noreferrer noopener"
                target="_blank"
                className="rounded-mercury-ui-control inline-flex h-10 w-10 items-center justify-center no-underline hover:bg-mercury-ui-primary/60 transition-colors border border-mercury-ui-divider/50 bg-white"
              >
                <svg className="h-4 w-4 text-mercury-ui-text-secondary" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M5.99878 1.79987C3.68338 1.79987 1.79995 3.68504 1.79995 6.00104V12.001C1.79995 14.3164 3.68512 16.1999 6.00112 16.1999H12.0011C14.3165 16.1999 16.1999 14.3147 16.1999 11.9987V5.99869C16.1999 3.68329 14.3148 1.79987 11.9988 1.79987H5.99878ZM13.1999 4.19987C13.5311 4.19987 13.7999 4.46867 13.7999 4.79987C13.7999 5.13107 13.5311 5.39987 13.1999 5.39987C12.8687 5.39987 12.5999 5.13107 12.5999 4.79987C12.5999 4.46867 12.8687 4.19987 13.1999 4.19987ZM8.99995 5.39987C10.9853 5.39987 12.5999 7.01447 12.5999 8.99987C12.5999 10.9853 10.9853 12.5999 8.99995 12.5999C7.01455 12.5999 5.39995 10.9853 5.39995 8.99987C5.39995 7.01447 7.01455 5.39987 8.99995 5.39987ZM8.99995 6.59987C8.36343 6.59987 7.75298 6.85272 7.30289 7.30281C6.85281 7.7529 6.59995 8.36335 6.59995 8.99987C6.59995 9.63638 6.85281 10.2468 7.30289 10.6969C7.75298 11.147 8.36343 11.3999 8.99995 11.3999C9.63647 11.3999 10.2469 11.147 10.697 10.6969C11.1471 10.2468 11.3999 9.63638 11.3999 8.99987C11.3999 8.36335 11.1471 7.7529 10.697 7.30281C10.2469 6.85272 9.63647 6.59987 8.99995 6.59987Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-mercury-ui-divider" />

        {/* Bottom Legal Bar */}
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <ul className="m-0 flex max-w-full list-none flex-wrap gap-x-8 gap-y-2 p-0" role="list">
            <li>
              <Link
                href="/privacy"
                className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:underline"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:underline"
              >
                Terms of service
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary hover:underline"
              >
                Accessibility
              </Link>
            </li>
          </ul>

          <p className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary m-0">
            &copy; 2026 Pistachio LLC. All rights reserved.
          </p>

          <div>
            <span className="text-mercury-ui-text-secondary text-mercury-ui-text-sm font-mercury-ui-secondary">
              Powered by Pistachio POS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
