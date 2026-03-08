import ProjectCard from "@/components/ProjectCard";
import { projectsUniv } from "@/data/projects.univ";

export default function ProjetsUniversitairesPage() {
  return (
    <main className="min-h-screen bg-transparent text-udem-navy">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <p className="text-sm text-udem-navy/60">Projets</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Projets universitaires
          </h1>
          <p className="mt-3 max-w-2xl text-udem-navy/70">
            Projets de cours et de maîtrise : data pipelines, modélisation,
            évaluation, reproductibilité et déploiement.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projectsUniv.map((p) => (
              <ProjectCard
                key={p.slug}
                project={p}
                href={`/projets-universitaires/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}