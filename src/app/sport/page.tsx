export default function SportPage() {
    return (
      <main className="min-h-screen bg-transparent text-udem-navy">
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <p className="text-sm text-udem-navy/60">À propos</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Sport</h1>
          <p className="mt-3 max-w-2xl text-udem-navy/70">
            Le sport est une partie importante de mon équilibre : discipline, régularité, progression.
          </p>
  
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40">
              <h2 className="text-lg font-semibold tracking-tight">Tennis</h2>
              <p className="mt-2 text-sm text-udem-navy/75">
                Régularité, stratégie, gestion du stress et objectif progression.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-udem-navy/75">
                <li>Discipline et constance (entraînement / répétition).</li>
                <li>Analyse rapide et prise de décision en match.</li>
                <li>Résilience et amélioration continue.</li>
              </ul>
            </div>
  
            <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] hover:border-udem-blue/40">
              <h2 className="text-lg font-semibold tracking-tight">Ce que ça dit de moi</h2>
              <p className="mt-2 text-sm text-udem-navy/75">
                Même état d’esprit qu’en data/ML : itération, métriques, rigueur, constance.
              </p>
            </div>
          </div>
          </div>
        </section>
      </main>
    );
  }