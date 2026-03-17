import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Beyond the Vow",
    template: "%s | Beyond the Vow",
  },
  description:
    "Wedding Coordination & Bridal Experience",
  keywords: [
    "wedding coordination",
    "bridal experience",
    "wedding planner",
    "bridal makeup artist",
    "wedding makeup",
    "bridal beauty",
    "wedding day coordination",
    "Beyond The Vow",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beyondthevow.com",
    siteName: "Beyond the Vow",
    title: "Beyond the Vow",
    description: "Wedding Coordination & Bridal Experience",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond the Vow",
    description: "Wedding Coordination & Bridal Experience",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Beyond The Vow",
  description:
    "Luxury bridal makeup studio crafting flawless, personalised looks for every bride.",
  url: "https://beyondthevow.com",
  priceRange: "$$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Bridal Makeup Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Bridal Package",
          description:
            "Complete wedding day makeup including trial, application, and touch-up kit",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bridesmaids & Party Makeup",
          description: "Group bridal party makeup with coordinated aesthetic",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Airbrush Bridal Makeup",
          description: "Ultra-smooth HD airbrush finish for photography and video",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
