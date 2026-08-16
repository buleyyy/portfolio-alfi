"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ["work", "services", "about"];
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b"
          : "bg-transparent border-b border-transparent"
      }`}
      style={
        scrolled
          ? { background: "rgba(10,10,13,0.72)", borderColor: "var(--border-subtle)" }
          : undefined
      }
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
        <Link href="#" className="text-lg font-bold tracking-tight">
          Alfi <span style={{ color: "var(--text-tertiary)" }}>Fauzi</span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium py-1 transition-colors"
              style={{
                color:
                  activeSection === l.href.slice(1)
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
              }}
            >
              {l.label}
              {activeSection === l.href.slice(1) && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                  style={{ background: "var(--accent-gradient)" }}
                />
              )}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="px-5 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundImage: "var(--accent-gradient)" }}
          >
            {nav.cta.label}
          </a>
        </div>

        <button
          onClick={() => setMobileMenu((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={mobileMenu}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenu ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenu ? "opacity-0" : ""}`} />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenu ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-500 backdrop-blur-xl"
        style={{
          maxHeight: mobileMenu ? "20rem" : 0,
          background: "rgba(10,10,13,0.9)",
          borderTop: mobileMenu ? "1px solid var(--border-subtle)" : "none",
        }}
      >
        <div className="px-6 py-4 space-y-1">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenu(false)}
              className="block py-2.5 text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            onClick={() => setMobileMenu(false)}
            className="block mt-3 text-center px-5 py-3 rounded-[var(--radius-sm)] text-sm font-semibold text-white"
            style={{ backgroundImage: "var(--accent-gradient)" }}
          >
            {nav.cta.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
