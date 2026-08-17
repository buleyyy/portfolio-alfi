"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

import LoginPage from "@/public/projects/ali/LoginPage.png";
import HomePage from "@/public/projects/ali/HomePage.png";
import ProductPage from "@/public/projects/ali/ProductPage.png";
import CheckoutPage from "@/public/projects/ali/CheckoutPage.png";
import OrderTrackingPage from "@/public/projects/ali/OrderTrackingPage.png";
import DashboardAdminPage from "@/public/projects/ali/DashboardAdminPage.png";
import AdminManageOrders from "@/public/projects/ali/AdminManageOrders.png";
import SalesReportAdmin from "@/public/projects/ali/SalesReportAdmin.png";

interface GalleryImage {
  src: StaticImageData;
  alt: string;
  group: "Customer Experience" | "Admin Panel";
}

const images: GalleryImage[] = [
  { src: LoginPage, alt: "Ali Nursery — customer login page", group: "Customer Experience" },
  { src: HomePage, alt: "Ali Nursery — customer homepage", group: "Customer Experience" },
  { src: ProductPage, alt: "Ali Nursery — product listing page", group: "Customer Experience" },
  { src: CheckoutPage, alt: "Ali Nursery — checkout page", group: "Customer Experience" },
  { src: OrderTrackingPage, alt: "Ali Nursery — order tracking page", group: "Customer Experience" },
  { src: DashboardAdminPage, alt: "Ali Nursery — admin dashboard overview", group: "Admin Panel" },
  { src: AdminManageOrders, alt: "Ali Nursery — admin order management", group: "Admin Panel" },
  { src: SalesReportAdmin, alt: "Ali Nursery — admin sales report", group: "Admin Panel" },
];

export default function AliNurseryGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="w-full">
      {/* Main preview */}
      <div
        key={activeIndex}
        className="relative w-full aspect-[16/10] rounded-[var(--radius-lg)] overflow-hidden card-lift"
        style={{
          border: "1px solid var(--border-medium)",
          animation: "fadeIn var(--dur-slow) var(--ease-out)",
        }}
      >
        <Image
          src={active.src}
          alt={active.alt}
          fill
          sizes="(min-width: 768px) 640px, 100vw"
          className="object-cover"
          priority={activeIndex === 0}
        />
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2.5">
        {images.map((img, i) => (
          <button
            key={img.alt}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${img.alt}`}
            aria-pressed={i === activeIndex}
            className="relative aspect-[16/10] rounded-[var(--radius-sm)] overflow-hidden transition-all duration-[var(--dur-fast)]"
            style={{
              border:
                i === activeIndex
                  ? "1.5px solid var(--accent-violet)"
                  : "1px solid var(--border-subtle)",
              opacity: i === activeIndex ? 1 : 0.6,
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}