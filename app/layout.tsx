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

export const metadata: Metadata = {
  title: "Alfi Fauzi — Digital Products for Growing Businesses",
  description:
    "I build digital products that move businesses forward — full-stack web development, digital systems, data analytics, and digital experiences for businesses and growing brands.",
  keywords: [
    "Alfi Fauzi",
    "Freelance Web Developer",
    "Full-Stack Development",
    "Data Analytics",
    "Digital Systems",
    "Brand & Digital Experience",
  ],
  authors: [{ name: "Alfi Fauzi" }],
  openGraph: {
    title: "Alfi Fauzi — Digital Products for Growing Businesses",
    description:
      "Full-stack web development, digital systems, data analytics, and digital experiences for businesses and growing brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
