import React from "react";
import Link from "next/link";
import { FaqJsonLd } from "@/components/JsonLd";
import {
  ShoppingBag,
  MapPin,
  Clock,
  Sparkles,
  Coffee,
  UtensilsCrossed,
  Award,
  ChevronRight,
  Heart,
  Calendar,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <FaqJsonLd />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image / Video Poster */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/60 to-stone-950/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto py-20 text-white space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase text-pistachio-light border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Two Locations in New Haven · Whalley Ave & Chapel St</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            Pistachio Cafe & Bakery
          </h1>

          <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
            Handcrafted espresso, signature pistachio lattes, warm Syrian plates, and artisan bakery delights made fresh daily in New Haven, Connecticut.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-pistachio hover:bg-pistachio-dark text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Order Online Now</span>
            </Link>
            <Link
              href="/catering"
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Catering</span>
            </Link>
          </div>

          <div className="pt-8 flex items-center justify-center space-x-8 text-xs sm:text-sm text-stone-300 font-medium">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-pistachio-green"></span>
              <span>100% Certified Halal</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-pistachio-green"></span>
              <span>Daily Fresh Baked</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-pistachio-green"></span>
              <span>Dine In · Pickup · Delivery</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Welcome to Pistachio Cafe */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="text-xs font-bold tracking-widest uppercase text-pistachio">Welcome</span>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
          Welcome to Pistachio Cafe!
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-3xl mx-auto">
          Pistachio Cafe brings you the premier cafe experience in New Haven, Connecticut. We serve fresh coffee, amazing food, and sweet treats that make every visit special. Our two locations on <b>Whalley Avenue</b> and <b>Chapel Street</b> are ready to welcome you with open arms. Our team works hard every day to create meals that are fresh, tasty, and made with care. We believe good food brings people together. From your first sip of coffee to your last bite of dessert, we want you to feel at home with us.
        </p>
      </section>

      {/* 3. Breakfast Spot Section */}
      <section className="bg-stone-50 py-16 sm:py-20 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-pistachio">Morning Perfection</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-snug">
              Your New Favorite Breakfast Spot in New Haven
            </h2>
            <p className="text-stone-600 leading-relaxed">
              You’ll find your new favorite breakfast spot in New Haven right here. It’s a Westville café that serves unique morning dishes all week long. Customers rave about our warm Syrian plates and rich pistachio lattes. You’ll sink into a velvet couch and enjoy a gorgeous community space. We bake our fresh baklava daily so it’s always pure comfort. Don’t skip the day’s first meal. Come experience the beautiful neighborhood hub that everyone talks about.
            </p>
            <div>
              <Link
                href="/page/breakfast"
                className="inline-flex items-center space-x-2 text-pistachio hover:text-pistachio-dark font-semibold text-sm group"
              >
                <span>Discover our breakfast favorites</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/ae3048e3-d444-4c26-b0f0-cab2ec416401?w=600&fit=cover"
              alt="Fresh breakfast plate at Pistachio Cafe"
              className="rounded-2xl object-cover h-64 sm:h-72 w-full shadow-md"
            />
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/05d13f2c-8da6-4968-bc0d-02bab6e11952?w=600&fit=cover"
              alt="Artisan coffee and baklava"
              className="rounded-2xl object-cover h-64 sm:h-72 w-full shadow-md mt-6"
            />
          </div>
        </div>
      </section>

      {/* 4. Daily Meals & Coffee Lovers */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            Daily Meals, Always Fresh 🌿
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Every single dish at Pistachio Cafe is prepared fresh each day. We don’t believe in shortcuts or day-old food. This commitment to freshness means you get better flavor, better nutrition, and a better dining experience every time you visit. Our menu features hearty options that fill you up without weighing you down. Think fresh salads, warm wraps, and comfort food that reminds you of home.
          </p>
          <div className="pt-2">
            <Link href="/menu" className="text-pistachio font-semibold text-sm hover:underline">
              Explore Our Menu →
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-pistachio">
            <Coffee className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-stone-900">
            A Coffee Shop for True Coffee Lovers ☕
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            New Haven coffee lovers swoon over our drinks. Our rich pistachio latte is an absolute must-try item. It’s loved for its nutty flavor and smooth finish. You’ll taste the high quality in every espresso pour. Come visit us to experience pure satisfaction in every single sip.
          </p>
          <div className="pt-2">
            <Link href="/menu" className="text-pistachio font-semibold text-sm hover:underline">
              View Specialty Drinks →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Fresh Brunch Banner */}
      <section className="bg-stone-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <span className="text-xs font-bold tracking-widest uppercase text-pistachio-light">
            Seven Days a Week
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Fresh Brunch, Every Single Day 🍳
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light">
            Brunch isn’t just for weekends, it’s on the menu every single day. Whether you’re starting late, taking a break, or meeting someone for a relaxed meal, our all-day brunch is here when you need it. Stop in for your favorite eggs, fresh breads, or something new from our global-inspired menu.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              href="/menu"
              className="bg-pistachio hover:bg-pistachio-dark text-white px-8 py-3.5 rounded-full font-bold text-base shadow-md transition-all"
            >
              Order Brunch Now
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery: Straight from Our Kitchen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-pistachio">Visual Feast</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Straight from Our Kitchen 📸
          </h2>
          <p className="text-stone-500 text-sm">Take a peek at the dishes our guests love every day.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-2">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/10299bb2-e19e-4e11-8e8a-e8a37c542675?w=600&fit=cover"
              alt="Pistachio Cafe signature latte"
              className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-sm hover:scale-105 transition-transform"
            />
            <div className="text-center text-xs font-semibold text-stone-700">Signature Pistachio Latte</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/bee42194-44eb-4b51-9089-01285443f9dd?w=600&fit=cover"
              alt="Syrian Baklava"
              className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-sm hover:scale-105 transition-transform"
            />
            <div className="text-center text-xs font-semibold text-stone-700">Daily Fresh Baklava</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/64587d10-78dc-488f-a6d3-5f43aa3f3603?w=600&fit=cover"
              alt="Falafel wrap platter"
              className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-sm hover:scale-105 transition-transform"
            />
            <div className="text-center text-xs font-semibold text-stone-700">Authentic Falafel Wrap</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/dfe26d0f-8856-4cec-a704-7ac4bee8e9a7?w=600&fit=cover"
              alt="Fresh pastry and cheesecake"
              className="rounded-2xl object-cover h-48 sm:h-64 w-full shadow-sm hover:scale-105 transition-transform"
            />
            <div className="text-center text-xs font-semibold text-stone-700">Artisan Desserts & Pastries</div>
          </div>
        </div>
      </section>

      {/* 7. Catering Callout */}
      <section className="bg-amber-50/60 py-16 border-y border-amber-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-amber-800">Events & Groups</span>
            <h2 className="text-3xl font-serif font-bold text-stone-900">
              Hosting an Event? We’ve Got Catering 🎉
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              Planning a meeting, party, or celebration? From light brunch boxes to full dessert trays, we can help build a menu that fits your event. Everything is made fresh daily and packaged with care.
            </p>
          </div>
          <Link
            href="/catering"
            className="shrink-0 bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow transition-all"
          >
            Inquire Now
          </Link>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-pistachio">Community Love</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">What Our Guests Are Saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80 space-y-3">
            <p className="text-stone-700 text-sm italic leading-relaxed">
              &quot;The atmosphere was cute and cozy—definitely a vibe! The food was fresh and delicious. The hash browns were my favorite, second only to the coffee. They offer a great selection of coffee flavors and treats. I highly recommend stopping by!&quot;
            </p>
            <div className="font-semibold text-xs text-stone-900">— Vanessa M.</div>
          </div>
          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80 space-y-3">
            <p className="text-stone-700 text-sm italic leading-relaxed">
              &quot;A charming spot near downtown New Haven with a unique design and an impressive selection of pistachio-inspired dishes. I absolutely love the atmosphere, and the staff is friendly and welcoming. Their lattes—beautifully topped with rose petals and pistachios—are a delightful touch.&quot;
            </p>
            <div className="font-semibold text-xs text-stone-900">— Darren J.</div>
          </div>
          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80 space-y-3">
            <p className="text-stone-700 text-sm italic leading-relaxed">
              &quot;I’ve been a fan of Pistachio Cafe for a few years now and always enjoy their coffee and matcha. Whenever I need a change of scenery, it’s the perfect spot to relax with a book or get some work done. The staff is friendly, and the atmosphere is incredibly cozy.&quot;
            </p>
            <div className="font-semibold text-xs text-stone-900">— Jaden M.</div>
          </div>
        </div>
      </section>

      {/* 9. Dual Locations Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8" id="locations">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-pistachio">Visit Us</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">Our Two New Haven Locations</h2>
          <p className="text-stone-500 text-sm">Two distinct hubs serving our beloved New Haven community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location 1: Whalley */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-bold uppercase tracking-wider">
                  Location 1
                </span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Open Daily til 6:00 PM</span>
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Pistachio Cafe (Westville)
              </h3>
              <p className="text-stone-600 text-sm">
                911 Whalley Ave, New Haven, CT 06515
              </p>
              <div className="pt-2 text-xs text-stone-500 space-y-1">
                <p>• Phone: (203) 823-9599</p>
                <p>• Hours: Monday – Sunday: 7:00 AM – 6:00 PM</p>
                <p>• Features: Velvet lounge seating, outdoor patio, free Wi-Fi</p>
              </div>
            </div>
            <div className="p-6 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              <Link
                href="/911-whalley-ave"
                className="text-stone-900 font-semibold text-sm hover:text-pistachio transition-colors"
              >
                Store Details & Map →
              </Link>
              <Link
                href="/menu"
                className="bg-pistachio text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-pistachio-dark transition-all"
              >
                Order from Whalley Ave
              </Link>
            </div>
          </div>

          {/* Location 2: Chapel */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-8 space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-stone-100 text-stone-800 rounded-full text-xs font-bold uppercase tracking-wider">
                  Location 2
                </span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Open Daily til 9:00 PM</span>
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                Pistachio Cafe 2 (Downtown New Haven)
              </h3>
              <p className="text-stone-600 text-sm">
                1245 Chapel St, New Haven, CT 06511
              </p>
              <div className="pt-2 text-xs text-stone-500 space-y-1">
                <p>• Phone: (203) 691-6655</p>
                <p>• Hours: Monday – Sunday: 7:00 AM – 9:00 PM</p>
                <p>• Features: Steps from Yale Arts district, spacious event bookings</p>
              </div>
            </div>
            <div className="p-6 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              <Link
                href="/1245-chapel-st"
                className="text-stone-900 font-semibold text-sm hover:text-pistachio transition-colors"
              >
                Store Details & Map →
              </Link>
              <Link
                href="/menu"
                className="bg-pistachio text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-pistachio-dark transition-all"
              >
                Order from Chapel St
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-pistachio">Help & Info</span>
          <h2 className="text-3xl font-serif font-bold text-stone-900">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          <details className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80 group">
            <summary className="font-semibold text-stone-900 cursor-pointer flex justify-between items-center">
              <span>What is Pistachio Cafe known for?</span>
              <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              We are known for our world-class artisan coffee, our signature pistachio latte topped with rose petals, daily baked Syrian baklava, authentic shakshuka, warm falafel and shawarma wraps, and all-day fresh brunch.
            </p>
          </details>

          <details className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80 group">
            <summary className="font-semibold text-stone-900 cursor-pointer flex justify-between items-center">
              <span>Is all the food at Pistachio Cafe Halal?</span>
              <summary className="sr-only">Halal details</summary>
              <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Yes, 100%. Pistachio Cafe is proudly Muslim-owned and operates with certified Halal ingredients and dedicated preparation across all menu items.
            </p>
          </details>

          <details className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80 group">
            <summary className="font-semibold text-stone-900 cursor-pointer flex justify-between items-center">
              <span>Do you offer delivery or takeout?</span>
              <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              Yes! You can order directly through our website for instant takeout pickup or local delivery throughout New Haven and nearby communities.
            </p>
          </details>

          <details className="bg-stone-50 p-6 rounded-2xl border border-stone-200/80 group">
            <summary className="font-semibold text-stone-900 cursor-pointer flex justify-between items-center">
              <span>What areas do you deliver to?</span>
              <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-3 text-sm text-stone-600 leading-relaxed">
              We deliver to New Haven, Downtown, Westville, Yale University campus, East Rock, West Haven, Whitneyville, Beaver Hills, Dixwell, and surrounding Greater New Haven neighborhoods.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
