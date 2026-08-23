import SectionHeader from "@/components/ui/SectionHeader";
import { capabilities } from "@/lib/content";
import { FiCode, FiLayers, FiBarChart2, FiFigma } from "react-icons/fi";

const iconMap: Record<string, typeof FiCode> = {
  code: FiCode,
  layers: FiLayers,
  chart: FiBarChart2,
  figma: FiFigma,
};

export default function Capabilities() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[140px] rounded-full pointer-events-none"
        style={{ background: "rgba(139,124,246,0.05)" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="What I Do"
          title={
            <>
              Capabilities built around <span className="gradient-text">outcomes.</span>
            </>
          }
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {capabilities.map((c, i) => {
            const Icon = iconMap[c.icon] ?? FiCode;
            return (
              <div
                key={c.title}
                className={`scroll-animate delay-${(i % 4) * 100} surface rounded-[var(--radius-lg)] p-8 card-lift relative overflow-hidden group`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--dur-base)] pointer-events-none"
                  style={{ background: "radial-gradient(circle at 85% 15%, rgba(139,124,246,0.10), transparent 60%)" }}
                />
                <span
                  className="absolute top-6 right-7 text-4xl font-bold select-none"
                  style={{ color: "var(--border-medium)" }}
                >
                  0{i + 1}
                </span>
                <div
                  className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center mb-5 relative z-10"
                  style={{ backgroundImage: "var(--accent-gradient)" }}
                >
                  <Icon size={19} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 relative z-10">{c.title}</h3>
                <p className="text-sm leading-relaxed relative z-10" style={{ color: "var(--text-secondary)" }}>
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
