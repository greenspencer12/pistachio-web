import type { Metadata, Viewport } from "next";

// Pages render the captured live markup (components/LivePage.tsx), which carries
// its own header, footer, CSS and fonts, so the layout adds nothing visible.
const icon = (size: number) =>
  `https://pistachiocafe.com/pluto-images/c54d93d8-cb2c-4252-b785-6d086bbf3820.png?w=${size}&h=${size}&dpr=1&format=png&fit=contain`;

export const viewport: Viewport = {
  themeColor: "#db594b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pistachiocafe.com"),
  verification: { google: "btvulK-goR4GSpefpKG4pRpHYvHDoBDe54rz0sgYVYw" },
  icons: {
    icon: [32, 48, 96, 144, 192].map((s) => ({ url: icon(s), sizes: `${s}x${s}`, type: "image/png" })),
    shortcut: icon(96),
    apple: { url: icon(180), sizes: "180x180" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      style={{ ["--account-nav-signed-out-display" as string]: "flex", ["--account-nav-signed-in-display" as string]: "none" }}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
