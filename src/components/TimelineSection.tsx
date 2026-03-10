"use client";

import { useState, useRef, useEffect } from "react";

type TimelineItem = {
  title: string;
  subtitle?: string;
  meta?: string;
  icon?: string;
};

const defaultItems: TimelineItem[] = [
  { title: "Collège Notre Dame", meta: "2016",      subtitle: "Cambridge — Certification anglais", icon: "🎓" },
  { title: "BIA",               meta: "2019",       subtitle: "Brevet initiation aéronautique",    icon: "✈️" },
  { title: "Lycée A. Thierry",  meta: "2019–2022",  subtitle: "STI2D",                            icon: "🏫" },
  { title: "Atempo",            meta: "2022–2024",  subtitle: "Apprenti Développeur Logiciel",     icon: "💼" },
  { title: "Startup Weekend",   meta: "2022–2023",  subtitle: "Création startup (54h)",            icon: "🚀" },
  { title: "Univ. d'Orléans",  meta: "2021–2024",  subtitle: "BUT Informatique",                  icon: "🎓" },
  { title: "Univ. Montréal",   meta: "2025–2026",  subtitle: "Maîtrise Informatique (IA)",        icon: "🧠" },
];

function resolveOverlaps(positions: number[], size: number, lo: number, hi: number, passes = 16): number[] {
  const p = [...positions];
  for (let pass = 0; pass < passes; pass++) {
    for (let i = 1; i < p.length; i++) {
      const gap = p[i - 1] + size + 10 - p[i];
      if (gap > 0) { p[i - 1] -= gap / 2; p[i] += gap / 2; }
    }
    for (let i = 0; i < p.length; i++) p[i] = Math.max(lo, Math.min(p[i], hi - size));
  }
  return p;
}

