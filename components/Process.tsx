import SectionHeader from "@/components/ui/SectionHeader";
import { process } from "@/lib/content";

export default function Process() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="How I Work" title="A straightforward process." align="center" className="text-center" />

        <div className="mt-16 relative">
          {/* connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px"
            style={{ background: "var(--border-medium)" }}
          />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {process.map((step, i) => (
              <div key={step.index} className={`scroll-animate delay-${(i % 4) * 100} relative text-center md:text-left`}>
                <div className="flex md:block items-center gap-4 md:gap-0">
                  <span
                    className="relative z-10 inline-flex w-10 h-10 rounded-full items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: "var(--bg-elevated-2)", border: "1px solid var(--border-medium)" }}
                  >
                    {step.index}
                  </span>
                  <div className="md:mt-4">
                    <h3 className="text-base font-bold">{step.title}</h3>
                    <p className="text-sm mt-1.5" style={{ color: "var(--text-secondary)" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
