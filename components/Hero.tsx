import Image from "next/image";
import Button from "@/components/ui/Button";
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

          <div className="hidden md:flex justify-center relative">
            <div
              className="absolute -inset-6 rounded-[calc(var(--radius-lg)+24px)] opacity-40 blur-2xl"
              style={{ backgroundImage: "var(--accent-gradient)" }}
            />
            <div
              className="relative w-full max-w-md aspect-square rounded-[var(--radius-lg)] overflow-hidden p-[2px]"
              style={{ backgroundImage: "var(--accent-gradient)" }}
            >
              <div className="relative w-full h-full rounded-[calc(var(--radius-lg)-2px)] overflow-hidden">
                <Image
                  src="/profil.jpg"
                  alt="Alfi Fauzi"
                  fill
                  sizes="(min-width: 768px) 448px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-8 px-5 py-4 rounded-[var(--radius-md)] backdrop-blur-xl drift"
              style={{ background: "rgba(18,18,24,0.85)", border: "1px solid var(--border-medium)", boxShadow: "var(--shadow-lg)" }}
            >
              <p className="text-2xl font-bold gradient-text leading-none">3.75</p>
              <p className="text-[10px] mt-1.5 uppercase tracking-wider" style={{ color: "var(--text-tertiary)" }}>
                GPA / 4.00
              </p>
            </div>

            <div
              className="absolute -top-5 -right-6 flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-xl"
              style={{ background: "rgba(18,18,24,0.85)", border: "1px solid var(--border-medium)", boxShadow: "var(--shadow-md)" }}
            >
              <span className="w-2 h-2 rounded-full flow-node" style={{ background: "#4ade80" }} />
              <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                Open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
