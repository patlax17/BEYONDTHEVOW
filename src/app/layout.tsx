import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Beyond The Vow | Luxury Wedding Planning & Design",
    template: "%s | Beyond The Vow",
  },
  description:
    "Beyond The Vow is a luxury wedding planning and design studio crafting intentional, editorial celebrations that reflect personal narratives. Based globally, serving destination couples worldwide.",
  keywords: [
    "luxury wedding planner",
    "destination wedding planner",
    "bespoke wedding design",
    "editorial wedding",
    "high-end wedding planning",
    "wedding design studio",
    "Beyond The Vow",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beyondthevow.com",
    siteName: "Beyond The Vow",
    title: "Beyond The Vow | Luxury Wedding Planning & Design",
    description:
      "Intentional celebrations that reflect personal narratives. A luxury wedding planning and design studio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond The Vow | Luxury Wedding Planning & Design",
    description: "Intentional celebrations that reflect personal narratives.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Beyond The Vow",
  description:
    "Luxury wedding planning and design studio crafting intentional, editorial celebrations.",
  url: "https://beyondthevow.com",
  priceRange: "$$$$$",
  serviceArea: {
    "@type": "GeoShape",
    description: "Worldwide destination weddings",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Planning & Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Wedding Planning",
          description:
            "Comprehensive wedding planning from concept to execution",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Design & Art Direction",
          description: "Bespoke visual concept and aesthetic direction",
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
