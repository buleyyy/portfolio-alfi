"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

const tabs = ["All", "Featured"] as const;

export default function SelectedWork() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const visible = tab === "All" ? projects : projects.filter((p) => p.slug === "ali-nursery");

  return (
    <section id="work" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div
        className="absolute -top-40 right-[-10%] w-[520px] h-[420px] blur-[140px] rounded-full pointer-events-none"
        style={{ background: "rgba(79,141,253,0.07)" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Selected Work"
            title={
              <>
                Business problems, <span className="gradient-text">turned into products.</span>
              </>
            }
            sub="Full-stack systems and applied coursework, from concept to working product."
          />

          <div className="flex items-center gap-6 pb-1">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className="relative text-sm font-medium py-1 transition-colors"
                style={{
                  color: tab === t ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {t}
                {tab === t && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: "var(--accent-gradient)" }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-8">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
