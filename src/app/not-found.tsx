// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-transparent text-udem-navy">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-8 shadow-[0_12px_34px_rgba(11,17,58,0.14)]">
          <p className="text-sm text-udem-navy/60">404</p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Page en cours de construction
          </h1>

          <p className="mt-3 max-w-2xl text-udem-navy/70">
            Cette page n’existe pas encore (ou le lien est incorrect). Je suis en
            train de la construire — reviens bientôt 🙂
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="w-full sm:w-auto rounded-xl bg-udem-blue px-4 py-2 text-sm font-medium text-white shadow-[0_10px_22px_rgba(0,87,172,0.22)] hover:opacity-95"
            >
              Retour à l’accueil
            </Link>

            <Link
              href="/projets-universitaires"
              className="w-full sm:w-auto rounded-xl border border-udem-blue/20 bg-white/85 px-4 py-2 text-sm font-medium text-udem-blue backdrop-blur hover:bg-udem-mist hover:border-udem-blue/35"
            >
              Voir mes projets
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-udem-blue/15 bg-white/80 p-4">
            <p className="text-sm font-medium text-udem-navy">Astuce</p>
            <p className="mt-1 text-sm text-udem-navy/70">
              Si tu es recruteur : tu peux aussi télécharger mon CV depuis la page
              d’accueil.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}