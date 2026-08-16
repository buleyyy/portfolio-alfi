import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Business problems, <span className="gradient-text">turned into products.</span>
            </>
          }
          sub="Three projects across full-stack systems, data analytics, and brand experience."
        />

        <div className="mt-16 space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