/* ── Mobile: curve-only SVG (no cards) ─────────────────────────── */
function MobileCurve({ items, hovered, setHovered }: {
  items: TimelineItem[];
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setCw(e.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const n  = items.length;
  const W  = cw || 340;
  const H  = W * 0.42;
  const PL = 24, PR = 16, PT = 14, PB = 28;

  const xs = items.map((_, i) => PL + (i / (n - 1)) * (W - PL - PR));
  const ys = items.map((_, i) => {
    const t = i / (n - 1);
    return H - PB - Math.pow(t, 1.75) * (H - PT - PB);
  });

  let path = `M ${xs[0]} ${ys[0]}`;
  for (let i = 1; i < n; i++) {
    const mx = (xs[i - 1] + xs[i]) / 2;
    path += ` C ${mx} ${ys[i - 1]}, ${mx} ${ys[i]}, ${xs[i]} ${ys[i]}`;
  }

  const dotR = 5;

  return (
    <div ref={ref} className="w-full">
      {cw > 0 && (
        <svg viewBox={`0 0 ${W} ${H}`} style={{ display: "block", width: "100%", height: "auto" }}>
          <defs>
            <linearGradient id="mob-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#2563eb" stopOpacity={0.13}/>
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0.00}/>
            </linearGradient>
            <filter id="mob-glow" x="-10%" y="-60%" width="120%" height="220%">
              <feGaussianBlur stdDeviation="2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="mob-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Axes */}
          <line x1={PL} y1={PT} x2={PL} y2={H - PB} stroke="#1e3a8a" strokeWidth={1} strokeOpacity={0.18}/>
          <line x1={PL} y1={H - PB} x2={W - PR + 8} y2={H - PB} stroke="#1e3a8a" strokeWidth={1} strokeOpacity={0.18}/>
          <polygon points={`${PL},${PT} ${PL-2.5},${PT+8} ${PL+2.5},${PT+8}`} fill="#1e3a8a" fillOpacity={0.2}/>
          <polygon points={`${W-PR+12},${H-PB} ${W-PR+4},${H-PB-2.5} ${W-PR+4},${H-PB+2.5}`} fill="#1e3a8a" fillOpacity={0.2}/>
          <text x={W-PR+8} y={H-PB+14} textAnchor="middle" fontSize={7} fill="#1e3a8a" fillOpacity={0.35} fontFamily="Georgia,serif" fontStyle="italic">Temps</text>

          {/* Fill + curve */}
          <path d={`${path} L ${xs[n-1]} ${H-PB} L ${xs[0]} ${H-PB} Z`} fill="url(#mob-fill)"/>
          <path d={path} fill="none" stroke="#2563eb" strokeWidth={2} strokeLinecap="round" filter="url(#mob-glow)"/>

          {/* Dots — tappable to highlight card below */}
          {items.map((_, i) => {
            const isHov = hovered === i;
            const r = isHov ? dotR + 2.5 : dotR;
            return (
              <g key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onTouchStart={() => setHovered(hovered === i ? null : i)}
                style={{ cursor: "pointer" }}
              >
                <circle cx={xs[i]} cy={ys[i]} r={r + 6} fill="transparent"/>
                <circle cx={xs[i]} cy={ys[i]} r={r}
                  fill="white" stroke="#2563eb"
                  strokeWidth={isHov ? 2.2 : 1.8}
                  filter={isHov ? "url(#mob-dot-glow)" : undefined}/>
                <circle cx={xs[i]} cy={ys[i]} r={r * 0.38} fill="#2563eb"/>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}

/* ── Desktop: full SVG with floating cards ──────────────────────── */
function DesktopCurve({ items, hovered, setHovered }: {
  items: TimelineItem[];
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setCw(e.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const n      = items.length;
  const W      = cw || 800;
  const tablet = W < 740;

  const CW = tablet ? 140 : 162;
  const CH = tablet ? 80  : 90;

  const PL = 44, PR = 22;
  const PT = CH + 30;
  const PB = CH + 40;
  const H  = tablet ? W * 0.74 : W * 0.60;

  const xs = items.map((_, i) => PL + (i / (n - 1)) * (W - PL - PR));
  const ys = items.map((_, i) => {
    const t = i / (n - 1);
    return H - PB - Math.pow(t, 1.75) * (H - PT - PB);
  });

  let path = `M ${xs[0]} ${ys[0]}`;
  for (let i = 1; i < n; i++) {
    const mx = (xs[i - 1] + xs[i]) / 2;
    path += ` C ${mx} ${ys[i - 1]}, ${mx} ${ys[i]}, ${xs[i]} ${ys[i]}`;
  }

  function buildRow(indices: number[], above: boolean) {
    const rawX     = indices.map(i => xs[i] - CW / 2);
    const resolved = resolveOverlaps(rawX, CW, 2, W - 2);
    return indices.map((itemIdx, j) => {
      const cardX = resolved[j];
      const cardY = above
        ? Math.max(4,           ys[itemIdx] - 16 - CH)
        : Math.min(H - CH - 4, ys[itemIdx] + 16);
      const connY = above ? cardY + CH : cardY;
      return { itemIdx, cardX, cardY, connY };
    });
  }

  const aboveIdx = items.map((_, i) => i).filter(i => i % 2 === 0);
  const belowIdx = items.map((_, i) => i).filter(i => i % 2 === 1);
  const allCards = [
    ...buildRow(aboveIdx, true),
    ...buildRow(belowIdx, false),
  ].sort((a, b) => a.itemIdx - b.itemIdx);

  const fMeta  = tablet ? 8.5  : 9.5;
  const fTitle = tablet ? 11.5 : 13;
  const fSub   = tablet ? 8    : 9;
  const dotR   = tablet ? 5    : 6;

  return (
    <div ref={ref} className="w-full">
      {cw > 0 && (
        <svg viewBox={`0 0 ${W} ${H}`} style={{ display: "block", width: "100%", height: "auto" }}>
          <defs>
            <linearGradient id="tl-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#2563eb" stopOpacity={0.13}/>
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0.00}/>
            </linearGradient>
            <filter id="tl-glow" x="-10%" y="-60%" width="120%" height="220%">
              <feGaussianBlur stdDeviation="2.5" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="tl-shadow" x="-22%" y="-22%" width="144%" height="155%">
              <feDropShadow dx="0" dy="4" stdDeviation="7" floodColor="#0f2060" floodOpacity="0.09"/>
            </filter>
            <filter id="tl-dot-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2.2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <clipPath id="tl-clip">
              <rect x={0} y={0} width={W} height={H}/>
            </clipPath>
          </defs>

          <g clipPath="url(#tl-clip)">
            {/* Axes */}
            <line x1={PL} y1={8} x2={PL} y2={H-PB} stroke="#1e3a8a" strokeWidth={1.1} strokeOpacity={0.18}/>
            <line x1={PL} y1={H-PB} x2={W-PR+10} y2={H-PB} stroke="#1e3a8a" strokeWidth={1.1} strokeOpacity={0.18}/>
            <polygon points={`${PL},4 ${PL-3.5},14 ${PL+3.5},14`} fill="#1e3a8a" fillOpacity={0.22}/>
            <polygon points={`${W-PR+16},${H-PB} ${W-PR+5},${H-PB-3.5} ${W-PR+5},${H-PB+3.5}`} fill="#1e3a8a" fillOpacity={0.22}/>
            <text x={PL} y={2} textAnchor="middle" dominantBaseline="hanging"
              fontSize={fMeta-1} fill="#1e3a8a" fillOpacity={0.38} fontFamily="Georgia,serif" fontStyle="italic">Niveau</text>
            <text x={W-PR+10} y={H-PB+18} textAnchor="middle"
              fontSize={fMeta-1} fill="#1e3a8a" fillOpacity={0.38} fontFamily="Georgia,serif" fontStyle="italic">Temps</text>

            {/* Fill + Curve */}
            <path d={`${path} L ${xs[n-1]} ${H-PB} L ${xs[0]} ${H-PB} Z`} fill="url(#tl-fill)"/>
            <path d={path} fill="none" stroke="#2563eb"
              strokeWidth={2.8} strokeLinecap="round" filter="url(#tl-glow)"/>

            {/* Connectors */}
            {allCards.map(({ itemIdx, connY }) => (
              <line key={`c${itemIdx}`}
                x1={xs[itemIdx]} y1={connY}
                x2={xs[itemIdx]} y2={ys[itemIdx]}
                stroke="#2563eb" strokeWidth={0.9}
                strokeDasharray="3.5 3" strokeOpacity={0.3}/>
            ))}

            {/* Cards */}
            {allCards.map(({ itemIdx, cardX, cardY }) => {
              const item  = items[itemIdx];
              const isHov = hovered === itemIdx;

              return (
                <g key={`k${itemIdx}`}
                  onMouseEnter={() => setHovered(itemIdx)}
                  onMouseLeave={() => setHovered(null)}
                  style={{ cursor: "pointer" }}
                >
                  <rect x={cardX} y={cardY} width={CW} height={CH} rx={11}
                    fill={isHov ? "#f0f6ff" : "white"}
                    stroke={isHov ? "#2563eb" : "#dbeafe"}
                    strokeWidth={isHov ? 1.6 : 1}
                    filter="url(#tl-shadow)"
                  />
                  <rect x={cardX+14} y={cardY} width={CW-28} height={3} rx={1.5}
                    fill="#2563eb" fillOpacity={isHov ? 0.68 : 0.22}/>

                  <foreignObject x={cardX} y={cardY+3} width={CW} height={CH-3}>
                    <div style={{
                      width: "100%", height: "100%",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      padding: "4px 10px", boxSizing: "border-box", gap: 2,
                    }}>
                      <div style={{ fontSize: fMeta, color: "#2563eb", opacity: 0.75,
                        fontFamily: "Georgia,serif", fontStyle: "italic", lineHeight: 1, whiteSpace: "nowrap" }}>
                        {item.icon} {item.meta}
                      </div>
                      <div style={{ fontSize: fTitle, fontWeight: 800, color: "#0c1445",
                        fontFamily: "Georgia,serif", textAlign: "center", lineHeight: 1.2, wordBreak: "break-word", width: "100%" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: fSub, color: "#334155", opacity: 0.65,
                        fontFamily: "Georgia,serif", textAlign: "center", lineHeight: 1.3, wordBreak: "break-word", width: "100%" }}>
                        {item.subtitle}
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}

            {/* Dots */}
            {items.map((_, i) => {
              const isHov = hovered === i;
              const r = isHov ? dotR + 3 : dotR;
              return (
                <g key={`d${i}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <circle cx={xs[i]} cy={ys[i]} r={r}
                    fill="white" stroke="#2563eb"
                    strokeWidth={isHov ? 2.4 : 2}
                    filter={isHov ? "url(#tl-dot-glow)" : undefined}/>
                  <circle cx={xs[i]} cy={ys[i]} r={r*0.38} fill="#2563eb"/>
                </g>
              );
            })}
          </g>
        </svg>
      )}
    </div>
  );
}

/* ── Mobile vertical card list ──────────────────────────────────── */
function MobileCardList({ items, hovered, setHovered }: {
  items: TimelineItem[];
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  return (
    <div className="flex flex-col gap-2 mt-3">
      {items.map((item, i) => {
        const isHov = hovered === i;
        return (
          <div key={i}
            onTouchStart={() => setHovered(isHov ? null : i)}
            onClick={() => setHovered(isHov ? null : i)}
            className="flex items-center gap-3 rounded-xl border bg-white px-3 py-2.5 shadow-sm transition-all"
            style={{
              borderColor: isHov ? "#2563eb" : "#dbeafe",
              borderWidth: isHov ? 1.5 : 1,
              background: isHov ? "#f0f6ff" : "white",
            }}
          >
            {/* colored left bar */}
            <div className="shrink-0 w-1 self-stretch rounded-full bg-blue-500 opacity-30"
              style={{ opacity: isHov ? 0.8 : 0.25 }}/>

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-[10px] text-blue-500 font-medium italic" style={{ fontFamily: "Georgia,serif" }}>
                  {item.icon} {item.meta}
                </span>
              </div>
              <p className="text-[13px] font-bold text-[#0c1445] leading-tight" style={{ fontFamily: "Georgia,serif" }}>
                {item.title}
              </p>
              {item.subtitle && (
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  {item.subtitle}
                </p>
              )}
            </div>

            {/* step number */}
            <div className="shrink-0 w-6 h-6 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-400">
              {i + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Responsive wrapper ─────────────────────────────────────────── */
function GrowthCurve({ items = defaultItems }: { items?: TimelineItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [cw, setCw] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setCw(e.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const isMobile = cw > 0 && cw < 500;

  return (
    <div ref={ref} className="w-full">
      {isMobile ? (
        <>
          <MobileCurve items={items} hovered={hovered} setHovered={setHovered}/>
          <MobileCardList items={items} hovered={hovered} setHovered={setHovered}/>
        </>
      ) : (
        <DesktopCurve items={items} hovered={hovered} setHovered={setHovered}/>
      )}
    </div>
  );
}

/* ── Public export ──────────────────────────────────────────────── */
export default function TimelineSection({
  title          = "Timeline",
  href           = "/etudes",
  items          = defaultItems,
  showHeader     = true,
  className      = "",
  titleClassName = "",
}: {
  title?:          string;
  href?:           string;
  linkLabel?:      string;
  items?:          TimelineItem[];
  showHeader?:     boolean;
  className?:      string;
  cardClassName?:  string;
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      {showHeader && (
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-slate-400 mb-1">
              Parcours
            </p>
            <h2 className={`text-[1.6rem] font-bold tracking-tight text-slate-900 ${titleClassName}`}>
              {title}
            </h2>
          </div>
          <a href={href}
            className="flex items-center gap-2.5 rounded-2xl border border-blue-100 bg-white/80 px-3.5 py-2.5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-base shadow-inner">
              🧭
            </span>
            <div className="leading-tight">
              <p className="text-[13px] font-semibold text-slate-800">Étapes clés</p>
              <p className="text-[11px] text-slate-400">études • événements</p>
            </div>
          </a>
        </div>
      )}

      <div className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-b from-white to-blue-50/30 p-4 sm:p-6 shadow-[0_8px_30px_rgba(30,58,138,0.07)]">
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #2563eb15 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}/>
        <GrowthCurve items={items}/>
      </div>
    </div>
  );
}