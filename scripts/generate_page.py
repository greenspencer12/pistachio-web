import sys

sys.stdout.reconfigure(encoding='utf-8')

page_tsx = '''\'use client\';

import React, { useState } from \'react\';
import Link from \'next/link\';
import { FaqJsonLd } from \'@/components/JsonLd\';

export default function HomePage() {
  const [activeLocationTab, setActiveLocationTab] = useState<0 | 1>(0);

  return (
    <>
      <FaqJsonLd />

      {/* SECTION 0: HERO */}
      <header className="relative w-full overflow-hidden bg-black">
        <div className="relative isolate min-h-[500px] md:min-h-[640px] flex flex-col justify-end">
          {/* Background Poster & Video */}
          <div className="absolute inset-0 overflow-hidden isolate pointer-events-none">
            <img
              alt="Pistachio Cafe Hero"
              className="absolute inset-0 h-full w-full object-cover"
              src="https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Hero Content */}
          <div className="max-w-section-content mx-auto w-full px-4 md:px-8 py-12 md:py-16 relative z-10">
            <div className="flex flex-col gap-2 md:gap-3 max-w-3xl">
              <h1 className="text-[clamp(0.875rem,3.5vw,1.75rem)] font-semibold text-white leading-[1.2] tracking-[-0.5px] overflow-hidden text-ellipsis whitespace-nowrap inline-block max-w-full m-0">
                Best Cafe in New Haven
              </h1>
              <span className="font-mercury-ui-primary text-[clamp(2rem,5.2vw,3.5rem)] font-semibold text-white leading-[1.2] normal-case">
                A Harmonious Blend Of Café, Restaurant, And Dessert Bar, Where Indulgence Knows No Bounds.
              </span>
            </div>
            <div className="mt-6 flex">
              <Link
                className="group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-6 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary"
                href="/menu?dialogState=orderDetails"
              >
                Order online
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1: FEATURED */}
      <div className="max-w-section-content py-section-vertical-mobile md:py-content-vertical-desktop mx-auto flex flex-col px-4 md:px-8">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl min-[1920px]:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Featured
            </h2>
            <Link
              className="group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-10 py-2 px-3 gap-x-2 no-underline border-mercury-ui-button-secondary border shadow-none bg-mercury-ui-button-secondary hover:bg-mercury-ui-tertiary text-mercury-ui-button-secondary"
              href="/menu"
            >
              View menu
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
            {/* 1. The Classic */}
            <Link
              href="/menu?item=the-classic-Sig0&matchItemName=The%20Classic"
              className="group flex flex-col gap-2 rounded-mercury-ui-control border border-mercury-ui-divider/40 p-3 hover:shadow-md transition-shadow no-underline"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-mercury-ui-control bg-mercury-ui-tertiary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/9608c01f-8318-4c6b-a6dd-3de439d5b1cf?w=320&h=320&fit=cover"
                  alt="The Classic"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-mercury-ui-primary text-sm font-medium text-mercury-ui-text-primary text-center">
                The Classic
              </span>
            </Link>

            {/* 2. Tuna Melt Sandwich */}
            <Link
              href="/menu?item=tuna-melt-sandwich-Oa59&matchItemName=Tuna%20Melt%20Sandwich"
              className="group flex flex-col gap-2 rounded-mercury-ui-control border border-mercury-ui-divider/40 p-3 hover:shadow-md transition-shadow no-underline"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-mercury-ui-control bg-mercury-ui-tertiary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/0dc85e5b-c054-4ed5-aa6c-d4e7a3085b24?w=320&h=320&fit=cover"
                  alt="Tuna Melt Sandwich"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-mercury-ui-primary text-sm font-medium text-mercury-ui-text-primary text-center">
                Tuna Melt Sandwich
              </span>
            </Link>

            {/* 3. Falafel Wrap */}
            <Link
              href="/menu?item=falafel-wrap-XB0M&matchItemName=Falafel%20Wrap"
              className="group flex flex-col gap-2 rounded-mercury-ui-control border border-mercury-ui-divider/40 p-3 hover:shadow-md transition-shadow no-underline"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-mercury-ui-control bg-mercury-ui-tertiary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/325c8751-b60b-4a03-a582-97b264859e18?w=320&h=320&fit=cover"
                  alt="Falafel Wrap"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-mercury-ui-primary text-sm font-medium text-mercury-ui-text-primary text-center">
                Falafel Wrap
              </span>
            </Link>

            {/* 4. Chicken Shawarma Wrap */}
            <Link
              href="/menu?item=chicken-shawarma-wrap-KENr&matchItemName=Chicken%20Shawarma%20Wrap"
              className="group flex flex-col gap-2 rounded-mercury-ui-control border border-mercury-ui-divider/40 p-3 hover:shadow-md transition-shadow no-underline"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-mercury-ui-control bg-mercury-ui-tertiary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/5fb71218-9327-4e56-a060-23b64df6a924?w=320&h=320&fit=cover"
                  alt="Chicken Shawarma Wrap"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-mercury-ui-primary text-sm font-medium text-mercury-ui-text-primary text-center">
                Chicken Shawarma Wrap
              </span>
            </Link>

            {/* 5. Turkey Pesto Sandwich */}
            <Link
              href="/menu?item=turkey-pesto-sandwich-Y2o2&matchItemName=Turkey%20Pesto%20Sandwich"
              className="group flex flex-col gap-2 rounded-mercury-ui-control border border-mercury-ui-divider/40 p-3 hover:shadow-md transition-shadow no-underline"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-mercury-ui-control bg-mercury-ui-tertiary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/968e4169-bd5b-4324-a4da-f95b4d4c1bb1?w=320&h=320&fit=cover"
                  alt="Turkey Pesto Sandwich"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-mercury-ui-primary text-sm font-medium text-mercury-ui-text-primary text-center">
                Turkey Pesto Sandwich
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* SECTION 2: WELCOME TO PISTACHIO CAFE */}
      <section className="w-full py-section-vertical-mobile md:py-16">
        <div className="max-w-section-content mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary">
              Welcome to Pistachio Cafe!
            </h2>
            <p className="mt-4 text-mercury-ui-text-secondary text-base leading-relaxed">
              Pistachio Cafe brings you the best cafe experience in New Haven, Connecticut. We serve fresh coffee, amazing food, and sweet treats that make every visit special. Our two locations on Whalley Avenue and Chapel Street are ready to welcome you with open arms. Our team works hard every day to create meals that are fresh, tasty, and made with care. We believe good food brings people together, From your first sip of coffee to your last bite of dessert, we want you to feel at home with us.
            </p>
          </div>

          {/* 9-Image Authentic Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              \'ae3048e3-d444-4c26-b0f0-cab2ec416401\',
              \'05d13f2c-8da6-4968-bc0d-02bab6e11952\',
              \'10299bb2-e19e-4e11-8e8a-e8a37c542675\',
              \'bee42194-44eb-4b51-9089-01285443f9dd\',
              \'64587d10-78dc-488f-a6d3-5f43aa3f3603\',
              \'dfe26d0f-8856-4cec-a704-7ac4bee8e9a7\',
              \'bcfaf0ae-f4db-40e7-941d-b9365494f783\',
              \'c7fbc300-0885-4a7d-a656-3092ba8ee971\',
              \'de6aa2c7-fc62-440d-aa47-7aa11512a750\',
            ].map((uuid, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-mercury-ui-control">
                <img
                  src={`https://pistachiocafe.com/pluto-images/funnel/images/${uuid}?w=960&h=960&format=auto&fit=cover`}
                  alt={`Pistachio Cafe interior and food ${i + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: YOUR NEW FAVORITE BREAKFAST SPOT */}
      <div className="w-full bg-[#F7F1E3] content-section-solid-background py-12 md:py-20">
        <div className="max-w-section-content mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Your New Favorite Breakfast Spot in New Haven
            </h2>
            <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
              You&apos;ll find your new favorite breakfast spot in New Haven right here. It&apos;s a Westville café that serves unique morning dishes all week long. Customers rave about our warm Syrian plates and rich pistachio lattes. You&apos;ll sink into a velvet couch and enjoy a gorgeous community space. We bake our fresh baklava daily so it&apos;s always pure comfort. Don&apos;t skip the day&apos;s first meal. Come experience the beautiful neighborhood hub that everyone talks about.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-mercury-ui-control overflow-hidden shadow-sm">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/8c9d6b03-6716-4ada-8001-b73349c4dcc0?w=768&h=768&fit=cover"
              alt="Breakfast at Pistachio Cafe"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SECTION 4: DAILY MEALS, ALWAYS FRESH */}
      <div className="w-full bg-white content-section-solid-background py-12 md:py-20">
        <div className="max-w-section-content mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-square md:aspect-[4/3] rounded-mercury-ui-control overflow-hidden shadow-sm">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/f34b457e-464f-410d-be51-6085dada3cc5?w=768&h=768&fit=cover"
              alt="Daily Meals Always Fresh"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-4">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Daily Meals, Always Fresh🌿
            </h2>
            <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
              Every single dish at Pistachio Cafe is prepared fresh each day. We don&apos;t believe in shortcuts or day-old food. This commitment to freshness means you get better flavor, better nutrition, and a better dining experience every time you visit. Our menu features hearty options that fill you up without weighing you down. Think fresh coffee, fresh salads, warm sandwiches, and comfort food that reminds you of home.
            </p>
            <div className="pt-2">
              <Link
                className="inline-flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-6 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary"
                href="/menu"
              >
                Explore Our Menu
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: A COFFEE SHOP FOR TRUE COFFEE LOVERS */}
      <div className="w-full bg-[#F7F1E3] content-section-solid-background py-12 md:py-20">
        <div className="max-w-section-content mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              A Coffee Shop for True Coffee Lovers
            </h2>
            <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
              New Haven coffee lovers swoon over our drinks. Our rich pistachio latte is an absolute must-try item. It’s loved for its nutty flavor and smooth finish. You&apos;ll taste the high quality in every espresso pour. Come visit our coffee shop in New Haven and grab a seat. Pistachio Cafe is the best place to recharge.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-mercury-ui-control overflow-hidden shadow-sm">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/24b6f032-9676-488b-bd1e-75a3fae883b7?w=768&h=768&fit=cover"
              alt="Coffee Lovers"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SECTION 6: FRESH BRUNCH, SEVEN DAYS A WEEK */}
      <div className="w-full bg-white content-section-solid-background py-12 md:py-20">
        <div className="max-w-section-content mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-square md:aspect-[4/3] rounded-mercury-ui-control overflow-hidden shadow-sm">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/56459e40-72a7-4ed3-88e0-98df5be85f3c?w=768&h=768&fit=cover"
              alt="Fresh Brunch"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-4">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Fresh Brunch, Seven Days a Week🍳
            </h2>
            <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
              Brunch isn’t just for weekends, it’s on the menu every single day. Whether you’re starting late, taking a break, or meeting someone for a relaxed meal, our all-day brunch is here when you need it. Stop in for your favorite breakfast classics, Syrian dishes, and handcrafted drinks. Brunch is always better when it fits your schedule.
            </p>
            <div className="pt-2">
              <Link
                className="inline-flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-6 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary"
                href="/page/brunch"
              >
                Let’s Brunch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 7: ORDER FROM OUR WEBSITE */}
      <div className="relative w-full overflow-hidden">
        <div className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          <img
            src="https://pistachiocafe.com/pluto-images/funnel/images/1441dcc1-a124-41b6-9dc5-e4db5a362a37?w=1920&fit=cover"
            alt="Order from our website"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center text-white flex flex-col items-center gap-4 py-16">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-white m-0">
              Order From Our Website
            </h2>
            <p className="text-stone-200 text-base md:text-lg leading-relaxed max-w-xl">
              Skip the wait and enjoy your favorites from Pistachio Cafe with just a few clicks. Whether you’re in the mood for coffee, brunch, or dessert, ordering online for pickup or delivery is simple, quick, and always fresh.
            </p>
            <div className="pt-2">
              <Link
                className="inline-flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-8 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary font-medium"
                href="/menu"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 8: STRAIGHT FROM OUR KITCHEN */}
      <section className="w-full py-section-vertical-mobile md:py-16">
        <div className="max-w-section-content mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Straight from Our Kitchen📸
            </h2>
            <p className="mt-2 text-mercury-ui-text-secondary text-base">
              Take a peek at the dishes our guests love. What looks good today?
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              \'0de9c7b2-e552-4641-bc14-0cc42db5836f\',
              \'82ccdb21-fc8f-4f6b-b15d-b26845d3ae66\',
              \'4ddc4de5-41bb-40f0-8e6b-38d33782e062\',
              \'bd206906-9044-4428-b205-5949ea281150\',
              \'8034e161-faf6-4bba-a78f-ba1999861cab\',
              \'f557f701-e1ce-4322-b522-632975a3f076\',
              \'2dd1a454-9234-4849-b6e5-24839bee70ac\',
              \'c5dd51e3-7533-4ac7-a56c-9d82ed7dc202\',
              \'fd54b3e4-4fe1-46fb-91eb-9eb6b81f1809\',
              \'2be6b657-a57c-4ae7-9112-faef8d5514e2\',
              \'82d60653-64ba-48bb-878a-4264eaed2ed3\',
              \'0d0790b6-c275-4bed-9732-22bbfefe886e\',
            ].map((uuid, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-mercury-ui-control shadow-sm">
                <img
                  src={`https://pistachiocafe.com/pluto-images/funnel/images/${uuid}?w=960&h=960&format=auto&fit=cover`}
                  alt={`Kitchen dish ${i + 1}`}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: HOSTING AN EVENT? WE'VE GOT CATERING */}
      <div className="w-full bg-[#F7F1E3] content-section-solid-background py-12 md:py-20">
        <div className="max-w-section-content mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Hosting an Event? We’ve Got Catering🎉
            </h2>
            <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
              Planning a meeting, party, or event? We offer catering services that are simple, flexible, and always fresh. From light brunch boxes to full dessert trays, we can help you build a menu that fits your event. Every order is prepared with care and made ready when you need it.
            </p>
            <div className="pt-2">
              <Link
                className="inline-flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-6 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary"
                href="/catering"
              >
                Inquire Now
              </Link>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-mercury-ui-control overflow-hidden shadow-sm">
            <img
              src="https://pistachiocafe.com/pluto-images/funnel/images/75467560-221a-428e-814f-e65025515f44?w=768&h=768&fit=cover"
              alt="Catering at Pistachio Cafe"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* SECTION 10: REVIEWS */}
      <div className="w-full bg-mercury-ui-secondary py-12 md:py-16">
        <div className="max-w-section-content mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex flex-col justify-between gap-6 overflow-hidden p-6 md:p-8 bg-mercury-ui-primary rounded-mercury-ui-md shadow-short">
              <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
                The atmosphere was cute and cozy—definitely a vibe! The food was fresh and delicious. The hash browns were my favorite, second only to the coffee. They offer a great selection of coffee flavors and treats. I highly recommend stopping by!
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex text-amber-400 gap-1 text-sm">
                  ★★★★★
                </div>
                <span className="font-mercury-ui-primary font-semibold text-mercury-ui-text-primary text-sm">
                  Vanessa M.
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between gap-6 overflow-hidden p-6 md:p-8 bg-mercury-ui-primary rounded-mercury-ui-md shadow-short">
              <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
                A charming spot near downtown New Haven with a unique design and an impressive selection of pistachio-inspired dishes. I absolutely love the atmosphere, and the staff is friendly and welcoming. Their lattes—beautifully topped with rose petals and pistachios—are a delightful touch. Definitely a must-visit!
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex text-amber-400 gap-1 text-sm">
                  ★★★★★
                </div>
                <span className="font-mercury-ui-primary font-semibold text-mercury-ui-text-primary text-sm">
                  Darren J.
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-between gap-6 overflow-hidden p-6 md:p-8 bg-mercury-ui-primary rounded-mercury-ui-md shadow-short">
              <p className="text-mercury-ui-text-secondary text-base leading-relaxed m-0">
                I’ve been a fan of Pistachio Cafe for a few years now and always enjoy their coffee and matcha. Whenever I need a change of scenery, it’s the perfect spot to relax with a book or get some work done. The staff is friendly, and the atmosphere is incredibly cozy.
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex text-amber-400 gap-1 text-sm">
                  ★★★★★
                </div>
                <span className="font-mercury-ui-primary font-semibold text-mercury-ui-text-primary text-sm">
                  Jaden M.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11: FEATURING */}
      <div className="max-w-section-content py-section-vertical-mobile md:py-content-vertical-desktop mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col self-stretch text-balance text-center md:self-center md:max-w-2xl">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl min-[1920px]:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Featuring
            </h2>
          </div>
          <div className="grid justify-items-center gap-6 self-center md:flex md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-10 grid-cols-2">
            {[
              {
                title: \'Catering\',
                icon: (
                  <svg className="w-6 h-6 text-mercury-ui-text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect height="11" rx="1.5" width="14" x="5" y="8" />
                    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
                  </svg>
                ),
              },
              {
                title: \'Delivery\',
                icon: (
                  <svg className="w-6 h-6 text-mercury-ui-text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                  </svg>
                ),
              },
              {
                title: \'Takeout\',
                icon: (
                  <svg className="w-6 h-6 text-mercury-ui-text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
                  </svg>
                ),
              },
              {
                title: \'Dine In\',
                icon: (
                  <svg className="w-6 h-6 text-mercury-ui-text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3" />
                  </svg>
                ),
              },
              {
                title: \'Reservations\',
                icon: (
                  <svg className="w-6 h-6 text-mercury-ui-text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
              },
              {
                title: \'Outdoor Seating\',
                icon: (
                  <svg className="w-6 h-6 text-mercury-ui-text-secondary" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="shrink-0 grow-0 flex flex-col items-center gap-2 text-center w-[120px] md:w-[150px]">
                <div className="p-3 rounded-full bg-mercury-ui-secondary flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-mercury-ui-title-sm font-medium text-mercury-ui-text-primary whitespace-nowrap m-0">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 12: PISTACHIO CAFE REWARDS */}
      <div className="relative w-full overflow-hidden">
        <div className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          <img
            src="https://pistachiocafe.com/pluto-images/funnel/images/cf553346-2c86-4865-aae8-d78591c76ec6?w=1920&fit=cover"
            alt="Pistachio Cafe Rewards"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 text-center text-white flex flex-col items-center gap-4 py-16">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl font-semibold text-white m-0">
              Pistachio Cafe Rewards
            </h2>
            <p className="text-stone-200 text-base md:text-lg leading-relaxed max-w-xl">
              Join our rewards program, earn points every time you order online and redeem your points for free food!
            </p>
            <div className="pt-2">
              <Link
                className="inline-flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-8 no-underline bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary font-medium"
                href="/login"
              >
                Join Piitachio Cafe Rewards
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 13: FREQUENTLY ASKED QUESTIONS */}
      <div className="max-w-section-content py-section-vertical-mobile md:py-content-vertical-desktop mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-6">
          <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl min-[1920px]:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-6 divide-y divide-mercury-ui-divider/40">
            {/* Q1 */}
            <div className="pt-4 flex flex-col gap-2">
              <h3 className="font-mercury-ui-primary text-lg font-semibold text-mercury-ui-text-primary m-0">
                What are you known for?
              </h3>
              <p className="text-mercury-ui-text-secondary text-sm md:text-base leading-relaxed m-0">
                We are known for{' '}
                {[
                  \'Macarons\', \'Hot Chocolate\', \'Teas\', \'Deli Sandwiches\', \'Shawarma\', \'Cappuccino\', \'Salads\',
                  \'Red Velvet Cake\', \'Breakfast\', \'Fries\', \'Baba Ghanoush\', \'Smoothie\', \'Cakes\', \'London Fog\',
                  \'Eclair\', \'Smoothies\', \'Labneh\', \'Coffee\', \'Macaron\', \'Drip Coffee\', \'Almond Croissant\',
                  \'Dessert\', \'Sandwiches\', \'Mezze Platter\', \'Milkshake\', \'Middle Eastern Food\', \'Chicken Shawarma\',
                  \'Lattes\', \'Cheese Danish\', \'Baklava\', \'Pie\', \'Muffin\', \'Eclairs\', \'Pastries\', \'Halal Food\',
                  \'Ice Cream\', \'Omelette\', \'Falafel\', \'Lunch\', \'Dinner\', \'Takeout\', \'Delivery\'
                ].map((tag, i, arr) => (
                  <span key={i}>
                    <Link href="/menu" className="text-mercury-ui-text-secondary hover:underline">
                      {tag}
                    </Link>
                    {i < arr.length - 1 ? \' , \' : \'\'}
                  </span>
                ))}
              </p>
            </div>

            {/* Q2 */}
            <div className="pt-4 flex flex-col gap-2">
              <h3 className="font-mercury-ui-primary text-lg font-semibold text-mercury-ui-text-primary m-0">
                What meals do you serve?
              </h3>
              <p className="text-mercury-ui-text-secondary text-sm md:text-base leading-relaxed m-0">
                We serve{' '}
                {['Breakfast', 'Brunch', 'Lunch', 'and Dinner'].map((meal, i, arr) => (
                  <span key={i}>
                    <Link href="/menu" className="text-mercury-ui-text-secondary hover:underline">
                      {meal}
                    </Link>
                    {i < arr.length - 1 ? \' , \' : \'\'}
                  </span>
                ))}
              </p>
            </div>

            {/* Q3 */}
            <div className="pt-4 flex flex-col gap-2">
              <h3 className="font-mercury-ui-primary text-lg font-semibold text-mercury-ui-text-primary m-0">
                Do you offer delivery or takeout?
              </h3>
              <p className="text-mercury-ui-text-secondary text-sm md:text-base leading-relaxed m-0">
                Yes, we offer{' '}
                <Link href="/menu" className="text-mercury-ui-text-secondary hover:underline">Takeout</Link>
                {' and '}
                <Link href="/menu" className="text-mercury-ui-text-secondary hover:underline">Delivery</Link>
              </p>
            </div>

            {/* Q4 */}
            <div className="pt-4 flex flex-col gap-2">
              <h3 className="font-mercury-ui-primary text-lg font-semibold text-mercury-ui-text-primary m-0">
                What areas do you serve?
              </h3>
              <p className="text-mercury-ui-text-secondary text-sm md:text-base leading-relaxed m-0">
                We serve the following areas:{' '}
                {[
                  \'New Haven\', \'West Haven\', \'Whitneyville\', \'Beaver Hills\', \'West River\', \'Newhallville\',
                  \'Downtown\', \'Spring Glen\', \'Dixwell\', \'Edgewood\', \'Woodbridge\', \'Prospect Hill\', \'Amity\',
                  \'West Rock\', \'Hamden\', \'East Haven\', \'Wooster Square/Mill River\', \'Augerville\', \'Hill\', \'Orange\'
                ].map((area, i, arr) => (
                  <span key={i}>
                    <span className="text-mercury-ui-text-secondary">
                      {area}
                    </span>
                    {i < arr.length - 1 ? \' , \' : \'\'}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 14: OUR LOCATIONS */}
      <div className="my-section-vertical-mobile md:my-content-vertical-desktop">
        <div className="max-w-section-content mx-auto flex flex-col gap-6 px-4 md:px-8">
          <div className="w-full flex items-center justify-between">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl min-[1920px]:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Our locations
            </h2>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveLocationTab(0)}
                className={`location-pill px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeLocationTab === 0
                    ? \'bg-mercury-ui-button-primary text-white\'
                    : \'bg-mercury-ui-secondary text-mercury-ui-text-secondary hover:bg-mercury-ui-tertiary\'
                }`}
              >
                911 Whalley Ave
              </button>
              <button
                type="button"
                onClick={() => setActiveLocationTab(1)}
                className={`location-pill px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeLocationTab === 1
                    ? \'bg-mercury-ui-button-primary text-white\'
                    : \'bg-mercury-ui-secondary text-mercury-ui-text-secondary hover:bg-mercury-ui-tertiary\'
                }`}
              >
                1245 Chapel St
              </button>
            </div>
          </div>

          {/* Location 1: 911 Whalley Ave */}
          {activeLocationTab === 0 && (
            <div className="rounded-mercury-ui-control border border-mercury-ui-divider/40 p-6 md:p-8 bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div>
                  <Link href="/911-whalley-ave" className="text-xl font-bold text-mercury-ui-text-primary no-underline hover:underline">
                    Pistachio Cafe
                  </Link>
                  <p className="text-sm text-mercury-ui-text-secondary m-0">New Haven, CT</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-mercury-ui-text-secondary m-0">Address</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=911%20Whalley%20Ave%2C%20New%20Haven%2C%20CT%2006515%2C%20USA&query_place_id=ChIJ3WBON5DZ54kRLT0rDMisS9I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mercury-ui-text-primary hover:underline"
                  >
                    911 Whalley Ave, New Haven, CT 06515
                  </a>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-mercury-ui-text-secondary m-0">Contact</h4>
                  <div className="flex flex-col text-sm text-mercury-ui-text-primary gap-1">
                    <a href="tel:+12038004262" className="hover:underline">Call (203) 800-4262</a>
                    <a href="mailto:info@pistachionhv.com" className="hover:underline">Email info@pistachionhv.com</a>
                  </div>
                </div>

                <div className="text-sm text-mercury-ui-text-primary">
                  <span className="font-medium">Today: </span>
                  <span className="text-emerald-600 font-semibold">7:00 AM - 6:00 PM</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center rounded-mercury-ui-control text-sm font-medium py-2.5 px-5 bg-mercury-ui-button-primary text-white no-underline hover:bg-mercury-ui-button-primary/90 transition-colors"
                  >
                    Order online
                  </Link>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=911%20Whalley%20Ave&destination_place_id=ChIJ3WBON5DZ54kRLT0rDMisS9I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-mercury-ui-control text-sm font-medium py-2.5 px-5 border border-mercury-ui-button-secondary bg-mercury-ui-button-secondary text-mercury-ui-button-secondary no-underline hover:bg-mercury-ui-tertiary transition-colors"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-mercury-ui-control overflow-hidden border border-mercury-ui-divider/40">
                <img
                  src="https://pistachiocafe.com/static-maps/map.jpg?lat=41.32737909999999&lon=-72.96020349999999&styleKey=202504&width=600&height=400&zoomLevel=15"
                  alt="Map of 911 Whalley Ave location"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Location 2: 1245 Chapel St */}
          {activeLocationTab === 1 && (
            <div className="rounded-mercury-ui-control border border-mercury-ui-divider/40 p-6 md:p-8 bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div>
                  <Link href="/1245-chapel-st" className="text-xl font-bold text-mercury-ui-text-primary no-underline hover:underline">
                    Pistachio Cafe
                  </Link>
                  <p className="text-sm text-mercury-ui-text-secondary m-0">New Haven, CT</p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-mercury-ui-text-secondary m-0">Address</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1245%20Chapel%20St%2C%20New%20Haven%2C%20CT%2006511%2C%20USA&query_place_id=ChIJBdtHC6nZ54kRkk2pJiWGxeQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mercury-ui-text-primary hover:underline"
                  >
                    1245 Chapel St, New Haven, CT 06511
                  </a>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-mercury-ui-text-secondary m-0">Contact</h4>
                  <div className="flex flex-col text-sm text-mercury-ui-text-primary gap-1">
                    <a href="tel:+12038004533" className="hover:underline">Call (203) 800-4533</a>
                    <a href="mailto:info@pistachionhv.com" className="hover:underline">Email info@pistachionhv.com</a>
                  </div>
                </div>

                <div className="text-sm text-mercury-ui-text-primary">
                  <span className="font-medium">Today: </span>
                  <span className="text-emerald-600 font-semibold">7:00 AM - 6:00 PM</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <Link
                    href="/menu/1245-chapel-st"
                    className="inline-flex items-center justify-center rounded-mercury-ui-control text-sm font-medium py-2.5 px-5 bg-mercury-ui-button-primary text-white no-underline hover:bg-mercury-ui-button-primary/90 transition-colors"
                  >
                    Order online
                  </Link>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=1245%20Chapel%20St&destination_place_id=ChIJBdtHC6nZ54kRkk2pJiWGxeQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-mercury-ui-control text-sm font-medium py-2.5 px-5 border border-mercury-ui-button-secondary bg-mercury-ui-button-secondary text-mercury-ui-button-secondary no-underline hover:bg-mercury-ui-tertiary transition-colors"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-mercury-ui-control overflow-hidden border border-mercury-ui-divider/40">
                <img
                  src="https://pistachiocafe.com/static-maps/map.jpg?lat=41.3095564&lon=-72.93581379999999&styleKey=202504&width=600&height=400&zoomLevel=15"
                  alt="Map of 1245 Chapel St location"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE BOTTOM FLOATING BAR (Hidden on md+) */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-30 bg-mercury-ui-primary/80 backdrop-blur-2xl shadow-lg border-t border-mercury-ui-divider/40 p-2">
        <div className="max-w-section-content mx-auto flex items-center gap-2">
          <Link
            className="group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-12 py-3 px-4 flex-1 bg-mercury-ui-button-primary hover:bg-mercury-ui-button-primary/90 text-mercury-ui-brand-accessible-over-primary no-underline text-center"
            href="/menu?dialogState=orderDetails"
          >
            Order online
          </Link>
        </div>
      </div>
    </>
  );
}
'''

with open('app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_tsx)

print("Regenerated app/page.tsx with 100% exact Pluto image UUIDs!")
