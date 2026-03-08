import Hero from "@/components/Hero";
import TimelineSection from "@/components/TimelineSection";
import TechCluster from "@/components/techCluster";
import { profile } from "@/data/profile";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-udem-navy">
      <Hero />

      {/* Proof cards (recruteur) */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-udem-blue/15 bg-white/90 p-5 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
            <p className="text-sm text-udem-navy/60">Objectif</p>
            <p className="mt-2 text-udem-navy">
              {profile.title}
              <span className="block text-udem-navy/60">{profile.location}</span>
            </p>
          </div>

          <div className="rounded-2xl border border-udem-blue/15 bg-white/90 p-5 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
            <p className="text-sm text-udem-navy/60">Contact</p>
            <div className="mt-2 space-y-1 text-udem-navy">
              <p>{profile.contact.email}</p>
              <p>{profile.contact.phone}</p>
              <p className="text-udem-navy/60">{profile.contact.address}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-udem-blue/15 bg-white/90 p-5 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
            <p className="text-sm text-udem-navy/60">Highlights</p>
            <p className="mt-2 text-udem-navy">{profile.highlights[0]?.label}</p>
            <p className="mt-1 text-sm text-udem-navy/60 line-clamp-3">
              {profile.highlights[0]?.value}
            </p>
          </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <TechCluster title="Stack technique" items={profile.stack} variant="cluster" />
        </div>

        <div className="mt-6 rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <TimelineSection items={profile.timeline} />
        </div>

        <div className="mt-6 rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
        {/* Section “Mes projets” */}
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Mes projets</h2>
            <p className="mt-1 text-sm text-udem-navy/60">
              Tous mes projets (universitaires + personnels), avec code, résultats et détails.
            </p>
          </div>

          <a
            href="/projets-universitaires"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-xl bg-udem-blue px-4 py-2 text-sm font-medium text-white shadow-[0_10px_20px_rgba(0,87,172,0.20)] hover:opacity-90 md:mt-0"
          >
            Voir tous les projets →
          </a>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <a
            href="/projets-universitaires"
            className="group rounded-2xl border border-udem-blue/15 bg-white/90 p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40"
          >
            <p className="text-sm text-udem-navy/60">Onglet</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-udem-navy">
              Projets universitaires
            </p>
            <p className="mt-2 text-sm text-udem-navy/70">
              Projets de cours et de maîtrise : data pipelines, modélisation, évaluation,
              reproductibilité.
            </p>
            <p className="mt-4 text-sm font-medium text-udem-blue group-hover:opacity-90">
              Explorer →
            </p>
          </a>

          <a
            href="/projets-personnels"
            className="group rounded-2xl border border-udem-blue/15 bg-white/90 p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40"
          >
            <p className="text-sm text-udem-navy/60">Onglet</p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-udem-navy">
              Projets personnels
            </p>
            <p className="mt-2 text-sm text-udem-navy/70">
              Initiatives perso : apps, dashboards, NLP, MLOps — orientés produit et impact.
            </p>
            <p className="mt-4 text-sm font-medium text-udem-blue group-hover:opacity-90">
              Explorer →
            </p>
          </a>
        </div>

        {/* CTA footer */}
        <div className="mt-10 rounded-2xl border border-udem-blue/15 bg-white/90 p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-udem-navy/60">Disponibilité</p>
              <p className="mt-1 text-udem-navy">Stage Data Science / AI — Été 2026 (6–8 mois)</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {profile.ctas.map((c) => {
                const isCv = c.href === "/cv.pdf";
                return (
                  <a
                    key={c.href}
                    href={c.href}
                    {...(isCv ? { download: "Gabriel_Ferreira_CV.pdf" } : {})}
                    className={`rounded-xl px-4 py-2 text-sm font-medium ${
                      isCv
                        ? "bg-udem-blue text-white hover:opacity-90"
                        : "border border-udem-blue/20 bg-white text-udem-blue hover:bg-udem-mist"
                    }`}
                  >
                    {c.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            {profile.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-udem-blue underline-offset-4 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}