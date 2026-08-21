"use client";

import { useState } from "react";
import type { Project } from "@/lib/content";
import ProjectVisual from "@/components/ProjectVisual";
import AliNurseryGallery from "@/components/AliNurseryGallery";
import { FiUsers, FiClipboard, FiBarChart2, FiPlus, FiExternalLink } from "react-icons/fi";

const aliNurseryFeatures = [
  {
    icon: FiUsers,
    title: "Customer Ordering Flow",
    desc: "Customers can securely log in, browse products, view real-time stock availability, complete checkout, and track their orders from a single web interface.",
  },
  {
    icon: FiClipboard,
    title: "Admin Order Management",
    desc: "Administrators verify payments, manage incoming orders, update order status, and monitor inventory through a centralized dashboard.",
  },
  {
    icon: FiBarChart2,
    title: "Sales Reporting",
    desc: "The system generates structured sales reports with Excel export functionality to support operational monitoring and business decision-making.",
  },
];

const kindLabel: Record<Project["kind"], string> = {
  system: "Digital System",
  data: "Data & Analytics",
  brand: "Brand & Experience",
};

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((t) => (
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
  );
}

export default function ProjectCard({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const isAliNursery = project.slug === "ali-nursery";

  return (
    <article
      className={`scroll-animate rounded-[var(--radius-lg)] overflow-hidden card-lift ${
        project.kind === "brand" ? "surface-raised" : "surface"
      }`}
    >
      {/* ===== Top: visual + copy, side by side ===== */}
      <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-center">
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
              {kindLabel[project.kind]}
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="cursor-pointer text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
            style={{ color: "var(--text-primary)" }}
          >
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-[var(--dur-fast)]"
              style={{
                border: "1px solid var(--border-medium)",
                transform: open ? "rotate(45deg)" : "none",
              }}
            >
              <FiPlus size={10} />
            </span>
            {open ? "Hide case study" : "View case study"}
          </button>

          <StackChips stack={project.stack} />
        </div>
      </div>

      {/* ===== Expanded case study: full width below ===== */}
      {open && (
        <div
          className="px-7 md:px-10 pb-8 md:pb-10 pt-8 space-y-10"
          style={{
            borderTop: "1px solid var(--border-subtle)",
            animation: "fadeIn var(--dur-base) var(--ease-out)",
          }}
        >
          {/* Feature / system cards */}
          {isAliNursery ? (
            <div className="grid sm:grid-cols-3 gap-4">
              {aliNurseryFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-[var(--radius-md)] p-5 card-lift"
                  style={{
                    background: "var(--bg-elevated-2)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-[var(--radius-sm)] flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(139,124,246,0.12)",
                      color: "var(--accent-violet)",
                    }}
                  >
                    <f.icon size={16} />
                  </div>
                  <h4 className="text-sm font-bold">{f.title}</h4>
                  <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Solution", body: project.solutionSolution },
                { title: "Role", body: project.role },
                { title: "Outcome", body: project.outcome },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-[var(--radius-md)] p-5 card-lift sm:col-span-1 md:col-span-1"
                  style={{
                    background: "var(--bg-elevated-2)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <p className="text-[11px] uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--text-tertiary)" }}>
                    {f.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {f.body}
                  </p>
                </div>
              ))}
              <div
                className="rounded-[var(--radius-md)] p-5 card-lift"
                style={{
                  background: "var(--bg-elevated-2)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <p className="text-[11px] uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--text-tertiary)" }}>
                  System
                </p>
                <ul className="space-y-1">
                  {project.system.slice(0, 3).map((s) => (
                    <li key={s} className="text-xs flex gap-1.5" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--accent-violet)" }}>—</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {isAliNursery && (
            <div className="space-y-4">
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
          )}

          {/* Tech stack */}
          <div>
            <p className="text-[11px] uppercase tracking-widest font-semibold mb-3" style={{ color: "var(--text-tertiary)" }}>
              Tech Stack
            </p>
            <StackChips stack={project.stack} />
          </div>

          {/* Reports link — Drive folder, only if provided */}
          {project.reportsLink && (
            <div>
              <a
                href={project.reportsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-[var(--radius-sm)] transition-colors"
                style={{
                  background: "var(--bg-elevated-2)",
                  border: "1px solid var(--border-medium)",
                  color: "var(--text-primary)",
                }}
              >
                <FiExternalLink size={14} />
                View Reports on Drive
              </a>
            </div>
          )}

          {/* Project preview gallery — Ali Nursery only, real screenshots */}
          {isAliNursery && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--accent-violet)" }}
                />
                <p className="text-[11px] uppercase tracking-widest font-bold" style={{ color: "var(--text-primary)" }}>
                  Project Preview
                </p>
              </div>
              <AliNurseryGallery />
            </div>
          )}
        </div>
      )}
    </article>
  );
}
