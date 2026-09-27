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
            <div className="flex items-center gap-8">
              <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl min-[1920px]:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
                Featured
              </h2>
            </div>
            <Link
              className="group relative flex items-center justify-center rounded-mercury-ui-control text-mercury-ui-button-base font-mercury-ui-secondary transition-all ease-in-out min-h-10 py-2 px-3 gap-x-2 no-underline border-mercury-ui-button-secondary border shadow-none bg-mercury-ui-button-secondary hover:bg-mercury-ui-tertiary text-mercury-ui-button-secondary"
              href="/menu"
            >
              <span className="flex flex-row items-center gap-x-[4px] whitespace-nowrap">
                View menu
              </span>
              <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 20 20" width="16">
                <path d="M7.5 5L12.5 10L7.5 15" />
              </svg>
            </Link>
          </div>

          {/* Horizontal Rail Scroller */}
          <div className="featured-rail-scroller w-full overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth touch-auto snap-x snap-mandatory px-0 md:scroll-ps-0 scroll-ps-6 xl:w-full flex gap-4 md:gap-6 py-2">
            {/* 1. The Classic */}
            <Link
              href="/menu?item=the-classic-Sig0&matchItemName=The%20Classic"
              className="flex flex-col gap-2 md:gap-3 w-[150px] md:w-60 shrink-0 snap-start snap-always no-underline group"
            >
              <div className="relative h-[150px] md:h-60 rounded-mercury-ui-md overflow-hidden bg-mercury-ui-secondary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/9608c01f-8318-4c6b-a6dd-3de439d5b1cf?w=320&h=320&fit=cover"
                  alt="The Classic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-mercury-ui-control bg-mercury-ui-primary shadow-mercury-ui-control">
                  <svg className="h-5 w-5 text-mercury-ui-text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                    <path d="M10 5v10M5 10h10" />
                  </svg>
                </div>
              </div>
              <p className="font-mercury-ui-secondary text-mercury-ui-text-sm md:text-mercury-ui-text-base text-mercury-ui-text-primary m-0 line-clamp-2">
                The Classic
              </p>
            </Link>

            {/* 2. Tuna Melt Sandwich */}
            <Link
              href="/menu?item=tuna-melt-sandwich-Oa59&matchItemName=Tuna%20Melt%20Sandwich"
              className="flex flex-col gap-2 md:gap-3 w-[150px] md:w-60 shrink-0 snap-start snap-always no-underline group"
            >
              <div className="relative h-[150px] md:h-60 rounded-mercury-ui-md overflow-hidden bg-mercury-ui-secondary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/0dc85e5b-c054-4ed5-aa6c-d4e7a3085b24?w=320&h=320&fit=cover"
                  alt="Tuna Melt Sandwich"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-mercury-ui-control bg-mercury-ui-primary shadow-mercury-ui-control">
                  <svg className="h-5 w-5 text-mercury-ui-text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                    <path d="M10 5v10M5 10h10" />
                  </svg>
                </div>
              </div>
              <p className="font-mercury-ui-secondary text-mercury-ui-text-sm md:text-mercury-ui-text-base text-mercury-ui-text-primary m-0 line-clamp-2">
                Tuna Melt Sandwich
              </p>
            </Link>

            {/* 3. Falafel Wrap */}
            <Link
              href="/menu?item=falafel-wrap-XB0M&matchItemName=Falafel%20Wrap"
              className="flex flex-col gap-2 md:gap-3 w-[150px] md:w-60 shrink-0 snap-start snap-always no-underline group"
            >
              <div className="relative h-[150px] md:h-60 rounded-mercury-ui-md overflow-hidden bg-mercury-ui-secondary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/325c8751-b60b-4a03-a582-97b264859e18?w=320&h=320&fit=cover"
                  alt="Falafel Wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-mercury-ui-control bg-mercury-ui-primary shadow-mercury-ui-control">
                  <svg className="h-5 w-5 text-mercury-ui-text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                    <path d="M10 5v10M5 10h10" />
                  </svg>
                </div>
              </div>
              <p className="font-mercury-ui-secondary text-mercury-ui-text-sm md:text-mercury-ui-text-base text-mercury-ui-text-primary m-0 line-clamp-2">
                Falafel Wrap
              </p>
            </Link>

            {/* 4. Chicken Shawarma Wrap */}
            <Link
              href="/menu?item=chicken-shawarma-wrap-KENr&matchItemName=Chicken%20Shawarma%20Wrap"
              className="flex flex-col gap-2 md:gap-3 w-[150px] md:w-60 shrink-0 snap-start snap-always no-underline group"
            >
              <div className="relative h-[150px] md:h-60 rounded-mercury-ui-md overflow-hidden bg-mercury-ui-secondary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/5fb71218-9327-4e56-a060-23b64df6a924?w=320&h=320&fit=cover"
                  alt="Chicken Shawarma Wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-mercury-ui-control bg-mercury-ui-primary shadow-mercury-ui-control">
                  <svg className="h-5 w-5 text-mercury-ui-text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                    <path d="M10 5v10M5 10h10" />
                  </svg>
                </div>
              </div>
              <p className="font-mercury-ui-secondary text-mercury-ui-text-sm md:text-mercury-ui-text-base text-mercury-ui-text-primary m-0 line-clamp-2">
                Chicken Shawarma Wrap
              </p>
            </Link>

            {/* 5. Turkey Pesto Sandwich */}
            <Link
              href="/menu?item=turkey-pesto-sandwich-Y2o2&matchItemName=Turkey%20Pesto%20Sandwich"
              className="flex flex-col gap-2 md:gap-3 w-[150px] md:w-60 shrink-0 snap-start snap-always no-underline group"
            >
              <div className="relative h-[150px] md:h-60 rounded-mercury-ui-md overflow-hidden bg-mercury-ui-secondary">
                <img
                  src="https://pistachiocafe.com/pluto-images/funnel/images/968e4169-bd5b-4324-a4da-f95b4d4c1bb1?w=320&h=320&fit=cover"
                  alt="Turkey Pesto Sandwich"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-mercury-ui-control bg-mercury-ui-primary shadow-mercury-ui-control">
                  <svg className="h-5 w-5 text-mercury-ui-text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
                    <path d="M10 5v10M5 10h10" />
                  </svg>
                </div>
              </div>
              <p className="font-mercury-ui-secondary text-mercury-ui-text-sm md:text-mercury-ui-text-base text-mercury-ui-text-primary m-0 line-clamp-2">
                Turkey Pesto Sandwich
              </p>
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

          {/* 9-Image Authentic Gallery with Original Alt Texts */}
          <div className="max-w-section-container mx-auto grid w-full grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 px-2 md:px-4">
            {[
              {
                uuid: \'ae3048e3-d444-4c26-b0f0-cab2ec416401\',
                alt: \'Cozy Pistachio Cafe interior with a yellow sofa, coffee bar, and customers at the counter.\',
              },
              {
                uuid: \'05d13f2c-8da6-4968-bc0d-02bab6e11952\',
                alt: \'The Pistachio Cafe interior features vintage furniture, lush plants, and ornate decor under a patterned ceiling.\',
              },
              {
                uuid: \'10299bb2-e19e-4e11-8e8a-e8a37c542675\',
                alt: \'A cup of coffee on a marble table with a floral centerpiece and elegant cafe seating in the background.\',
              },
              {
                uuid: \'bee42194-44eb-4b51-9089-01285443f9dd\',
                alt: \'A slice of chocolate cake with creamy layers and chocolate drizzle, garnished with dried rosebuds.\',
              },
              {
                uuid: \'64587d10-78dc-488f-a6d3-5f43aa3f3603\',
                alt: \'A red macaron, cupcake, and coffee on a table inside Pistachio Cafe, with display cases in the background.\',
              },
              {
                uuid: \'dfe26d0f-8856-4cec-a704-7ac4bee8e9a7\',
                alt: \'A decorative plate holds a variety of baklava pastries, including one with a pistachio filling.\',
              },
              {
                uuid: \'bcfaf0ae-f4db-40e7-941d-b9365494f783\',
                alt: \'A latte with rose petals and baklava on a table at Pistachio Cafe, with a sofa and window in the background.\',
              },
              {
                uuid: \'c7fbc300-0885-4a7d-a656-3092ba8ee971\',
                alt: \'Slice of pistachio cake with rose petals, powdered sugar, and whipped cream on a plate.\',
              },
              {
                uuid: \'de6aa2c7-fc62-440d-aa47-7aa11512a750\',
                alt: \'A pistachio latte with almond slivers and chocolate drizzle in an ornate gold and floral teacup.\',
              },
            ].map((item, i) => (
              <div key={i} className="group relative flex aspect-square overflow-hidden rounded-mercury-ui-md bg-mercury-ui-secondary shadow-sm">
                <img
                  src={`https://pistachiocafe.com/pluto-images/funnel/images/${item.uuid}?w=960&h=960&format=auto&fit=cover`}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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
              {
                uuid: \'0de9c7b2-e552-4641-bc14-0cc42db5836f\',
                alt: \'Toasted bread with brie cheese, fig jam, and fresh basil on a white rectangular plate.\',
              },
              {
                uuid: \'82ccdb21-fc8f-4f6b-b15d-b26845d3ae66\',
                alt: \'A Pistachio Cafe sandwich with sun-dried tomatoes, mozzarella, and arugula on toasted bread.\',
              },
              {
                uuid: \'4ddc4de5-41bb-40f0-8e6b-38d33782e062\',
                alt: \'Two Pistachio Cafe waffles with chocolate, strawberries, powdered sugar, and pistachio crumbles on a wooden board.\',
              },
              {
                uuid: \'bd206906-9044-4428-b205-5949ea281150\',
                alt: \'Falafel salad with lettuce, tomatoes, cucumbers, and a creamy white dressing in a white bowl.\',
              },
              {
                uuid: \'8034e161-faf6-4bba-a78f-ba1999861cab\',
                alt: \'Grilled panini sandwich with cheese, arugula, and a dark spread on a wooden board.\',
              },
              {
                uuid: \'f557f701-e1ce-4322-b522-632975a3f076\',
                alt: \'Golden brown pastries with sweet cheese filling on a white decorative plate at Pistachio Cafe.\',
              },
              {
                uuid: \'2dd1a454-9234-4849-b6e5-24839bee70ac\',
                alt: \'Pistachio Cafe muffins with white icing and green pistachio crumbles on a decorative white plate.\',
              },
              {
                uuid: \'c5dd51e3-7533-4ac7-a56c-9d82ed7dc202\',
                alt: \'Seven colorful macarons in a clear plastic container, including red, orange, green, white, and blue.\',
              },
              {
                uuid: \'fd54b3e4-4fe1-46fb-91eb-9eb6b81f1809\',
                alt: \'Three pieces of Pistachio Cafe baklava stacked on a decorative white and gold plate.\',
              },
              {
                uuid: \'2be6b657-a57c-4ae7-9112-faef8d5514e2\',
                alt: \'A refreshing blueberry drink with mint, lime, and a red-striped straw on a marble table.\',
              },
              {
                uuid: \'82d60653-64ba-48bb-878a-4264eaed2ed3\',
                alt: \'Pink raspberry drink with ice, a lime slice, and a red and white striped straw on a marble table.\',
              },
              {
                uuid: \'0d0790b6-c275-4bed-9732-22bbfefe886e\',
                alt: \'A vibrant red drink with ice and cherries, served in a tall glass with a striped straw.\',
              },
            ].map((item, i) => (
              <div key={i} className="group relative flex aspect-square overflow-hidden rounded-mercury-ui-md bg-mercury-ui-secondary shadow-sm">
                <img
                  src={`https://pistachiocafe.com/pluto-images/funnel/images/${item.uuid}?w=960&h=960&format=auto&fit=cover`}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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
        <div className="mx-auto flex flex-col gap-6">
          <div className="mx-auto w-full px-0">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl min-[1920px]:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col">
            {/* Q1 */}
            <details className="group w-full overflow-hidden">
              <summary className="border-mercury-ui-divider focus-visible:outline-mercury-ui-text-primary flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-4 border-b py-6 focus-visible:rounded-mercury-ui-sm focus-visible:outline-2 focus-visible:outline-offset-[-2px]">
                <span className="font-mercury-ui-primary text-mercury-ui-title-sm text-mercury-ui-text-primary font-medium md:text-mercury-ui-title-base lg:text-mercury-ui-title-lg">
                  What are you known for?
                </span>
                <svg className="text-mercury-ui-text-secondary h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </summary>
              <div className="py-4">
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
            </details>

            {/* Q2 */}
            <details className="group w-full overflow-hidden">
              <summary className="border-mercury-ui-divider focus-visible:outline-mercury-ui-text-primary flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-4 border-b py-6 focus-visible:rounded-mercury-ui-sm focus-visible:outline-2 focus-visible:outline-offset-[-2px]">
                <span className="font-mercury-ui-primary text-mercury-ui-title-sm text-mercury-ui-text-primary font-medium md:text-mercury-ui-title-base lg:text-mercury-ui-title-lg">
                  What meals do you serve?
                </span>
                <svg className="text-mercury-ui-text-secondary h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </summary>
              <div className="py-4">
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
            </details>

            {/* Q3 */}
            <details className="group w-full overflow-hidden">
              <summary className="border-mercury-ui-divider focus-visible:outline-mercury-ui-text-primary flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-4 border-b py-6 focus-visible:rounded-mercury-ui-sm focus-visible:outline-2 focus-visible:outline-offset-[-2px]">
                <span className="font-mercury-ui-primary text-mercury-ui-title-sm text-mercury-ui-text-primary font-medium md:text-mercury-ui-title-base lg:text-mercury-ui-title-lg">
                  Do you offer delivery or takeout?
                </span>
                <svg className="text-mercury-ui-text-secondary h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </summary>
              <div className="py-4">
                <p className="text-mercury-ui-text-secondary text-sm md:text-base leading-relaxed m-0">
                  Yes, we offer{' '}
                  <Link href="/menu" className="text-mercury-ui-text-secondary hover:underline">Takeout</Link>
                  {' and '}
                  <Link href="/menu" className="text-mercury-ui-text-secondary hover:underline">Delivery</Link>
                </p>
              </div>
            </details>

            {/* Q4 */}
            <details className="group w-full overflow-hidden">
              <summary className="border-mercury-ui-divider focus-visible:outline-mercury-ui-text-primary flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-4 border-b py-6 focus-visible:rounded-mercury-ui-sm focus-visible:outline-2 focus-visible:outline-offset-[-2px]">
                <span className="font-mercury-ui-primary text-mercury-ui-title-sm text-mercury-ui-text-primary font-medium md:text-mercury-ui-title-base lg:text-mercury-ui-title-lg">
                  What areas do you serve?
                </span>
                <svg className="text-mercury-ui-text-secondary h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" height="20" viewBox="0 0 20 20" width="20">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </summary>
              <div className="py-4">
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
            </details>
          </div>
        </div>
      </div>

      {/* SECTION 14: OUR LOCATIONS */}
      <div className="my-section-vertical-mobile md:my-content-vertical-desktop">
        <div className="max-w-section-content mx-auto flex flex-col gap-6 px-4 md:px-8">
          <div className="w-full flex items-center justify-between">
            <h2 className="font-mercury-ui-primary text-mercury-ui-title-2xl min-[1920px]:text-mercury-ui-title-3xl font-semibold text-mercury-ui-text-primary m-0" id="locations-section-heading">
              Our locations
            </h2>
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setActiveLocationTab(activeLocationTab === 0 ? 1 : 0)}
                aria-label="View previous restaurant location"
                className="location-prev-btn group bg-mercury-ui-secondary text-mercury-ui-text-secondary rounded-full p-2.5 md:p-3 hover:opacity-80 transition-opacity"
              >
                <svg className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 20 20">
                  <path d="M12.5 15L7.5 10L12.5 5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setActiveLocationTab(activeLocationTab === 0 ? 1 : 0)}
                aria-label="View next restaurant location"
                className="location-next-btn group bg-mercury-ui-secondary text-mercury-ui-text-secondary rounded-full p-2.5 md:p-3 hover:opacity-80 transition-opacity"
              >
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 20 20">
                  <path d="M7.5 5L12.5 10L7.5 15" />
                </svg>
              </button>
            </div>
          </div>

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

print("Updated app/page.tsx with accordion FAQs, carousel track, and authentic alt texts!")
