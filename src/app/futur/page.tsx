export default function FuturPage() {
    return (
      <main className="min-h-screen bg-transparent text-udem-navy">
        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">
          <p className="text-sm text-udem-navy/60">Objectifs</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Futur</h1>
          <p className="mt-3 max-w-2xl text-udem-navy/70">
            Ce que je cherche et le type d’environnement dans lequel je performe le mieux.
          </p>
  
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
              <h2 className="text-lg font-semibold tracking-tight">Stage (Été 2026)</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-udem-navy/75">
                <li>Data Science / Machine Learning / NLP (Montréal).</li>
                <li>Début : mai 2026 • Durée : 6–8 mois.</li>
                <li>Missions : pipeline data → modèle → évaluation → déploiement.</li>
              </ul>
            </div>
  
            <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)]">
              <h2 className="text-lg font-semibold tracking-tight">Domaines</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["NLP / LLM", "MLOps", "Time Series", "Analytics", "Data Viz"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
  
              <p className="mt-4 text-sm text-udem-navy/75">
                J’aime les équipes qui valorisent la clarté, les métriques et le code propre.
              </p>
            </div>
          </div>
          </div>
        </section>
      </main>
    );
  }