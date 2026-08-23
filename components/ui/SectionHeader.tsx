interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  sub,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`scroll-animate max-w-2xl ${alignCls} ${className}`}>
      <div className="inline-flex items-center gap-3">
        <span className="h-[2px] w-6 rounded-full" style={{ backgroundImage: "var(--accent-gradient)" }} />
        <span
          className="text-xs uppercase tracking-[0.25em] font-semibold"
          style={{ color: "var(--accent-violet)" }}
        >
          {eyebrow}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight leading-[1.1]">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 text-base md:text-lg" style={{ color: "var(--text-secondary)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
