import { trust } from "@/lib/content";
import { FiAward, FiGithub, FiBookOpen } from "react-icons/fi";

const iconMap: Record<string, typeof FiAward> = {
  GPA: FiAward,
  GitHub: FiGithub,
  Institution: FiBookOpen,
};

export default function TrustProof() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {trust.map((item, i) => {
          const Icon = iconMap[item.label] ?? FiAward;
          const content = (
            <div
              className="flex items-center gap-4 h-full rounded-[var(--radius-md)] p-5 md:p-6 card-lift"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)" }}
            >
              <div
                className="w-10 h-10 shrink-0 rounded-[var(--radius-sm)] flex items-center justify-center"
                style={{ background: "rgba(139,124,246,0.12)", color: "var(--accent-violet)" }}
              >
                <Icon size={17} />
              </div>
              <div>
                <p className="text-base md:text-lg font-bold gradient-text leading-tight">{item.value}</p>
                <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: "var(--text-tertiary)" }}>
                  {item.label}
                </p>
              </div>
            </div>
          );
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`scroll-animate delay-${i * 100}`}
            >
              {content}
            </a>
          ) : (
            <div key={item.label} className={`scroll-animate delay-${i * 100}`}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
