import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060606",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Saintnuit — Creative Director & AI Filmmaker",
    template: "%s | Saintnuit",
  },
  description:
    "Portfolio of Saintnuit — Creative Director, AI Filmmaker, Visual Researcher, Musician, and Art Director. Crafting visual experiences at the intersection of technology and aesthetics.",
  keywords: [
    "Creative Director",
    "AI Filmmaker",
    "Visual Researcher",
    "Art Director",
    "Portfolio",
    "Fashion Film",
    "Music",
    "Art Direction",
    "Visual Identity",
    "Luxury",
  ],
  authors: [{ name: "Saintnuit" }],
  creator: "Saintnuit",
  publisher: "Saintnuit",
  metadataBase: new URL("https://saintnuit.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saintnuit.com",
    siteName: "Saintnuit",
    title: "Saintnuit — Creative Director & AI Filmmaker",
    description:
      "Crafting visual experiences at the intersection of technology and aesthetics.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saintnuit — Creative Director & AI Filmmaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saintnuit — Creative Director & AI Filmmaker",
    description:
      "Crafting visual experiences at the intersection of technology and aesthetics.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://saintnuit.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Saintnuit",
  jobTitle: "Creative Director & AI Filmmaker",
  url: "https://saintnuit.com",
  sameAs: ["https://instagram.com/saintnuit", "https://t.me/saintnuit"],
  knowsAbout: [
    "Creative Direction",
    "AI Film Production",
    "Visual Identity",
    "Art Direction",
    "Fashion Film",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#060606] text-[#e0ddd5] antialiased min-h-screen">
        <CustomCursor />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
