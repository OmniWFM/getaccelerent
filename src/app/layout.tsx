import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://getaccelerent.com"),
  title: {
    default: "Accelerent — The Business Development Platform",
    template: "%s | Accelerent",
  },
  description:
    "Accelerent is a business development platform built on category exclusivity. We connect decision-makers and their sales teams to build relationships that drive growth.",
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
      "One partner per industry. A focused platform where decision-makers build relationships that drive growth.",
    url: "https://getaccelerent.com",
    siteName: "Accelerent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accelerent — The Business Development Platform",
    description:
      "One partner per industry. A focused platform where decision-makers build relationships that drive growth.",
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
    slogan: "One partner per industry. Every relationship that matters.",
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased">
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
