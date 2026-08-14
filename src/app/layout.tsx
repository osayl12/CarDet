import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Slick Garage | Car Wash, Detailing & Nano Coating",
  description:
    "Professional car wash, detailing, and ceramic nano coating services. Leave your details for a free quote.",
  openGraph: {
    title: "Slick Garage | Car Wash, Detailing & Nano Coating",
    description:
      "Professional car wash, detailing, and ceramic nano coating services. Leave your details for a free quote.",
    url: SITE_URL,
    siteName: "Slick Garage",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
    images: ["/images/brand/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slick Garage | Car Wash, Detailing & Nano Coating",
    description:
      "Professional car wash, detailing, and ceramic nano coating services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "Slick Garage",
  image: `${SITE_URL}/images/brand/logo.png`,
  telephone: "+972504306426",
  priceRange: "₪₪",
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-Tarik neighborhood",
    addressLocality: "Maghar",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.896149,
    longitude: 35.397032,
  },
  url: SITE_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: ["https://facebook.com/", "https://instagram.com/", "https://tiktok.com/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&family=Yellowtail&family=Racing+Sans+One&family=Rubik:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
