import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ShoppingBag, CheckCircle, Navigation } from "lucide-react";

export const metadata = {
  title: "Pistachio Cafe 2 | 1245 Chapel St, Downtown New Haven, CT",
  description:
    "Visit Pistachio Cafe 2 at 1245 Chapel St in Downtown New Haven, CT. Conveniently located near the Yale Arts District, serving artisan coffee, Syrian baklava, and fresh brunch until 9:00 PM.",
};

export default function ChapelLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Pistachio Cafe 2 - Downtown New Haven",
    "image": "https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg",
    "url": "https://pistachiocafe.com/1245-chapel-st",
    "telephone": "+1-203-691-6655",
    "priceRange": "$$",
    "servesCuisine": ["Coffee", "Cafe", "Bakery", "Middle Eastern", "Breakfast", "Brunch", "Halal"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1245 Chapel St",
      "addressLocality": "New Haven",
      "addressRegion": "CT",
      "postalCode": "06511",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.309556,
      "longitude": -72.935814
    },
    "hasMenu": "https://pistachiocafe.com/menu/1245-chapel-st",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "21:00"
      }
    ]
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-stone-500 flex items-center space-x-2">
          <Link href="/" className="hover:text-pistachio">Home</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium">1245 Chapel St (Downtown New Haven)</span>
        </nav>

        {/* Header with single H1 */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-pistachio/10 text-pistachio font-bold text-xs uppercase tracking-wider rounded-full">
            Location 2 · Downtown New Haven / Yale District
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Pistachio Cafe 2 — 1245 Chapel St, New Haven
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
            Our spacious Downtown New Haven destination on historic Chapel Street. Serving our complete breakfast, brunch, and artisan coffee menu until 9:00 PM daily.
          </p>
        </div>

        {/* Action & Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center space-x-1.5">
              <MapPin className="w-4 h-4 text-pistachio" />
              <span>Address</span>
            </div>
            <p className="text-sm font-semibold text-stone-900">
              1245 Chapel St<br />New Haven, CT 06511
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=1245%20Chapel%20St&destination_place_id=ChIJBdtHC6nZ54kRkk2pJiWGxeQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-pistachio font-semibold hover:underline"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-pistachio" />
              <span>Operating Hours</span>
            </div>
            <p className="text-sm font-semibold text-stone-900">
              Open Daily 7 Days a Week<br />
              7:00 AM – 9:00 PM
            </p>
            <span className="inline-block text-xs text-emerald-600 font-medium">Late night coffee & desserts</span>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center space-x-1.5">
              <Phone className="w-4 h-4 text-pistachio" />
              <span>Contact & Orders</span>
            </div>
            <p className="text-sm font-semibold text-stone-900">
              <a href="tel:2036916655" className="hover:text-pistachio">(203) 691-6655</a>
            </p>
            <div className="pt-2">
              <Link
                href="/menu"
                className="btn-primary text-xs w-full sm:w-auto text-center"
              >
                Order Pickup from Chapel St
              </Link>
            </div>
          </div>
        </div>

        {/* Atmosphere & Offerings */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            About Our Chapel Street Cafe
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Steps away from the Yale University campus and the historic Chapel West district, Pistachio Cafe 2 offers a stunning architectural backdrop with ample seating. Whether you are holding a study session, planning a catered celebration, or enjoying a late-evening rose pistachio latte and warm kanafeh, our Chapel Street team welcomes you with unmatched culinary passion and 100% Halal integrity.
          </p>
        </div>

        {/* Location Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-stone-900">Downtown Convenience</h3>
            <p className="text-xs text-stone-500">Convenient to Yale University, Yale New Haven Hospital, and Downtown New Haven.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-stone-900">Extended Evening Hours</h3>
            <p className="text-xs text-stone-500">Open until 9:00 PM every day for late-afternoon studying, tea, and desserts.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-stone-900">Event Space Bookings</h3>
            <p className="text-xs text-stone-500">Spacious layout available for private party rentals, baby showers, and meetings.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
