"use client";

import { useEffect, useRef, useState } from "react";

// ── Intersection hook ─────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Animated card ─────────────────────────────────────────────────
function FuturCard({
  icon, title, children, delay = 0, accent = "#1a56db",
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
  accent?: string;
}) {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.97)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, border-color 0.3s, box-shadow 0.3s`,
        borderColor: hovered ? `${accent}55` : undefined,
        boxShadow: hovered
          ? `0 16px 40px ${accent}18, 0 2px 8px ${accent}10`
          : "0 10px 24px rgba(11,17,58,0.10)",
      }}
      className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 cursor-default"
    >
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg transition-all duration-300"
          style={{
            background: hovered ? `${accent}12` : undefined,
            borderColor: hovered ? `${accent}40` : undefined,
            transform: hovered ? "scale(1.12) rotate(-4deg)" : "scale(1) rotate(0deg)",
          }}
        >
          {icon}
        </span>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      </div>

      {/* Expanding accent divider */}
      <div
        className="mt-4 h-px rounded-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${accent}55, transparent)`,
          width: hovered ? "100%" : "40%",
        }}
      />

      <div className="mt-4">{children}</div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function FuturPage() {
  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: timelineRef, inView: timelineIn } = useInView(0.2);

  const steps = [
    { icon: "📍", label: "Québec (1 an)" },
    { icon: "🧑‍💼", label: "Stage" },
    { icon: "🏢", label: "Travail au Québec" },
    { icon: "🌍", label: "USA / France" },
  ];

  const goals = [
    { term: "Court terme", text: "Décrocher un stage en Data Science / ML / NLP (dès mai 2026, 6–8 mois).", color: "#16a34a" },
    { term: "Moyen terme", text: "Rester au Québec pour travailler après le stage et consolider mes bases en industrie.", color: "#1a56db" },
    { term: "Long terme",  text: "Ouvrir la porte à une suite possible aux États-Unis ou en France, selon les opportunités.", color: "#7c3aed" },
  ];

  const domains = [
    { t: "Data Engineer",      i: "🛠️" },
    { t: "Data Scientist",     i: "📊" },
    { t: "Data Visualization", i: "📈" },
  ];

  return (
    <main className="min-h-screen bg-transparent text-udem-navy">
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8">

          {/* ── Header ── */}
          <div
            ref={headerRef}
            className="flex items-start justify-between gap-6"
            style={{
              opacity: headerIn ? 1 : 0,
              transform: headerIn ? "translateY(0)" : "translateY(-16px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div>
              <p className="text-sm text-udem-navy/60">Objectifs</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Futur</h1>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg"
                style={{ animation: headerIn ? "pulse-soft 3s ease-in-out infinite" : "none" }}
              >
                🎯
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">Plan de carrière</p>
                <p className="text-xs text-udem-navy/60">court → moyen → long terme</p>
              </div>
            </div>
          </div>

          {/* ── Subtitle ── */}
          <p
            className="mt-3 max-w-2xl text-udem-navy/70"
            style={{
              opacity: headerIn ? 1 : 0,
              transform: headerIn ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 150ms, transform 0.5s ease 150ms",
            }}
          >
            Ça fait un an que je suis au Québec. Mon objectif à court terme est de trouver un stage, puis de rester ici pour travailler et gagner en expérience. Ensuite, pourquoi pas continuer l'aventure aux États-Unis ou revenir en France.
          </p>

          {/* ── Animated step timeline ── */}
          <div ref={timelineRef} className="mt-6 flex flex-wrap items-center gap-2">
            {steps.map((s, i) => (
              <div key={s.label} className="flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)] transition-all duration-300 hover:border-udem-blue/35 hover:-translate-y-0.5 cursor-default"
                  style={{
                    opacity: timelineIn ? 1 : 0,
                    transform: timelineIn ? "translateY(0)" : "translateY(14px)",
                    transition: `opacity 0.45s ease ${i * 110}ms, transform 0.45s ease ${i * 110}ms`,
                  }}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">
                    {s.icon}
                  </span>
                  {s.label}
                </span>

                {/* Animated arrow between steps */}
                {i < steps.length - 1 && (
                  <span
                    className="text-udem-navy/40 text-base font-light"
                    style={{
                      opacity: timelineIn ? 1 : 0,
                      transform: timelineIn ? "translateX(0)" : "translateX(-6px)",
                      transition: `opacity 0.4s ease ${i * 110 + 80}ms, transform 0.4s ease ${i * 110 + 80}ms`,
                    }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* ── Cards grid ── */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">

            {/* Objectifs card */}
            <FuturCard icon="🧭" title="Objectif (court → moyen terme)" delay={0} accent="#1a56db">
              <ul className="space-y-3">
                {goals.map((g, i) => (
                  <li key={g.term} className="flex items-start gap-3 text-sm text-udem-navy/75">
                    <span
                      className="mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide"
                      style={{ background: `${g.color}18`, color: g.color, border: `1px solid ${g.color}35` }}
                    >
                      {g.term}
                    </span>
                    <span>{g.text}</span>
                  </li>
                ))}
              </ul>
            </FuturCard>

            {/* Domaines card */}
            <FuturCard icon="🧩" title="Domaines" delay={100} accent="#7c3aed">
              <div className="flex flex-wrap gap-2">
                {domains.map(({ t, i }, idx) => (
                  <span
                    key={t}
                    className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70 transition-all duration-200 hover:border-udem-blue/35 hover:-translate-y-0.5 hover:shadow-sm cursor-default"
                    style={{
                      transitionDelay: `${idx * 40}ms`,
                    }}
                  >
                    <span className="mr-1">{i}</span>{t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm text-udem-navy/75">
                Je m'oriente vers des rôles orientés data (ingénierie, science des données, visualisation) où je peux construire des pipelines propres, analyser, et raconter une histoire claire avec les données.
              </p>
            </FuturCard>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
      `}</style>
    </main>
  );
}