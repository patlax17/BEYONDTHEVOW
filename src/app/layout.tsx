import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Beyond The Vow | Bridal Makeup & Beauty Atelier",
    template: "%s | Beyond The Vow",
  },
  description:
    "Beyond The Vow is a luxury bridal makeup studio crafting flawless, personalised looks for every bride. Expert artistry across all skin tones — from soft glam to bold editorial.",
  keywords: [
    "bridal makeup artist",
    "wedding makeup",
    "bridal beauty",
    "airbrush makeup",
    "wedding day glam",
    "bridesmaids makeup",
    "Beyond The Vow",
    "bridal makeup trial",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beyondthevow.com",
    siteName: "Beyond The Vow",
    title: "Beyond The Vow | Bridal Makeup & Beauty Atelier",
    description:
      "Flawless bridal artistry for every complexion. Expert wedding makeup that reveals your most radiant self.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond The Vow | Bridal Makeup & Beauty Atelier",
    description: "Flawless bridal artistry for every complexion.",
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
