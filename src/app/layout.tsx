import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";

export const metadata: Metadata = {
  title: "Business Name | Car Wash, Detailing & Nano Coating",
  description:
    "Professional car wash, detailing, and ceramic nano coating services. Leave your details for a free quote.",
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
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
