import Link from "next/link";
import type { Project } from "@/data/projects.univ";

export default function ProjectCard({
  project,
  href,
}: {
  project: Project;
  href: string;
}) {
  return (
    <div className="relative rounded-2xl border border-udem-blue/15 bg-white p-6 hover:border-udem-blue/40">
      {/* Whole card clickable (overlay link) */}
      <Link
        href={href}
        aria-label={`Voir le détail : ${project.title}`}
        className="absolute inset-0 rounded-2xl z-10 block"
      >
        <span className="sr-only">Voir le détail</span>
      </Link>

      {/* Content sits above but doesn't block clicks */}
      <article className="relative z-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-udem-navy/70">{project.subtitle}</p>
          </div>

          {project.year ? (
            <span className="shrink-0 rounded-full border border-udem-blue/20 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70">
              {project.year}
            </span>
          ) : null}
        </div>

        {project.description ? (
          <p className="mt-3 text-sm text-udem-navy/70">{project.description}</p>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70"
            >
              {t}
            </span>
          ))}
        </div>

        {project.impact ? (
          <p className="mt-4 text-sm text-udem-navy/80">
            <span className="text-udem-navy/60">Impact :</span> {project.impact}
          </p>
        ) : null}

        {/* External links must remain clickable above overlay */}
        {project.links?.length ? (
          <div className="relative z-20 mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-udem-blue underline-offset-4 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        ) : null}

        <p className="mt-5 text-sm font-medium text-udem-blue">Voir le détail →</p>
      </article>
    </div>
  );
}