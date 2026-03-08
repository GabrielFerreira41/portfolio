import ProjectCard from "@/components/ProjectCard";
import { projectsPerso } from "@/data/projects.perso";

export default function ProjetsPersonnelsPage() {
  return (
    <main className="min-h-screen bg-transparent text-udem-navy">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-udem-navy/60">Projets</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Projets personnels
              </h1>
            </div>

            {/* Badge visuel */}
            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🚀</span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">Projets perso</p>
                <p className="text-xs text-udem-navy/60">produit • dashboards • expérimentation</p>
              </div>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-udem-navy/70">
            Initiatives perso orientées produit : apps, dashboards, NLP/LLM, MLOps.
          </p>

          {/* Chips thématiques */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { t: "Dashboards", i: "📊" },
              { t: "Data Viz", i: "📈" },
              { t: "NLP / LLM", i: "🗣️" },
              { t: "MLOps", i: "⚙️" },
            ].map(({ t, i }) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">
                  {i}
                </span>
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projectsPerso.map((p) => (
              <ProjectCard
                key={p.slug}
                project={p}
                href={`/projets-personnels/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}