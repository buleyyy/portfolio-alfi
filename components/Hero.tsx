import Button from "@/components/ui/Button";
import HeroVisual from "@/components/HeroVisual";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid-faint">
      <div
        className="absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(99,102,241,0.08)" }}
      />
      <div
        className="absolute bottom-0 -right-40 w-[420px] h-[420px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "rgba(79,141,253,0.06)" }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-32 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-[fadeInUp_0.8s_var(--ease-out)_forwards]">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
              style={{
                border: "1px solid var(--border-medium)",
                color: "var(--text-secondary)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flow-node"
                style={{ background: "var(--accent-blue)" }}
              />
              {hero.eyebrow}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              {hero.headline}
            </h1>

            <p
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {hero.sub}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
              <Button href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>

            <p className="text-xs pt-2" style={{ color: "var(--text-tertiary)" }}>
              {hero.credibility}
            </p>
          </div>

          <div className="hidden md:flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
