import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-alfi-flame.vercel.app";
const title = "Alfi Fauzi — Digital Products for Growing Businesses";
const description =
  "I build digital products that move businesses forward — full-stack web development, digital systems, data analytics, and digital experiences for businesses and growing brands.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Alfi Fauzi",
  },
  description,
  keywords: [
    "Alfi Fauzi",
    "Alfi Fauzi Nur",
    "Information Systems Student",
    "Full-Stack Web Developer",
    "Data Analytics",
    "Digital Systems",
    "IT Support",
    "Universitas Gunadarma",
    "Web Developer Jakarta",
  ],
  authors: [{ name: "Alfi Fauzi", url: siteUrl }],
  creator: "Alfi Fauzi",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "U7GUEhwp8kL4wAEKB26hZ1fYHPLH-2jfMptGr27cmfg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Alfi Fauzi — Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alfi Fauzi — Digital Products for Growing Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alfi Fauzi",
    alternateName: "Alfi Fauzi Nur",
    url: siteUrl,
    image: `${siteUrl}/profil.jpg`,
    jobTitle: "Information Systems Student",
    description,
    email: "mailto:alfifauzinur@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universitas Gunadarma",
    },
    sameAs: [
      "https://github.com/buleyyy",
      "https://linkedin.com/in/alfi-fauzi-00170b264",
      "https://instagram.com/alfifauzi__",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
