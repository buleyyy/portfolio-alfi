import type { Project } from "@/lib/content";
import ProjectVisual from "@/components/ProjectVisual";

export default function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article
      className={`scroll-animate grid md:grid-cols-2 gap-0 md:gap-12 items-center rounded-[var(--radius-lg)] overflow-hidden card-lift ${
        project.kind === "brand" ? "surface-raised" : "surface"
      }`}
    >
      <div
        className={`aspect-[16/10] md:aspect-auto md:h-full ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <ProjectVisual kind={project.kind} image={project.image} name={project.name} />
      </div>

      <div className="p-7 md:p-10 space-y-5">
        <div className="flex items-baseline gap-3">
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: "var(--accent-violet)" }}
          >
            {project.index}
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
            style={{
              border: "1px solid var(--border-medium)",
              color: "var(--text-tertiary)",
            }}
          >
            {project.kind === "system"
              ? "Digital System"
              : project.kind === "data"
              ? "Data & Analytics"
              : "Brand & Experience"}
          </span>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.name}</h3>
          <p className="text-sm mt-1" style={{ color: "var(--accent-blue)" }}>
            {project.tagline}
          </p>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {project.problem}
        </p>

        <details className="group">
          <summary
            className="cursor-pointer text-xs font-semibold uppercase tracking-wider list-none flex items-center gap-2"
            style={{ color: "var(--text-primary)" }}
          >
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] transition-transform group-open:rotate-45"
              style={{ border: "1px solid var(--border-medium)" }}
            >
              +
            </span>
            View case study
          </summary>

          <div className="mt-5 space-y-4 pt-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-tertiary)" }}>
                Solution
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.solutionSolution}
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-tertiary)" }}>
                System
              </p>
              <ul className="space-y-1.5">
                {project.system.map((s) => (
                  <li key={s} className="text-sm flex gap-2" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--accent-violet)" }}>—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-tertiary)" }}>
                Role
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{project.role}</p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest font-semibold mb-1.5" style={{ color: "var(--text-tertiary)" }}>
                Outcome
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.outcome}
              </p>
            </div>
          </div>
        </details>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1.5 rounded-md"
              style={{
                background: "var(--bg-elevated-2)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
