import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaqJsonLd } from '@/components/JsonLd';
import {
  ShoppingBag,
  MapPin,
  Clock,
  Sparkles,
  Coffee,
  UtensilsCrossed,
  Phone,
  ChevronDown,
  Gift,
  ExternalLink,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <FaqJsonLd />

      {/* 1. Hero Section: Best Cafe in New Haven */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image / Video Poster */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/60 to-[#0d0d0d]/85" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto py-20 text-white space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase text-white border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#fc574a]" />
            <span>Two Locations in New Haven · Whalley Ave &amp; Chapel St</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Best Cafe in New Haven
          </h1>

          <p className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Pistachio Cafe brings you the premier cafe experience in New Haven, Connecticut. Fresh coffee, warm Syrian pastries, daily brunch, and 100% Halal comfort food.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="w-full sm:w-auto bg-[#fc574a] hover:bg-[#e04437] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Order Online</span>
            </Link>
            <Link
              href="/catering"
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-base transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Catering</span>
            </Link>
          </div>

          <div className="pt-8 flex items-center justify-center space-x-8 text-xs sm:text-sm text-neutral-300 font-medium">
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2db35e]"></span>
              <span>100% Certified Halal</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2db35e]"></span>
              <span>Daily Fresh Baked</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#2db35e]"></span>
              <span>Dine In · Pickup · Delivery</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Welcome to Pistachio Cafe! */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
          Welcome to Pistachio Cafe!
        </h2>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl mx-auto">
          Pistachio Cafe brings you the best cafe experience in New Haven, Connecticut. We serve fresh coffee, amazing food, and sweet treats that make every visit special. Our two locations on Whalley Avenue and Chapel Street are ready to welcome you with open arms. Our team works hard every day to create meals that are fresh, tasty, and made with care. We believe good food brings people together, From your first sip of coffee to your last bite of dessert, we want you to feel at home with us.
        </p>
      </section>

      {/* 3. Your New Favorite Breakfast Spot in New Haven */}
      <section className="bg-[#fbf9f6] py-16 sm:py-20 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d] leading-snug">
              Your New Favorite Breakfast Spot in New Haven
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              You&apos;ll find your new favorite breakfast spot in New Haven right here. It&apos;s a Westville café that serves unique morning dishes all week long. Customers rave about our warm Syrian plates and rich pistachio lattes. You&apos;ll sink into a velvet couch and enjoy a gorgeous community space. We bake our fresh baklava daily so it&apos;s always pure comfort. Don&apos;t skip the day&apos;s first meal. Come experience the beautiful neighborhood hub that everyone talks about.
            </p>
            <div className="pt-2">
              <Link
                href="/page/breakfast"
                className="btn-primary"
              >
                Learn More About Breakfast
              </Link>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/9608c01f-8318-4c6b-a6dd-3de439d5b1cf?w=960&fit=cover"
              alt="Breakfast at Pistachio Cafe New Haven"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 4. Daily Meals, Always Fresh🌿 */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://pistachiocafe.com/pluto-images/funnel/images/0dc85e5b-c054-4ed5-aa6c-d4e7a3085b24?w=960&fit=cover"
            alt="Daily Meals Always Fresh at Pistachio Cafe"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d] leading-snug">
            Daily Meals, Always Fresh🌿
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed">
            Every single dish at Pistachio Cafe is prepared fresh each day. We don&apos;t believe in shortcuts or day-old food. This commitment to freshness means you get better flavor, better nutrition, and a better dining experience every time you visit. Our menu features hearty options that fill you up without weighing you down. Think fresh coffee, fresh salads, warm sandwiches, and comfort food that reminds you of home.
          </p>
          <div className="pt-2">
            <Link
              href="/menu"
              className="btn-primary"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 5. A Coffee Shop for True Coffee Lovers */}
      <section className="bg-[#fbf9f6] py-16 sm:py-20 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d] leading-snug">
              A Coffee Shop for True Coffee Lovers
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              New Haven coffee lovers swoon over our drinks. Our rich pistachio latte is an absolute must-try item. It’s loved for its nutty flavor and smooth finish. You&apos;ll taste the high quality in every espresso pour. Come visit us to experience pure satisfaction in every single sip.
            </p>
            <div className="pt-2">
              <Link
                href="/menu"
                className="btn-primary"
              >
                Order Coffee Online
              </Link>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/325c8751-b60b-4a03-a582-97b264859e18?w=960&fit=cover"
              alt="Handcrafted Coffee at Pistachio Cafe"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 6. Fresh Brunch, Seven Days a Week🍳 */}
      <section className="relative py-24 sm:py-32 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://pistachiocafe.com/pluto-images/funnel/images/5fb71218-9327-4e56-a060-23b64df6a924?w=1920&fit=cover')`,
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Fresh Brunch, Seven Days a Week🍳
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Brunch isn’t just for weekends, it’s on the menu every single day. Whether you’re starting late, taking a break, or meeting someone for a relaxed meal, our all-day brunch is here when you need it. Stop in for your favorite eggs, fresh breads, or something new from our global-inspired menu. It’s casual, it’s tasty, and it fits right into your day. Dine in with us or order online for easy pickup or delivery—brunch your way, every day.
          </p>
          <div className="pt-4">
            <Link
              href="/menu"
              className="btn-primary text-base px-8 py-3.5"
            >
              Let’s Brunch
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Order From Our Website */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
          Order From Our Website
        </h2>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
          Skip the wait and enjoy your favorites from Pistachio Cafe with just a few clicks. Whether you’re in the mood for coffee, brunch, or dessert, ordering online for pickup or delivery is simple, quick, and always fresh.
        </p>
        <div className="pt-2">
          <Link
            href="/menu"
            className="btn-primary text-base px-8 py-3.5"
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* 8. Straight from Our Kitchen📸 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
            Straight from Our Kitchen📸
          </h2>
          <p className="text-base text-neutral-600 max-w-xl mx-auto">
            Take a peek at the dishes our guests love. What looks good today?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/968e4169-bd5b-4324-a4da-f95b4d4c1bb1?w=600&fit=cover',
              title: 'Artisan Pastry Selection',
            },
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/ae3048e3-d444-4c26-b0f0-cab2ec416401?w=600&fit=cover',
              title: 'Classic Mediterranean Breakfast Plate',
            },
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/10299bb2-e19e-4e11-8e8a-e8a37c542675?w=600&fit=cover',
              title: 'Signature Pistachio Latte',
            },
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/bee42194-44eb-4b51-9089-01285443f9dd?w=600&fit=cover',
              title: 'Damascus Pistachio Baklava',
            },
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/64587d10-78dc-488f-a6d3-5f43aa3f3603?w=600&fit=cover',
              title: 'Authentic Herb Falafel Wrap',
            },
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/dfe26d0f-8856-4cec-a704-7ac4bee8e9a7?w=600&fit=cover',
              title: 'Savory Chicken Shawarma Wrap',
            },
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/56459e40-72a7-4ed3-88e0-98df5be85f3c?w=600&fit=cover',
              title: 'Smoked Turkey & Pesto Sandwich',
            },
            {
              src: 'https://pistachiocafe.com/pluto-images/funnel/images/05d13f2c-8da6-4968-bc0d-02bab6e11952?w=600&fit=cover',
              title: 'Handmade Desserts & Sweet Treats',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative h-60 sm:h-72 rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs sm:text-sm font-semibold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Hosting an Event? We’ve Got Catering🎉 */}
      <section className="bg-[#fbf9f6] py-16 sm:py-20 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d] leading-snug">
              Hosting an Event? We’ve Got Catering🎉
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed">
              Planning a meeting, party, or event? We offer catering services that are simple, flexible, and always fresh. From light brunch boxes to full dessert trays, we can help you build a menu that fits your event. Everything is made fresh daily, and packaged with care to make setup easy on your end. You can count on us to bring the same quality and attention to detail to your gathering as we do in our restaurant. Whether it’s a small meeting or a larger celebration, we can help make it special.
            </p>
            <div className="pt-2">
              <Link
                href="/catering"
                className="btn-primary"
              >
                Inquire Now
              </Link>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://pistachiocafe.com/pluto-images/funnel/images/bcfaf0ae-f4db-40e7-941d-b9365494f783?w=960&fit=cover"
              alt="Catering from Pistachio Cafe New Haven"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 10. What our guests are saying */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
            What our guests are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 leading-relaxed italic">
              &quot;The atmosphere was cute and cozy—definitely a vibe! The food was fresh and delicious. The hash browns were my favorite, second only to the coffee. They offer a great selection of coffee flavors and treats. I highly recommend stopping by!&quot;
            </p>
            <div className="pt-4 border-t border-neutral-100">
              <p className="font-bold text-sm text-[#0d0d0d]">Vanessa M.</p>
              <div className="text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 leading-relaxed italic">
              &quot;A charming spot near downtown New Haven with a unique design and an impressive selection of pistachio-inspired dishes. I absolutely love the atmosphere, and the staff is friendly and welcoming. Their lattes—beautifully topped with rose petals and pistachios—are a delightful touch. Definitely a must-visit!&quot;
            </p>
            <div className="pt-4 border-t border-neutral-100">
              <p className="font-bold text-sm text-[#0d0d0d]">Darren J.</p>
              <div className="text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4 flex flex-col justify-between">
            <p className="text-sm text-neutral-700 leading-relaxed italic">
              &quot;I’ve been a fan of Pistachio Cafe for a few years now and always enjoy their coffee and matcha. Whenever I need a change of scenery, it’s the perfect spot to relax with a book or get some work done. The staff is friendly, and the atmosphere is incredibly cozy.&quot;
            </p>
            <div className="pt-4 border-t border-neutral-100">
              <p className="font-bold text-sm text-[#0d0d0d]">Jaden M.</p>
              <div className="text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Featuring */}
      <section className="bg-white py-12 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#0d0d0d] text-center mb-8">
            Featuring
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Catering', 'Delivery', 'Takeout', 'Dine In', 'Reservations', 'Outdoor Seating'].map((feature) => (
              <div
                key={feature}
                className="p-4 rounded-2xl bg-[#fbf9f6] border border-neutral-200 font-semibold text-sm text-neutral-800"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Pistachio Cafe Rewards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
          Pistachio Cafe Rewards
        </h2>
        <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
          Join our rewards program, earn points every time you order online and redeem your points for free food!
        </p>
        <div className="pt-2">
          <Link
            href="/menu"
            className="btn-primary text-base px-8 py-3.5"
          >
            Join Pistachio Cafe Rewards
          </Link>
        </div>
      </section>

      {/* 13. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d] text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="group bg-[#fbf9f6] p-6 rounded-2xl border border-neutral-200 open:bg-white transition-all">
            <summary className="font-semibold text-base text-[#0d0d0d] cursor-pointer list-none flex justify-between items-center">
              <span>What are you known for?</span>
              <ChevronDown className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-neutral-700 mt-4 leading-relaxed">
              We are known for our handcrafted Pistachio Latte, artisanal Syrian baklava, 100% Halal Mediterranean breakfast plates, and whimsical vintage atmosphere in New Haven.
            </p>
          </details>

          <details className="group bg-[#fbf9f6] p-6 rounded-2xl border border-neutral-200 open:bg-white transition-all">
            <summary className="font-semibold text-base text-[#0d0d0d] cursor-pointer list-none flex justify-between items-center">
              <span>What meals do you serve?</span>
              <ChevronDown className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-neutral-700 mt-4 leading-relaxed">
              We serve Breakfast, Brunch, Lunch, and Dinner
            </p>
          </details>

          <details className="group bg-[#fbf9f6] p-6 rounded-2xl border border-neutral-200 open:bg-white transition-all">
            <summary className="font-semibold text-base text-[#0d0d0d] cursor-pointer list-none flex justify-between items-center">
              <span>Do you offer delivery or takeout?</span>
              <ChevronDown className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-neutral-700 mt-4 leading-relaxed">
              Yes, we offer Delivery and Takeout
            </p>
          </details>

          <details className="group bg-[#fbf9f6] p-6 rounded-2xl border border-neutral-200 open:bg-white transition-all">
            <summary className="font-semibold text-base text-[#0d0d0d] cursor-pointer list-none flex justify-between items-center">
              <span>What areas do you serve?</span>
              <ChevronDown className="w-5 h-5 text-neutral-500 group-open:rotate-180 transition-transform" />
            </summary>
            <p className="text-sm text-neutral-700 mt-4 leading-relaxed">
              We serve the following areas: New Haven, West Haven, Whitneyville, Beaver Hills, West River, Newhallville, Downtown, Spring Glen, Dixwell, Edgewood, Woodbridge, Prospect Hill, Amity, West Rock, Hamden, East Haven, Wooster Square/Mill River, Augerville, Hill, and Orange.
            </p>
          </details>
        </div>
      </section>

      {/* 14. Our locations */}
      <section className="bg-[#fbf9f6] py-16 sm:py-20 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">
              Our locations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Whalley Ave */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-md flex flex-col justify-between">
              <div className="relative h-64 w-full">
                <Image
                  src="https://pistachiocafe.com/pluto-images/funnel/images/a288de7c-58c8-4fc6-9194-7184ed49085f?w=960&fit=cover"
                  alt="Pistachio Cafe New Haven CT 911 Whalley Ave"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#0d0d0d]">New Haven, CT</h3>
                <p className="text-sm text-neutral-600">911 Whalley Ave, New Haven, CT 06515</p>
                <div className="text-xs text-neutral-700 space-y-1 bg-[#fbf9f6] p-4 rounded-xl">
                  <p><strong>Mon – Thu:</strong> 7:00 AM – 7:30 PM</p>
                  <p><strong>Fri – Sun:</strong> 7:00 AM – 9:30 PM</p>
                </div>
                <div className="pt-2 flex gap-3">
                  <Link
                    href="/menu"
                    className="flex-1 text-center py-3 rounded-full bg-[#fc574a] text-white font-semibold text-sm hover:bg-[#e04437] transition-all"
                  >
                    Order online
                  </Link>
                  <Link
                    href="/911-whalley-ave"
                    className="flex-1 text-center py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-sm transition-colors"
                  >
                    View location
                  </Link>
                </div>
              </div>
            </div>

            {/* Chapel St */}
            <div className="bg-white rounded-3xl overflow-hidden border border-neutral-200 shadow-md flex flex-col justify-between">
              <div className="relative h-64 w-full">
                <Image
                  src="https://pistachiocafe.com/pluto-images/funnel/images/89bc8855-d126-4b5e-8e81-0189364d5b5d?w=960&fit=cover"
                  alt="Pistachio Cafe New Haven CT 1245 Chapel St"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#0d0d0d]">New Haven, CT</h3>
                <p className="text-sm text-neutral-600">1245 Chapel St, New Haven, CT 06511</p>
                <div className="text-xs text-neutral-700 space-y-1 bg-[#fbf9f6] p-4 rounded-xl">
                  <p><strong>Sun – Thu:</strong> 8:30 AM – 8:30 PM</p>
                  <p><strong>Fri – Sat:</strong> 8:30 AM – 10:30 PM</p>
                </div>
                <div className="pt-2 flex gap-3">
                  <Link
                    href="/menu/1245-chapel-st"
                    className="flex-1 text-center py-3 rounded-full bg-[#fc574a] text-white font-semibold text-sm hover:bg-[#e04437] transition-all"
                  >
                    Order online
                  </Link>
                  <Link
                    href="/1245-chapel-st"
                    className="flex-1 text-center py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-sm transition-colors"
                  >
                    View location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
