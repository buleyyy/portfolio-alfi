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
  title: "Alfi Fauzi | Portfolio",
  description:
    "Portfolio of Alfi Fauzi — Information Systems Student passionate about Data Analytics & Web Development. Explore my experience, skills, and services.",
  keywords: [
    "Alfi Fauzi",
    "Portfolio",
    "Data Analytics",
    "Web Development",
    "Information Systems",
  ],
  authors: [{ name: "Alfi Fauzi" }],
  openGraph: {
    title: "Alfi Fauzi | Portfolio",
    description:
      "Information Systems Student passionate about Data Analytics & Web Development.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
