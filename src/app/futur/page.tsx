export default function FuturPage() {
    return (
      <main className="min-h-screen bg-transparent text-udem-navy">
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-udem-navy/60">Objectifs</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Futur</h1>
            </div>

            {/* Badge visuel */}
            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🎯</span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">Plan de carrière</p>
                <p className="text-xs text-udem-navy/60">court → moyen → long terme</p>
              </div>
            </div>
          </div>

          <p className="mt-3 max-w-2xl text-udem-navy/70">
            Ça fait un an que je suis au Québec. Mon objectif à court terme est de trouver un stage, puis de rester ici pour travailler et gagner en expérience. Ensuite, pourquoi pas continuer l’aventure aux États-Unis ou revenir en France.
          </p>

          {/* Mini timeline */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">📍</span>
              Québec (1 an)
            </span>
            <span className="text-udem-navy/40">→</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">🧑‍💼</span>
              Stage
            </span>
            <span className="text-udem-navy/40">→</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">🏢</span>
              Travail au Québec
            </span>
            <span className="text-udem-navy/40">→</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">🌍</span>
              USA / France
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🧭</span>
                <h2 className="text-lg font-semibold tracking-tight">Objectif (court → moyen terme)</h2>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-udem-navy/75">
                <li>Court terme : décrocher un stage en Data Science / Machine Learning / NLP (dès mai 2026, 6–8 mois).</li>
                <li>Moyen terme : rester au Québec pour travailler après le stage et consolider mes bases en industrie.</li>
                <li>Long terme : ouvrir la porte à une suite possible aux États-Unis ou en France, selon les opportunités.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🧩</span>
                <h2 className="text-lg font-semibold tracking-tight">Domaines</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { t: "Data Engineer", i: "🛠️" },
                  { t: "Data Scientist", i: "📊" },
                  { t: "Data Visualization", i: "📈" },
                ].map(({ t, i }) => (
                  <span
                    key={t}
                    className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70"
                  >
                    <span className="mr-1">{i}</span>
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-udem-navy/75">
                Je m’oriente vers des rôles orientés data (ingénierie, science des données, visualisation) où je peux construire des pipelines propres, analyser, et raconter une histoire claire avec les données.
              </p>
            </div>
          </div>
          </div>
        </section>
      </main>
    );
  }