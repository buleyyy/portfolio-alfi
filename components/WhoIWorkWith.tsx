import SectionHeader from "@/components/ui/SectionHeader";
import { whoIWorkWith } from "@/lib/content";

export default function WhoIWorkWith() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow={whoIWorkWith.eyebrow}
          title={whoIWorkWith.title}
          align="center"
          className="text-center"
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {whoIWorkWith.items.map((item, i) => (
            <div
              key={item.title}
              className={`scroll-animate delay-${(i % 4) * 100} surface rounded-[var(--radius-lg)] p-7 card-lift`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flow-node inline-block mb-4"
                style={{ background: "var(--accent-blue)" }}
              />
              <h3 className="text-base font-bold leading-snug">{item.title}</h3>
              <p className="text-sm mt-2.5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
