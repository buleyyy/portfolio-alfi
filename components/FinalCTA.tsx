import Button from "@/components/ui/Button";
import { finalCta } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] blur-[130px] rounded-full pointer-events-none"
        style={{ background: "rgba(99,102,241,0.08)" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10 scroll-animate">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
          {finalCta.headline}
        </h2>
        <p className="mt-5 text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
          {finalCta.sub}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={finalCta.cta.href} external>
            {finalCta.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
