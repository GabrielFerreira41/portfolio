"use client";

import { useEffect, useRef, useState } from "react";
import { use } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import { projectsPerso } from "@/data/projects.perso";
import { projectsPersoDetails } from "@/data/projects.perso.details";
import TechCluster from "@/components/techCluster";

// ── Intersection hook ─────────────────────────────────────────────
function useInView(threshold = 0.12) {
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

// ── Animated section card ─────────────────────────────────────────
function SectionCard({
  icon, title, children, delay = 0, accent = "#1a56db",
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
  accent?: string;
}) {
  const { ref, inView } = useInView(0.08);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border-color 0.3s, box-shadow 0.3s`,
        borderColor: hovered ? `${accent}55` : undefined,
        boxShadow: hovered
          ? `0 16px 40px ${accent}18, 0 2px 8px ${accent}10`
          : "0 10px 24px rgba(11,17,58,0.08)",
      }}
      className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md p-6 cursor-default"
    >
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg transition-all duration-300"
          style={{
            background: hovered ? `${accent}12` : undefined,
            borderColor: hovered ? `${accent}40` : undefined,
            transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1) rotate(0deg)",
          }}
        >
          {icon}
        </span>
        <h2 className="text-lg font-semibold tracking-tight text-udem-navy">{title}</h2>
      </div>

      <div
        className="mt-4 h-px rounded-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${accent}55, transparent)`,
          width: hovered ? "100%" : "35%",
        }}
      />

      <div className="mt-4">{children}</div>
    </div>
  );
}

