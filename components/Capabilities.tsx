import SectionHeader from "@/components/ui/SectionHeader";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="What I Do"
          title={
            <>
              Capabilities built around <span className="gradient-text">outcomes.</span>
            </>
          }
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`scroll-animate delay-${(i % 4) * 100} surface rounded-[var(--radius-lg)] p-8 card-lift relative overflow-hidden`}
            >
              <span
                className="absolute top-6 right-7 text-4xl font-bold select-none"
                style={{ color: "var(--border-medium)" }}
              >
                0{i + 1}
              </span>
              <h3 className="text-lg font-bold mb-3 relative z-10">{c.title}</h3>
              <p className="text-sm leading-relaxed relative z-10" style={{ color: "var(--text-secondary)" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
