import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RestaurantJsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#db594b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pistachiocafe.com"),
  title: {
    default: "Pistachio Cafe | Artisan Coffee, Breakfast & Brunch | New Haven, CT",
    template: "%s | Pistachio Cafe New Haven",
  },
  description:
    "Pistachio Cafe brings you the premier cafe experience in New Haven, CT. Artisan coffee, signature pistachio lattes, warm Syrian pastries, daily fresh brunch, and 100% Halal comfort food.",
  icons: {
    icon: "https://pistachiocafe.com/pluto-images/c54d93d8-cb2c-4252-b785-6d086bbf3820.png?w=32&h=32&dpr=1&format=png&fit=contain",
    apple: "https://pistachiocafe.com/pluto-images/c54d93d8-cb2c-4252-b785-6d086bbf3820.png?w=180&h=180&format=png&fit=contain",
  },
  openGraph: {
    title: "Pistachio Cafe | Premier Artisan Cafe in New Haven, CT",
    description:
      "Order directly online today for fast pickup or local delivery. Two convenient New Haven locations on Whalley Avenue and Chapel Street.",
    url: "https://pistachiocafe.com/",
    siteName: "Pistachio Cafe",
    images: [
      {
        url: "https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg",
        width: 1200,
        height: 630,
        alt: "Pistachio Cafe New Haven",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pistachio Cafe | Premier Artisan Cafe in New Haven, CT",
    description: "Artisan coffee, Syrian pastries, fresh daily brunch, and 100% Halal comfort food in New Haven.",
    images: ["https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <RestaurantJsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-stone-900 selection:bg-pistachio selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
