export default function SportPage() {
    return (
      <main className="min-h-screen bg-transparent text-udem-navy">
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-udem-navy/60">À propos</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight">Sport</h1>
              </div>

              <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🏃‍♂️</span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-udem-navy">Équilibre</p>
                  <p className="text-xs text-udem-navy/60">discipline • régularité • progression</p>
                </div>
              </div>
            </div>

            <p className="mt-3 max-w-2xl text-udem-navy/70">
              Le sport est une partie importante de mon équilibre : discipline, régularité, progression.
            </p>

            {/* Mini timeline */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">🎾</span>
                Tennis · 9 ans
              </span>
              <span className="text-udem-navy/40">•</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">🥋</span>
                Judo · 7 ans
              </span>
              <span className="text-udem-navy/40">•</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">🥊</span>
                Boxe · 1+ mois
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🎾</span>
                  <h2 className="text-lg font-semibold tracking-tight">Tennis</h2>
                </div>
                <p className="mt-2 text-sm text-udem-navy/75">
                  9 ans — régularité, stratégie, gestion du stress et progression.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-udem-navy/75">
                  <li>Discipline et constance (entraînement / répétition).</li>
                  <li>Analyse rapide et prise de décision en match.</li>
                  <li>Résilience et amélioration continue.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🥋</span>
                  <h2 className="text-lg font-semibold tracking-tight">Judo</h2>
                </div>
                <p className="mt-2 text-sm text-udem-navy/75">
                  7 ans — discipline, respect, maîtrise de soi et apprentissage progressif.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-udem-navy/75">
                  <li>Rigueur technique : répéter, corriger, automatiser.</li>
                  <li>Gestion de l’effort et du mental sous pression.</li>
                  <li>Esprit d’équipe et humilité (apprendre en continu).</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🥊</span>
                  <h2 className="text-lg font-semibold tracking-tight">Boxe</h2>
                </div>
                <p className="mt-2 text-sm text-udem-navy/75">
                  Depuis un peu plus d’un mois — cardio, coordination et discipline.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-udem-navy/75">
                  <li>Progression rapide via feedback (technique, garde, déplacements).</li>
                  <li>Gestion du rythme : intensité, récupération, constance.</li>
                  <li>Confiance et contrôle : rester lucide sous effort.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">🌿</span>
                  <h2 className="text-lg font-semibold tracking-tight">Ce que ça m’apporte</h2>
                </div>
                <p className="mt-2 text-sm text-udem-navy/75">
                  Le sport m’aide surtout à garder un bon équilibre et une routine. J’essaie de transposer ça dans mes projets : avancer par étapes, rester régulier, et apprendre au fil du temps.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-udem-navy/75">
                  <li>Rester constant même quand la motivation varie.</li>
                  <li>Me fixer des objectifs simples et ajuster au fur et à mesure.</li>
                  <li>Prendre du recul : mieux gérer le stress et la fatigue.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }