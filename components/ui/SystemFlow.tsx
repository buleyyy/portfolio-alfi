// Shared "Idea → Design → System → Data → Result" visual motif.
// Kept minimal and reused across the site so it reads as one
// coherent visual language rather than a decorative one-off.

export function FlowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full flow-node" style={{ background: "var(--accent-violet)" }} />
      <span className="flex-1 h-px" style={{ background: "var(--border-medium)" }} />
      <span className="w-1.5 h-1.5 rounded-full flow-node" style={{ background: "var(--accent-blue)", animationDelay: "1.5s" }} />
    </div>
  );
}

export function FlowConnector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 4"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="2"
        x2="100"
        y2="2"
        stroke="var(--accent-indigo)"
        strokeOpacity="0.35"
        strokeWidth="1"
        className="flow-line"
      />
    </svg>
  );
}
