import SectionHeader from "@/components/ui/SectionHeader";
import { aboutStory } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-4">
          <SectionHeader eyebrow="About" title="From accounting to digital products." />
        </div>

        <div className="md:col-span-8 space-y-8">
          {/* Progression flow */}
          <div className="scroll-animate flex flex-wrap items-center gap-x-2 gap-y-3">
            {aboutStory.progression.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span
                  className="text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full"
                  style={{
                    border: "1px solid var(--border-medium)",
                    color: i === aboutStory.progression.length - 1 ? "var(--text-primary)" : "var(--text-secondary)",
                    background: i === aboutStory.progression.length - 1 ? "var(--bg-elevated-2)" : "transparent",
                  }}
                >
                  {step}
                </span>
                {i < aboutStory.progression.length - 1 && (
                  <span style={{ color: "var(--accent-violet)" }} className="text-xs">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="scroll-animate delay-100 space-y-5">
            {aboutStory.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === aboutStory.paragraphs.length - 1
                    ? "text-lg font-semibold"
                    : "text-base leading-relaxed"
                }
                style={{ color: i === aboutStory.paragraphs.length - 1 ? "var(--text-primary)" : "var(--text-secondary)" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
