import SectionHeader from "@/components/ui/SectionHeader";
import { aboutStory, organizations, education, otherProjects } from "@/lib/content";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div
        className="absolute top-1/3 left-[-8%] w-[480px] h-[480px] blur-[150px] rounded-full pointer-events-none"
        style={{ background: "rgba(139,124,246,0.06)" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Intro: sidebar title + progression/paragraphs, aligned side by side */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <SectionHeader eyebrow="About" title="Information Systems student, building digital products." />
          </div>

          <div className="md:col-span-9 space-y-8">
            {/* Progression flow */}
            <div className="scroll-animate flex flex-wrap items-center gap-x-2 gap-y-3">
              {aboutStory.progression.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span
                    className="text-xs md:text-sm font-medium px-3.5 py-1.5 rounded-full"
                    style={{
                      border: "1px solid var(--border-medium)",
                      color: i === aboutStory.progression.length - 1 ? "var(--text-primary)" : "var(--text-secondary)",
                      background: i === aboutStory.progression.length - 1 ? "var(--bg-elevated-2)" : "transparent",
                    }}
                  >
                    {step}
                  </span>
                  {i < aboutStory.progression.length - 1 && (
                    <span style={{ color: "var(--accent-violet)" }} className="text-xs">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>

            <div className="scroll-animate delay-100 space-y-5">
              {aboutStory.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === aboutStory.paragraphs.length - 1
                      ? "text-lg font-semibold"
                      : "text-base leading-relaxed"
                  }
                  style={{ color: i === aboutStory.paragraphs.length - 1 ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Below: full-width sections, no sidebar column */}
        <div className="mt-16 md:mt-20 space-y-12">

          {/* Education */}
          <div className="scroll-animate delay-100 space-y-3">
            <p className="text-[11px] uppercase tracking-widest font-semibold" style={{ color: "var(--text-tertiary)" }}>
              Education
            </p>
            <div
              className="rounded-[var(--radius-md)] p-5 md:p-6 card-lift relative overflow-hidden"
              style={{ background: "var(--bg-elevated-2)", border: "1px solid var(--border-subtle)" }}
            >
              <span className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundImage: "var(--accent-gradient)" }} />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-sm font-bold">{education.school}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{education.degree}</p>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-md"
                  style={{ background: "rgba(139,124,246,0.12)", color: "var(--accent-violet)" }}
                >
                  GPA {education.gpa}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {education.courses.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{ color: "var(--text-tertiary)", border: "1px solid var(--border-subtle)" }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Organizational experience */}
          <div className="scroll-animate delay-100 space-y-3">
            <p className="text-[11px] uppercase tracking-widest font-semibold" style={{ color: "var(--text-tertiary)" }}>
              Organizational Experience
            </p>
            <div className="space-y-4">
              {organizations.map((o) => (
                <div
                  key={o.role}
                  className="rounded-[var(--radius-md)] p-5 md:p-6 card-lift relative overflow-hidden"
                  style={{ background: "var(--bg-elevated-2)", border: "1px solid var(--border-subtle)" }}
                >
                  <span className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundImage: "var(--accent-gradient)" }} />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <p className="text-sm font-bold">{o.role}</p>
                    <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{o.period}</span>
                  </div>
                  <p className="text-sm mt-0.5" style={{ color: "var(--accent-blue)" }}>{o.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {o.points.map((pt) => (
                      <li key={pt} className="text-sm flex gap-2" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent-violet)" }}>—</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {o.photos && o.photos.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {o.photos.map((src) => (
                        <div
                          key={src}
                          className="relative aspect-[4/3] rounded-[var(--radius-sm)] overflow-hidden"
                          style={{ border: "1px solid var(--border-subtle)" }}
                        >
                          <Image src={src} alt={o.org} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Other projects */}
          <div className="scroll-animate delay-100 space-y-3">
            <p className="text-[11px] uppercase tracking-widest font-semibold" style={{ color: "var(--text-tertiary)" }}>
              Other Projects
            </p>
            <div className="space-y-4">
              {otherProjects.map((p) => (
                <div
                  key={p.title}
                  className="rounded-[var(--radius-md)] p-5 md:p-6 card-lift relative overflow-hidden"
                  style={{ background: "var(--bg-elevated-2)", border: "1px solid var(--border-subtle)" }}
                >
                  <span className="absolute top-0 left-0 right-0 h-[2px]" style={{ backgroundImage: "var(--accent-gradient)" }} />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold">{p.title}</p>
                      <p className="text-sm mt-0.5" style={{ color: "var(--accent-blue)" }}>{p.tagline}</p>
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-2 rounded-[var(--radius-sm)] shrink-0 transition-all duration-[var(--dur-fast)] hover:-translate-y-0.5"
                        style={{
                          background: "var(--bg-elevated-3, rgba(255,255,255,0.04))",
                          border: "1px solid var(--border-medium)",
                          color: "var(--text-primary)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(139,124,246,0.4)";
                          e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-medium)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <FiExternalLink size={13} />
                        Open Handbook
                      </a>
                    )}
                  </div>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {p.desc}
                  </p>
                  {p.categories && (
                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      {p.categories.map((cat) => (
                        <div
                          key={cat.label}
                          className="rounded-[var(--radius-sm)] p-4"
                          style={{ border: "1px solid var(--border-subtle)" }}
                        >
                          <p className="text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: "var(--accent-violet)" }}>
                            {cat.label}
                          </p>
                          <ul className="space-y-1">
                            {cat.items.map((item) => (
                              <li key={item} className="text-xs leading-relaxed flex gap-1.5" style={{ color: "var(--text-secondary)" }}>
                                <span style={{ color: "var(--text-tertiary)" }}>·</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
