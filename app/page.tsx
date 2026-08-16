"use client";

import { useScrollAnimations } from "./useInView";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Process from "@/components/Process";
import TrustProof from "@/components/TrustProof";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollAnimations();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <Navbar />
      <Hero />
      <SelectedWork />
      <Capabilities />
      <About />
      <Process />
      <TrustProof />
      <WhoIWorkWith />
      <FinalCTA />
      <Footer />
    </div>
  );
}
