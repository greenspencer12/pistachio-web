import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ShoppingBag, CheckCircle, Navigation } from "lucide-react";

export const metadata = {
  title: "Pistachio Cafe 1 | 911 Whalley Ave, Westville, New Haven, CT",
  description:
    "Visit Pistachio Cafe's original Westville location at 911 Whalley Ave, New Haven. Enjoy artisan coffee, pistachio lattes, warm Syrian pastries, and all-day fresh brunch.",
};

export default function WhalleyLocationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Pistachio Cafe - Westville",
    "image": "https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg",
    "url": "https://pistachiocafe.com/911-whalley-ave",
    "telephone": "+1-203-823-9599",
    "priceRange": "$$",
    "servesCuisine": ["Coffee", "Cafe", "Bakery", "Middle Eastern", "Breakfast", "Brunch", "Halal"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "911 Whalley Ave",
      "addressLocality": "New Haven",
      "addressRegion": "CT",
      "postalCode": "06515",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.327379,
      "longitude": -72.960203
    },
    "hasMenu": "https://pistachiocafe.com/menu",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "18:00"
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
          <span className="text-stone-900 font-medium">911 Whalley Ave (Westville)</span>
        </nav>

        {/* Header with single H1 */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-pistachio/10 text-pistachio font-bold text-xs uppercase tracking-wider rounded-full">
            Location 1 · Westville Neighborhood
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">
            Pistachio Cafe — 911 Whalley Ave, New Haven
          </h1>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
            Our beloved flagship cafe in the heart of Westville. Featuring warm velvet couches, an intimate garden patio, and fresh Syrian breakfast plates served all day.
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
              911 Whalley Ave<br />New Haven, CT 06515
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=911%20Whalley%20Ave&destination_place_id=ChIJ3WBON5DZ54kRLT0rDMisS9I"
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
              7:00 AM – 6:00 PM
            </p>
            <span className="inline-block text-xs text-emerald-600 font-medium">Kitchen closes at 5:30 PM</span>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center space-x-1.5">
              <Phone className="w-4 h-4 text-pistachio" />
              <span>Contact & Orders</span>
            </div>
            <p className="text-sm font-semibold text-stone-900">
              <a href="tel:2038239599" className="hover:text-pistachio">(203) 823-9599</a>
            </p>
            <div className="pt-2">
              <Link
                href="/menu"
                className="btn-primary text-xs w-full sm:w-auto text-center"
              >
                Order Pickup from Whalley Ave
              </Link>
            </div>
          </div>
        </div>

        {/* Atmosphere & Offerings */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            About Our Westville Gathering Space
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Located on historic Whalley Avenue in the vibrant Westville arts village, Pistachio Cafe 1 is designed as a peaceful oasis. Savor handcrafted espresso drinks made on state-of-the-art machinery, or linger over a pot of aromatic loose-leaf tea and fresh Damascus pastries. Whether you are catching up with friends, diving into a novel, or picking up morning breakfast on your commute, our Westville team is here to serve you with warm Mediterranean hospitality.
          </p>
        </div>

        {/* Location Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-stone-900">100% Halal Dining</h3>
            <p className="text-xs text-stone-500">Every meat, ingredient, and dessert is certified Halal with zero cross-contamination.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-stone-900">Westville Parking</h3>
            <p className="text-xs text-stone-500">Convenient on-street parking and nearby municipal village parking lots.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <h3 className="font-semibold text-stone-900">Lounge & Garden Patio</h3>
            <p className="text-xs text-stone-500">Relax indoors among antique chandeliers or outdoors in our seasonal patio.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
