import Image from "next/image";
import { profile } from "@/data/profile";


export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      {/* Panneau principal (glass) pour lisibilité sur le fond d’écran */}
      <div className="rounded-3xl border border-udem-blue/15 bg-white/70 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.12)] md:p-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          {/* Colonne gauche */}
          <div className="md:col-span-7">
            {/* En-tête identité */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-start">
                {/* Photo */}
                <div className="relative shrink-0 self-center sm:self-auto">
                  <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-udem-blue/15 via-udem-blue/0 to-udem-blue/10 blur-md" />

                  <div className="relative h-28 w-28 overflow-hidden rounded-3xl border border-udem-blue/25 bg-white/70 shadow-[0_14px_34px_rgba(11,17,58,0.14)]">
                    <Image
                      src="/profile.jpeg"
                      alt="Photo de profil"
                      fill
                      className="object-cover object-[center_20%] scale-110"
                      priority
                    />
                  </div>
                </div>

                {/* Texte */}
                <div className="min-w-0 w-full">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-udem-navy/60">{profile.location}</span>
                    <span className="hidden h-4 w-px bg-udem-blue/20 md:inline-block" />
                    <span className="inline-flex items-center rounded-full border border-udem-blue/20 bg-white/80 px-3 py-1 text-xs font-medium text-udem-blue shadow-[0_6px_16px_rgba(11,17,58,0.08)]">
                      Disponible — Été 2026
                    </span>
                  </div>

                  <h1 className="mt-2 text-3xl font-semibold tracking-tight text-udem-navy sm:text-4xl md:text-5xl">
                    {profile.name}
                  </h1>

                  <p className="mt-2 text-base font-medium text-udem-navy/85 sm:text-lg">
                    {profile.title}
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-udem-navy/75 sm:text-base">
                    {profile.pitch}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70">
                      Data Science
                    </span>
                    <span className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70">
                      ML / NLP
                    </span>
                    <span className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70">
                      End-to-end
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {profile.ctas.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className={`w-full sm:w-auto rounded-xl px-4 py-2 text-sm font-medium transition ${
                      c.href === "/cv.pdf"
                        ? "bg-udem-blue text-white shadow-[0_10px_22px_rgba(0,87,172,0.22)] hover:opacity-95"
                        : "border border-udem-blue/20 bg-white/85 text-udem-blue backdrop-blur hover:bg-udem-mist hover:border-udem-blue/35"
                    }`}
                  >
                    {c.label}
                  </a>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="inline-flex items-center justify-center rounded-xl border border-udem-blue/20 bg-white/85 px-3 py-2 text-sm font-medium text-udem-blue backdrop-blur hover:bg-udem-mist hover:border-udem-blue/35"
                >
                  ✉️ {profile.contact.email}
                </a>

                <a
                  href={`tel:${profile.contact.phone}`}
                  className="inline-flex items-center justify-center rounded-xl border border-udem-blue/20 bg-white/85 px-3 py-2 text-sm font-medium text-udem-blue backdrop-blur hover:bg-udem-mist hover:border-udem-blue/35"
                >
                  📞 {profile.contact.phone}
                </a>

                {profile.links
                  .filter((l) => {
                    const v = l.label.toLowerCase();
                    return v.includes("linkedin") || v.includes("github");
                  })
                  .map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center justify-center rounded-xl border border-udem-blue/20 bg-white/85 px-3 py-2 text-sm font-medium text-udem-blue backdrop-blur hover:bg-udem-mist hover:border-udem-blue/35"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Colonne droite (visuel) */}
          <div className="md:col-span-5">
            <div className="mx-auto mt-2 w-56 sm:w-64 md:ml-auto md:mr-4 md:mt-0 md:w-72">
              <Image
                src="/passions.png"
                alt=""
                width={520}
                height={520}
                sizes="(min-width: 768px) 288px, 224px"
                className="h-auto w-full rounded-2xl object-cover shadow-[0_10px_24px_rgba(11,17,58,0.10)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}