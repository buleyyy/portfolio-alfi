import type { ProjectKind } from "@/lib/content";

// Abstract, kind-specific visual treatment so projects don't all
// look identical. "system" reads as architecture, "data" reads as
// a dashboard, "brand" reads as an editorial swatch/identity block.
// These are placeholders — swap for real screenshots when available.

export default function ProjectVisual({ kind }: { kind: ProjectKind }) {
  if (kind === "system") {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
        <rect x="0" y="0" width="400" height="260" fill="rgba(99,102,241,0.04)" />
        <g stroke="rgba(139,124,246,0.35)" strokeWidth="1" className="flow-line">
          <line x1="70" y1="60" x2="200" y2="130" />
          <line x1="200" y1="130" x2="330" y2="60" />
          <line x1="200" y1="130" x2="200" y2="210" />
        </g>
        <circle cx="70" cy="60" r="5" fill="#6366f1" className="flow-node" />
        <circle cx="330" cy="60" r="5" fill="#4f8dfd" className="flow-node" style={{ animationDelay: "0.6s" }} />
        <circle cx="200" cy="130" r="7" fill="#8b7cf6" className="flow-node" style={{ animationDelay: "0.3s" }} />
        <circle cx="200" cy="210" r="5" fill="#6366f1" className="flow-node" style={{ animationDelay: "0.9s" }} />
        <rect x="45" y="40" width="50" height="30" rx="5" fill="none" stroke="rgba(242,241,238,0.15)" />
        <rect x="305" y="40" width="50" height="30" rx="5" fill="none" stroke="rgba(242,241,238,0.15)" />
        <rect x="175" y="190" width="50" height="30" rx="5" fill="none" stroke="rgba(242,241,238,0.15)" />
      </svg>
    );
  }

  if (kind === "data") {
    return (
      <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
        <rect x="0" y="0" width="400" height="260" fill="rgba(79,141,253,0.04)" />
        <g stroke="rgba(79,141,253,0.3)" strokeWidth="1">
          <line x1="40" y1="40" x2="40" y2="220" />
          <line x1="40" y1="220" x2="370" y2="220" />
        </g>
        <polyline
          points="60,180 110,150 160,165 210,110 260,130 310,70 350,90"
          fill="none"
          stroke="url(#dataGrad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="dataGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#4f8dfd" />
          </linearGradient>
        </defs>
        {[60, 110, 160, 210, 260, 310, 350].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={[180, 150, 165, 110, 130, 70, 90][i]}
            r="3.5"
            fill="#8b7cf6"
            className="flow-node"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        <rect x="270" y="35" width="90" height="46" rx="8" fill="rgba(139,124,246,0.06)" stroke="rgba(139,124,246,0.2)" />
        <rect x="280" y="45" width="30" height="4" rx="2" fill="rgba(139,124,246,0.4)" />
        <rect x="280" y="55" width="50" height="14" rx="3" fill="rgba(79,141,253,0.15)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 260" className="w-full h-full" aria-hidden="true">
      <rect x="0" y="0" width="400" height="260" fill="rgba(217,158,90,0.05)" />
      <rect x="40" y="40" width="90" height="90" rx="4" fill="rgba(196,140,90,0.35)" />
      <rect x="145" y="40" width="90" height="90" rx="4" fill="rgba(139,124,246,0.2)" />
      <rect x="250" y="40" width="90" height="90" rx="4" fill="rgba(120,100,70,0.4)" />
      <line x1="40" y1="160" x2="340" y2="160" stroke="rgba(242,241,238,0.15)" />
      <text x="40" y="195" fill="rgba(242,241,238,0.55)" fontSize="13" fontFamily="var(--font-sans)" letterSpacing="2">
        KOPI UMBARA
      </text>
      <text x="40" y="215" fill="rgba(242,241,238,0.3)" fontSize="9" fontFamily="var(--font-sans)" letterSpacing="3">
        BRAND IDENTITY
      </text>
    </svg>
  );
}
