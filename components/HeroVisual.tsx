// Abstract "digital system" visual for the hero — nodes, connecting
// lines, and dashboard-inspired fragments. No stock illustration,
// no meaningless 3D object; every shape maps to the IDEA → DESIGN →
// SYSTEM → DATA → RESULT motif.

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md aspect-square drift" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="55%" stopColor="#8b7cf6" />
            <stop offset="100%" stopColor="#4f8dfd" />
          </linearGradient>
        </defs>

        {/* connecting lines */}
        <path
          d="M 60 320 C 120 300, 140 200, 200 190 S 300 120, 340 80"
          fill="none"
          stroke="url(#flowGrad)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          className="flow-line"
        />
        <path
          d="M 80 90 C 130 130, 150 160, 200 190 S 280 260, 330 300"
          fill="none"
          stroke="url(#flowGrad)"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          className="flow-line"
          style={{ animationDelay: "1s" }}
        />

        {/* nodes */}
        <circle cx="60" cy="320" r="5" fill="#4f8dfd" className="flow-node" />
        <circle cx="200" cy="190" r="6" fill="#8b7cf6" className="flow-node" style={{ animationDelay: "0.5s" }} />
        <circle cx="340" cy="80" r="5" fill="#6366f1" className="flow-node" style={{ animationDelay: "1s" }} />
        <circle cx="80" cy="90" r="4" fill="#6366f1" className="flow-node" style={{ animationDelay: "1.5s" }} />
        <circle cx="330" cy="300" r="4" fill="#4f8dfd" className="flow-node" style={{ animationDelay: "2s" }} />

        {/* dashboard-inspired fragments */}
        <rect x="230" y="150" width="70" height="46" rx="8" fill="rgba(139,124,246,0.06)" stroke="rgba(139,124,246,0.25)" strokeWidth="1" />
        <rect x="240" y="160" width="34" height="4" rx="2" fill="rgba(139,124,246,0.4)" />
        <rect x="240" y="170" width="50" height="3" rx="1.5" fill="rgba(242,241,238,0.15)" />
        <rect x="240" y="178" width="24" height="10" rx="3" fill="rgba(79,141,253,0.15)" />

        <rect x="95" y="215" width="60" height="60" rx="10" fill="rgba(79,141,253,0.05)" stroke="rgba(79,141,253,0.2)" strokeWidth="1" />
        <path d="M 105 260 L 118 245 L 130 252 L 145 225" fill="none" stroke="rgba(139,124,246,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
