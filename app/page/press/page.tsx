import React from 'react';
import Image from 'next/image';
import Link from 'next/image';
import { Newspaper, ExternalLink, Calendar } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press & Media | Pistachio Cafe | New Haven, CT',
  description: 'Read the latest press features, media coverage, and artistic reviews of Pistachio Cafe and founder Mohamad Hafez in New Haven, Connecticut.',
  alternates: {
    canonical: 'https://pistachiocafe.com/page/press',
  },
};

interface PressArticle {
  title: string;
  date: string;
  publication: string;
  description: string;
  image: string;
}

const articles: PressArticle[] = [
  {
    title: 'Hafez Continues Artistic Mission in Latest Venture',
    date: 'June 26, 2022',
    publication: 'New Haven Independent',
    description: 'Through his art, Mohamad Hafez confronts preconceived notions of refugees and the "baggage" they may carry. He was recently the subject of an Oscars-shortlisted documentary, an intimate portrait of how Hafez\'s acclaimed UNPACKED series was informed by his own experience leaving Syria.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/d1f7aaa5-c6b6-456b-aaf3-cf4c3a3bd7a3?w=800&fit=cover',
  },
  {
    title: 'Syrian Artist-Owned Café Aims to Be Community Hub',
    date: 'March 02, 2021',
    publication: 'Yale Daily News',
    description: 'Mohamad Hafez\'s Pistachio Cafe bridges cultural heritage and modern cafe culture, bringing traditional Syrian dishes, Turkish coffee, and artisanal pastries to New Haven.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/223e3770-a8ce-49b0-b489-09e3175ce37a?w=800&fit=cover',
  },
  {
    title: 'New Coffee Shop Brings Majlis To Westville',
    date: 'January 27, 2021',
    publication: 'Arts Paper New Haven',
    description: 'Pistachio Cafe introduces the traditional majlis concept to Westville—an inviting community gathering space where neighbors can relax, converse, and enjoy artisanal coffees.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/8baa7bc5-6c28-4f19-a42d-ed2173dd2a66?w=800&fit=cover',
  },
  {
    title: 'Pistachio Prepares a Sweet Opening In Westville',
    date: 'January 27, 2021',
    publication: 'New Haven Independent',
    description: 'A vibrant new cafe prepares to open its doors on Whalley Avenue, showcasing handmade Mediterranean pastries, delicate tartines, and signature pistachio lattes.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/489b780c-7ad4-4ec0-87b4-bf05bfa5c62a?w=800&fit=cover',
  },
  {
    title: 'Delicacy, and Delicacies',
    date: 'January 27, 2021',
    publication: 'Daily Nutmeg',
    description: 'An exploration into the intricate architectural and gastronomic world of Pistachio Cafe, where food presentation mirrors artistic installations.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/de774d6c-9105-49af-a75f-55e8cd537261?w=800&fit=cover',
  },
  {
    title: "Pistachio Cafe Offers Taste of Syrian Owner's Home",
    date: 'January 27, 2021',
    publication: 'Hartford Courant',
    description: 'Every spice blend, sauce, and cup of cardamom coffee evokes cherished memories of home for Syrian architect and artist Mohamad Hafez.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/97df7df6-daca-4294-84c9-7014446b51b0?w=800&fit=cover',
  },
  {
    title: 'Syria to New Haven: Artist’s Salon Bridges Divides',
    date: 'January 27, 2021',
    publication: 'Connecticut Magazine',
    description: 'How an artist transformed personal displacement into a shared community haven that welcomes Yale scholars, Elm City locals, and international travelers.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/5cc7b247-413d-41a1-b478-61886f592292?w=800&fit=cover',
  },
  {
    title: 'Syrian Artist Opens Cafe in New Haven',
    date: 'January 27, 2021',
    publication: 'NBC Connecticut',
    description: 'Celebrated artist Mohamad Hafez opens his doors in Westville, creating a sanctuary of rich textures, fragrant Turkish brews, and comforting Middle Eastern breakfast plates.',
    image: 'https://pistachiocafe.com/pluto-images/funnel/images/ed03e7b2-4cdb-492a-bb15-692cf6954ee8?w=800&fit=cover',
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-[#fbf9f6] text-[#211611]">
      {/* Header */}
      <section className="py-20 md:py-28 bg-[#211611] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#fc574a] text-white mb-6">
            <Newspaper className="w-3.5 h-3.5" /> In The News
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
            Press &amp; Media Highlights
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Read stories, profiles, and reviews chronicling the journey, artistry, and community impact of Pistachio Cafe.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-md hover:shadow-xl transition-shadow flex flex-col group"
            >
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                  <span className="font-semibold text-[#fc574a] uppercase tracking-wider">
                    {article.publication}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                </div>
                <h2 className="text-xl font-serif font-bold text-[#211611] mb-3 group-hover:text-[#fc574a] transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                  {article.description}
                </p>
                <div className="pt-4 border-t border-neutral-100 flex items-center text-sm font-semibold text-[#fc574a]">
                  Featured Coverage <ExternalLink className="w-4 h-4 ml-1.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
