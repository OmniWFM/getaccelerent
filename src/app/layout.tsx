import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getaccelerent.com"),
  title: {
    default: "Accelerent — The Business Development Platform",
    template: "%s | Accelerent",
  },
  description:
    "Accelerent is a business development platform built on category exclusivity. One exclusive partner per industry, in every market. We bring decision-makers and their sales teams together to build the relationships that generate new business.",
  keywords: [
    "business development platform",
    "category exclusivity",
    "B2B relationships",
    "decision makers",
    "sales growth",
    "Accelerent",
  ],
  openGraph: {
    title: "Accelerent — The Business Development Platform",
    description:
      "One exclusive partner per industry, in every market. A focused platform where decision-makers build the relationships that drive growth.",
    url: "https://getaccelerent.com",
    siteName: "Accelerent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accelerent — The Business Development Platform",
    description:
      "One exclusive partner per industry, in every market. Relationships that drive growth.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Accelerent",
    url: "https://getaccelerent.com",
    description:
      "A business development platform built on category exclusivity, connecting decision-makers who drive growth.",
    slogan: "One exclusive partner per industry, in every market we serve.",
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${archivo.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
