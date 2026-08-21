"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: "/projects/ali/LoginPage.png", alt: "Ali Nursery — customer login page" },
  { src: "/projects/ali/HomePage.png", alt: "Ali Nursery — customer homepage" },
  { src: "/projects/ali/ProductPage.png", alt: "Ali Nursery — product listing page" },
  { src: "/projects/ali/CheckoutPage.png", alt: "Ali Nursery — checkout page" },
  { src: "/projects/ali/OrderTrackingPage.png", alt: "Ali Nursery — order tracking page" },
  { src: "/projects/ali/DashboardAdminPage.png", alt: "Ali Nursery — admin dashboard overview" },
  { src: "/projects/ali/AdminManageOrders.png", alt: "Ali Nursery — admin order management" },
  { src: "/projects/ali/SalesReportAdmin.png", alt: "Ali Nursery — admin sales report" },
];

export default function AliNurseryGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  const go = (delta: number) => {
    setActiveIndex((i) => (i + delta + images.length) % images.length);
  };

  return (
    <div className="w-full">
      {/* Main preview */}
      <div className="relative">
        <div
          key={activeIndex}
          className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden"
          style={{
            border: "1px solid var(--border-medium)",
            boxShadow: "var(--shadow-lg)",
            animation: "fadeIn var(--dur-base) var(--ease-out)",
          }}
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            quality={100}
            className="object-cover object-top"
            priority={activeIndex === 0}
          />
        </div>

        {/* Prev / next arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screenshot"
          className="hidden sm:flex absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center backdrop-blur-sm transition-transform hover:-translate-x-0.5 hover:scale-105"
          style={{
            background: "rgba(10,10,13,0.85)",
            border: "1px solid var(--border-medium)",
            color: "var(--text-primary)",
          }}
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screenshot"
          className="hidden sm:flex absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center backdrop-blur-sm transition-transform hover:translate-x-0.5 hover:scale-105"
          style={{
            background: "rgba(10,10,13,0.85)",
            border: "1px solid var(--border-medium)",
            color: "var(--text-primary)",
          }}
        >
          <FiChevronRight size={18} />
        </button>
      </div>

      {/* Dot pagination */}
      <div className="mt-4 flex justify-center gap-1.5">
        {images.map((img, i) => (
          <button
            key={`dot-${img.alt}`}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            aria-current={i === activeIndex}
            className="rounded-full transition-all duration-[var(--dur-fast)]"
            style={{
              width: i === activeIndex ? "18px" : "6px",
              height: "6px",
              background: i === activeIndex ? "var(--accent-violet)" : "var(--border-medium)",
            }}
          />
        ))}
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
              opacity: i === activeIndex ? 1 : 0.55,
            }}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="160px"
              quality={90}
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>
    </div>
  );
}