// ── Browser iframe mockup ─────────────────────────────────────────
function BrowserEmbed({ url, title }: { url: string; title: string }) {
  const { ref, inView } = useInView(0.05);
  const [iframeError, setIframeError] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease 100ms, transform 0.6s ease 100ms",
      }}
    >
      {/* Browser chrome */}
      <div className="rounded-2xl border border-udem-blue/15 bg-white/90 backdrop-blur-md shadow-[0_16px_48px_rgba(11,17,58,0.14)] overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center gap-3 bg-udem-mist/80 px-4 py-3 border-b border-udem-blue/10">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>

          {/* URL bar */}
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-udem-blue/15 bg-white/80 px-3 py-1.5 shadow-[0_2px_8px_rgba(11,17,58,0.06)]">
            <svg className="h-3.5 w-3.5 shrink-0 text-udem-navy/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-xs text-udem-navy/60 truncate font-mono">{url}</span>
          </div>

          {/* Open button */}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-udem-blue/20 bg-white/80 px-3 py-1.5 text-xs font-medium text-udem-blue hover:bg-udem-blue hover:text-white transition-all duration-200"
          >
            Ouvrir
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* iFrame */}
        {!iframeError ? (
          <iframe
            src={url}
            title={title}
            className="w-full border-0"
            style={{ height: "520px" }}
            onError={() => setIframeError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <span className="text-4xl">🔗</span>
            <p className="text-sm text-udem-navy/60 max-w-xs">
              Le site ne peut pas être intégré directement.<br />Cliquez sur "Ouvrir" pour le visiter.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-udem-blue/20 bg-udem-mist px-5 py-2.5 text-sm font-medium text-udem-blue hover:border-udem-blue/40 hover:bg-udem-blue/5 transition"
            >
              Visiter {url}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────
export default function ProjetPersoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();

  const project = projectsPerso.find((p) => p.slug === slug);
  const detail = projectsPersoDetails[slug];

  if (!project || !detail) return notFound();

  const { ref: headerRef, inView: headerIn } = useInView(0.2);

  const sectionIcons = ["🎯", "🗄️", "🤖", "🏗️", "✅"];
  const sectionAccents = ["#1a56db", "#0891b2", "#7c3aed", "#16a34a", "#d97706"];

  const liveUrl = project.links?.find((l) => l.label === "Démo")?.href
    ?? "https://gabrielferreiraairl.vercel.app/";

  return (
    <main className="min-h-screen bg-transparent text-udem-navy">
      <section className="mx-auto max-w-4xl px-4 py-12">

        {/* ── Back + Header ── */}
        <div
          ref={headerRef}
          className="rounded-3xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_12px_34px_rgba(11,17,58,0.14)] md:p-8"
          style={{
            opacity: headerIn ? 1 : 0,
            transform: headerIn ? "translateY(0)" : "translateY(-16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* Back */}
          <button
            onClick={() => router.back()}
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-udem-navy/55 hover:text-udem-navy transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Retour
          </button>

          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm text-udem-navy/55">Projet personnel</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight">{project.title}</h1>
              <p className="mt-2 max-w-xl text-udem-navy/70">{project.subtitle}</p>
            </div>

            {/* Badge */}
            <div className="hidden sm:flex shrink-0 items-center gap-2 rounded-2xl border border-udem-blue/15 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-udem-blue/15 bg-udem-mist text-lg">
                ✈️
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-udem-navy">AirI</p>
                <p className="text-xs text-udem-navy/55">ML · Full-stack</p>
              </div>
            </div>
          </div>

          {/* Tags + year */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {project.year && (
              <span className="rounded-full border border-udem-blue/20 bg-udem-mist px-3 py-1 text-xs font-medium text-udem-navy/70">
                {project.year}
              </span>
            )}
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-udem-blue/15 bg-udem-mist px-3 py-1 text-xs text-udem-navy/70">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── TL;DR ── */}
        <div
          className="mt-4 rounded-2xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.08)]"
          style={{
            opacity: headerIn ? 1 : 0,
            transform: headerIn ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease 120ms, transform 0.5s ease 120ms",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-udem-navy/45">TL;DR</p>
          <p className="mt-2 text-udem-navy/75 leading-relaxed">{detail.tl_dr}</p>
        </div>

        {/* ── Impact ── */}
        {project.impact && (
          <div
            className="mt-4 rounded-2xl border border-udem-blue/20 bg-gradient-to-br from-udem-blue/8 to-transparent backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.08)]"
            style={{
              opacity: headerIn ? 1 : 0,
              transform: headerIn ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease 200ms, transform 0.5s ease 200ms",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-udem-blue/70">Résultat clé</p>
            <p className="mt-2 text-udem-navy/80 font-medium leading-relaxed">{project.impact}</p>
          </div>
        )}

        {/* ── Live demo embed ── */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-udem-navy/45">Demo live</p>
          <BrowserEmbed url={liveUrl} title={project.title} />
        </div>

        {/* ── Sections ── */}
        <div className="mt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-udem-navy/45">Détails du projet</p>
          <div className="grid gap-4 md:grid-cols-2">
            {detail.sections.map((s, i) => (
              <SectionCard
                key={s.title}
                icon={sectionIcons[i] ?? "📌"}
                title={s.title}
                delay={i * 80}
                accent={sectionAccents[i] ?? "#1a56db"}
              >
                <ul className="space-y-2 pl-1">
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-udem-navy/75">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-udem-blue/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </SectionCard>
            ))}
          </div>
        </div>

        {/* ── Stack logos ── */}
        <div className="mt-10 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-udem-navy/45">Technologies</p>
          <TechCluster title="Stack développement" items={detail.devStack} variant="wrap" />
          <TechCluster title="Machine Learning" items={detail.mlStack} variant="wrap" />
          <TechCluster title="Déploiement" items={detail.deployStack} variant="wrap" />
        </div>

        {/* ── Liens ── */}
        {project.links?.length ? (
          <div className="mt-8 rounded-2xl border border-udem-blue/15 bg-white/85 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-widest text-udem-navy/45 mb-4">Liens</p>
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-udem-blue/20 bg-udem-mist px-5 py-2.5 text-sm font-medium text-udem-blue hover:bg-udem-blue hover:text-white hover:border-udem-blue transition-all duration-200 shadow-[0_6px_16px_rgba(11,17,58,0.06)]"
                >
                  <Image src="/stacks/Github.png" alt="GitHub" width={16} height={16} className="h-4 w-4 object-contain" />
                  {l.label}
                </a>
              ))}
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-udem-blue bg-udem-blue px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-all duration-200 shadow-[0_6px_16px_rgba(26,86,219,0.25)]"
              >
                ✈️ Voir la démo live
              </a>
            </div>
          </div>
        ) : null}

      </section>
    </main>
  );
}
