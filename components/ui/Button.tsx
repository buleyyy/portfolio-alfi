import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  download,
  external,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-[var(--radius-sm)] text-sm font-semibold transition-all duration-[var(--dur-fast)] group";

  const styles =
    variant === "primary"
      ? "text-white shadow-[var(--shadow-accent)] hover:shadow-[0_0_0_1px_rgba(139,124,246,0.35),0_16px_50px_rgba(99,102,241,0.2)] hover:-translate-y-0.5"
      : "border border-[var(--border-medium)] text-[var(--text-primary)] hover:border-[var(--accent-violet)]/40 hover:bg-white/[0.03] hover:-translate-y-0.5";

  const bg =
    variant === "primary"
      ? { backgroundImage: "var(--accent-gradient)" }
      : undefined;

  return (
    <Link
      href={href}
      style={bg}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <span className="transition-transform duration-[var(--dur-fast)] group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
