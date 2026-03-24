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
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Projets récents</h2>
              <p className="mt-1 text-sm text-udem-navy/60">
                Un aperçu rapide — clique sur un projet pour voir la section correspondante.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">✨</span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">Dernières mises à jour</p>
                <p className="text-xs text-udem-navy/60">résultats • dashboards • NLP</p>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="marquee mt-6 overflow-hidden rounded-2xl border border-udem-blue/15 bg-white/70 backdrop-blur-md shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
            <div className="marquee-track flex w-max items-center gap-6 px-6 py-5">
              {[
                { title: "AirI", src: "/stacks/nextjs.png", href: "/projets-personnels/airl" },
                { title: "NHL", src: "/logos/NHLlogo.png", href: "/projets-universitaires" },
                { title: "NLP / IE", src: "/stacks/spacy.webp", href: "/projets-universitaires" },
                { title: "Looker Studio (F1)", src: "/logos/F1logo.png", href: "/projets-personnels" },
                { title: "Hugging Face", src: "/stacks/huggingface.png", href: "/projets-universitaires" },
                { title: "Hackathon Mila", src: "/logos/mila-wordmark.svg", href: "/projets-personnels/hackathon-mila-sante-mentale" },
              ].map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  className="group inline-flex items-center gap-3 rounded-2xl border border-udem-blue/15 bg-white/85 px-4 py-3 shadow-[0_6px_16px_rgba(11,17,58,0.06)] hover:border-udem-blue/35"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-white">
                    <img src={p.src} alt="" className="h-7 w-7 object-contain" />
                  </span>
                  <span className="text-sm font-medium text-udem-navy/80 group-hover:text-udem-navy">
                    {p.title}
                  </span>
                </a>
              ))}

              {/* Duplicate for seamless loop */}
              {[
                { title: "AirI", src: "/stacks/nextjs.png", href: "/projets-personnels/airl" },
                { title: "NHL", src: "/logos/NHLlogo.png", href: "/projets-universitaires" },
                { title: "NLP / IE", src: "/stacks/spacy.webp", href: "/projets-universitaires" },
                { title: "Looker Studio (F1)", src: "/logos/F1logo.png", href: "/projets-personnels" },
                { title: "Hugging Face", src: "/stacks/huggingface.png", href: "/projets-universitaires" },
                { title: "Hackathon Mila", src: "/logos/mila-wordmark.svg", href: "/projets-personnels/hackathon-mila-sante-mentale" },
              ].map((p) => (
                <a
                  key={`${p.title}-dup`}
                  href={p.href}
                  className="group inline-flex items-center gap-3 rounded-2xl border border-udem-blue/15 bg-white/85 px-4 py-3 shadow-[0_6px_16px_rgba(11,17,58,0.06)] hover:border-udem-blue/35"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-white">
                    <img src={p.src} alt="" className="h-7 w-7 object-contain" />
                  </span>
                  <span className="text-sm font-medium text-udem-navy/80 group-hover:text-udem-navy">
                    {p.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <p className="mt-3 text-xs text-udem-navy/55">
            Astuce : survole pour mettre en pause le défilement.
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-udem-navy/60">Compétences</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Stack technique</h2>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🧰</span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">Outils & frameworks</p>
                <p className="text-xs text-udem-navy/60">ML • viz • web • data</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {[
              { t: "ML / Deep Learning", i: "🧠" },
              { t: "Data", i: "🗄️" },
              { t: "Viz", i: "📊" },
              { t: "Web", i: "🌐" },
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

          <div className="mt-6">
            <TechCluster title="" items={profile.stack} variant="cluster" />
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-udem-navy/60">Parcours</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">Timeline</h2>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🧭</span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">Étapes clés</p>
                <p className="text-xs text-udem-navy/60">études • événements</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <TimelineSection
              title=""
              showHeader={false}
              items={profile.timeline}
              className="mt-0"
              cardClassName="mt-0"
            />
          </div>
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
          <div id="contact" className="mt-10 rounded-2xl border border-udem-blue/15 bg-white/90 p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
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