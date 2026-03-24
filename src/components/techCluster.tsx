import Image from "next/image";

export type TechItem = {
  name: string;
  logoSrc: string; // path in /public, e.g. "/stack/python.svg"
};

const OFFSETS: Array<{ x: number; y: number }> = [
  { x: 0, y: 0 },
  { x: 4, y: -6 },
  { x: -6, y: 4 },
  { x: 8, y: 6 },
  { x: -10, y: -4 },
  { x: 6, y: 10 },
  { x: -4, y: -10 },
  { x: 10, y: -2 },
  { x: -12, y: 8 },
  { x: 2, y: -12 },
];

function offsetStyle(i: number): React.CSSProperties {
  const o = OFFSETS[i % OFFSETS.length];
  return { transform: `translate(${o.x}px, ${o.y}px)` };
}

export default function TechCluster({
  title = "Stack",
  items,
  variant = "cluster",
  className = "",
}: {
  title?: string;
  items: TechItem[];
  /**
   * - "wrap": simple, clean cloud of chips
   * - "cluster": small deterministic offsets for a clustered look
   */
  variant?: "wrap" | "cluster";
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-udem-navy">
          {title}
        </h2>
      </div>

      <div className="mt-4 rounded-2xl border border-udem-blue/15 bg-white/70 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.08)]">
        <div className="flex flex-wrap gap-3">
          {items.map((t, i) => (
            <div
              key={t.name}
              className="inline-flex items-center gap-2 rounded-full border border-udem-blue/15 bg-white/85 px-3 py-2 shadow-[0_6px_16px_rgba(11,17,58,0.06)] transition hover:border-udem-blue/35"
              style={variant === "cluster" ? offsetStyle(i) : undefined}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-udem-blue/15 bg-udem-mist overflow-hidden">
                {t.logoSrc ? (
                  <Image
                    src={t.logoSrc}
                    alt={`${t.name} logo`}
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain"
                  />
                ) : (
                  <span className="text-[11px] font-bold text-udem-navy/60 leading-none select-none">
                    {t.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </span>
              <span className="text-sm font-medium text-udem-navy/80">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
