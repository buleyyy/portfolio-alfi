import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import { contact, footer } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <SiGithub />,
  LinkedIn: <SiLinkedin />,
  Instagram: <SiInstagram />,
};

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <p className="text-lg font-bold">{footer.name}</p>
          <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
            {footer.positioning}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm mt-3 hover:text-white transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            <SiGmail className="w-3.5 h-3.5" />
            {contact.email}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {contact.social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{
                border: "1px solid var(--border-medium)",
                color: "var(--text-secondary)",
              }}
            >
              {iconMap[s.label]}
            </a>
          ))}
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          © 2026 {footer.name}. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          Freelance via Fiverr &amp; Fastwork
        </p>
      </div>
    </footer>
  );
}
