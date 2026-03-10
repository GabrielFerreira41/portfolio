"use client";

import { useEffect, useRef, useState } from "react";

// ── Reusable intersection hook ────────────────────────────────────
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

// ── Animated counter ─────────────────────────────────────────────
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const { ref, inView } = useInView(0.5);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(start);
      if (start >= target) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Sport card ───────────────────────────────────────────────────
type SportCardProps = {
  icon: string;
  title: string;
  description: string;
  items: string[];
  delay?: number;
  accent?: string;
};

function SportCard({ icon, title, description, items, delay = 0, accent = "#1a56db" }: SportCardProps) {
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
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        borderColor: hovered ? `${accent}55` : undefined,
        boxShadow: hovered
          ? `0 16px 40px ${accent}18, 0 2px 8px ${accent}10`
          : undefined,
      }}
      className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.10)] transition-[border-color,box-shadow] duration-300 cursor-default"
    >
      {/* Icon + title */}
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 text-lg transition-transform duration-300"
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

      {/* Description */}
      <p className="mt-2 text-sm text-udem-navy/75">{description}</p>

      {/* Divider */}
      <div
        className="mt-4 h-px rounded-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${accent}50, transparent)`,
          width: hovered ? "100%" : "40%",
        }}
      />

      {/* Bullet points — staggered on card hover */}
      <ul className="mt-3 space-y-2 pl-0 text-sm text-udem-navy/75">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 transition-all duration-300"
            style={{
              opacity: hovered ? 1 : 0.75,
              transform: hovered ? `translateX(${i * 2}px)` : "translateX(0)",
              transitionDelay: hovered ? `${i * 40}ms` : "0ms",
            }}
          >
            <span
              className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: accent, opacity: hovered ? 1 : 0.4 }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────
export default function SportPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: timelineRef, inView: timelineIn } = useInView(0.2);

  const sports = [
    {
      icon: "🎾",
      title: "Tennis",
      description: "9 ans — régularité, stratégie, gestion du stress et progression.",
      items: [
        "Discipline et constance (entraînement / répétition).",
        "Analyse rapide et prise de décision en match.",
        "Résilience et amélioration continue.",
      ],
      accent: "#16a34a",
    },
    {
      icon: "🥋",
      title: "Judo",
      description: "7 ans — discipline, respect, maîtrise de soi et apprentissage progressif.",
      items: [
        "Rigueur technique : répéter, corriger, automatiser.",
        "Gestion de l'effort et du mental sous pression.",
        "Esprit d'équipe et humilité (apprendre en continu).",
      ],
      accent: "#b45309",
    },
    {
      icon: "🥊",
      title: "Boxe",
      description: "Depuis un peu plus d'un mois — cardio, coordination et discipline.",
      items: [
        "Progression rapide via feedback (technique, garde, déplacements).",
        "Gestion du rythme : intensité, récupération, constance.",
        "Confiance et contrôle : rester lucide sous effort.",
      ],
      accent: "#dc2626",
    },
    {
      icon: "🌿",
      title: "Ce que ça m'apporte",
      description:
        "Le sport m'aide surtout à garder un bon équilibre et une routine. J'essaie de transposer ça dans mes projets.",
      items: [
        "Rester constant même quand la motivation varie.",
        "Me fixer des objectifs simples et ajuster au fur et à mesure.",
        "Prendre du recul : mieux gérer le stress et la fatigue.",
      ],
      accent: "#0891b2",
    },
  ];

  const badges = [
    { icon: "🎾", label: "Tennis", years: 9 },
    { icon: "🥋", label: "Judo",   years: 7 },
    { icon: "🥊", label: "Boxe",   years: 0 },
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
              <p className="text-sm text-udem-navy/60">À propos</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight">Sport</h1>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg"
                style={{
                  animation: headerIn ? "pulse-soft 3s ease-in-out infinite" : "none",
                }}
              >
                🏃‍♂️
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">Équilibre</p>
                <p className="text-xs text-udem-navy/60">discipline • régularité • progression</p>
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
            Le sport est une partie importante de mon équilibre : discipline, régularité, progression.
          </p>

          {/* ── Stats row ── */}
          <div
            className="mt-5 flex flex-wrap gap-3"
            style={{
              opacity: headerIn ? 1 : 0,
              transition: "opacity 0.5s ease 250ms",
            }}
          >
            {[
              { label: "années de tennis", value: 9 },
              { label: "années de judo",   value: 7 },
              { label: "sports pratiqués", value: 3 },
            ].map((s, i) => (
              <div
                key={s.label}
                className="rounded-xl border border-udem-blue/10 bg-white/80 px-4 py-2 text-center shadow-sm"
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <p className="text-xl font-bold text-udem-navy tabular-nums">
                  <Counter target={s.value} suffix="+" />
                </p>
                <p className="text-[10px] text-udem-navy/50 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── Mini timeline badges ── */}
          <div
            ref={timelineRef}
            className="mt-6 flex flex-wrap items-center gap-2"
          >
            {badges.map((b, i) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/80 px-3 py-2 text-sm text-udem-navy/75 shadow-[0_6px_16px_rgba(11,17,58,0.06)] transition-all duration-300 hover:border-udem-blue/35 hover:-translate-y-0.5"
                style={{
                  opacity: timelineIn ? 1 : 0,
                  transform: timelineIn ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.45s ease ${i * 100}ms, transform 0.45s ease ${i * 100}ms`,
                }}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-udem-mist">
                  {b.icon}
                </span>
                {b.label}{b.years > 0 ? ` · ${b.years} ans` : " · 1+ mois"}
              </span>
            ))}
          </div>

          {/* ── Cards grid ── */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {sports.map((s, i) => (
              <SportCard key={s.title} {...s} delay={i * 100} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.08); }
        }
      `}</style>
    </main>
  );
}