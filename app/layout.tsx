import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RestaurantJsonLd } from "@/components/JsonLd";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#db594b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pistachiocafe.com"),
  title: {
    default: "Pistachio Cafe | Best Cafe in New Haven, CT | Cafe near me",
    template: "%s | Pistachio Cafe",
  },
  description:
    "Pistachio Cafe: the best Cafe in New Haven, CT and other locations. Order directly online today for takeout or delivery. Save money, support local business!",
  icons: {
    icon: "https://pistachiocafe.com/pluto-images/c54d93d8-cb2c-4252-b785-6d086bbf3820.png?w=32&h=32&dpr=1&format=png&fit=contain",
    apple: "https://pistachiocafe.com/pluto-images/c54d93d8-cb2c-4252-b785-6d086bbf3820.png?w=180&h=180&format=png&fit=contain",
  },
  openGraph: {
    title: "Pistachio Cafe | Best Cafe in New Haven, CT | Cafe near me",
    description:
      "Pistachio Cafe: the best Cafe in New Haven, CT and other locations. Order directly online today for takeout or delivery. Save money, support local business!",
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
    title: "Pistachio Cafe | Best Cafe in New Haven, CT | Cafe near me",
    description:
      "Pistachio Cafe: the best Cafe in New Haven, CT and other locations. Order directly online today for takeout or delivery. Save money, support local business!",
    images: ["https://pistachiocafe.com/pluto-videos/g1D1GmcwSgLH/bfb0e23b6639397b3423/poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <link rel="stylesheet" href="/mercury.css" />
        <RestaurantJsonLd />
      </head>
      <body className={`${poppins.className} min-h-screen flex flex-col bg-white text-stone-900 selection:bg-[#fc574a] selection:text-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
