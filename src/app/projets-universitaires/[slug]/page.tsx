import { notFound } from "next/navigation";
import { projectsUniv } from "@/data/projects.univ";
import { projectsUnivDetails } from "@/data/projects.univ.details";

export default function ProjetUniversitaireDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsUniv.find((p) => p.slug === params.slug);
  const detail = projectsUnivDetails[params.slug];

  if (!project || !detail) return notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-sm text-white/60">Projet universitaire</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-3 text-white/75">{project.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-medium text-white/80">TL;DR</p>
          <p className="mt-2 text-white/75">{detail.tl_dr}</p>
        </div>

        {project.impact ? (
          <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6">
            <p className="text-sm font-medium text-white/80">Résultat clé</p>
            <p className="mt-2 text-white/75">{project.impact}</p>
          </div>
        ) : null}

        <div className="mt-8 space-y-6">
          {detail.sections.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                {s.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {detail.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.links?.length ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold tracking-tight">Liens</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}