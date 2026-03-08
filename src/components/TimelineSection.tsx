import Image from "next/image";

type TimelineItem = {
  title: string;
  subtitle?: string;
  date?: string;
  /** Emoji / short text (e.g., "🎓", "✈️") */
  icon?: string;
  /** Small meta text shown beside the title (e.g., "2025–2026") */
  meta?: string;
  /** Path in /public (e.g., "/logos/udem.png") */
  logoSrc?: string;
};

export default function TimelineSection({
  title = "Timeline",
  href = "/etudes",
  linkLabel = "Voir Études",
  items,
  showHeader = true,
  className = "",
  cardClassName = "",
  titleClassName = "",
}: {
  title?: string;
  href?: string;
  linkLabel?: string;
  items: TimelineItem[];
  showHeader?: boolean;
  className?: string;
  cardClassName?: string;
  titleClassName?: string;
}) {
  return (
    <div className={className}>
      {showHeader ? (
        <div className="flex items-baseline justify-between">
          <h2 className={`text-lg font-semibold tracking-tight text-udem-navy ${titleClassName}`}>
            {title}
          </h2>
          <a href={href} className="text-sm text-udem-blue underline-offset-4 hover:underline">
            {linkLabel}
          </a>
        </div>
      ) : null}

      <div
        className={`mt-4 rounded-2xl border border-udem-blue/15 bg-white/70 backdrop-blur-md p-6 shadow-[0_10px_24px_rgba(11,17,58,0.08)] ${cardClassName}`}
      >
        <ol className="relative border-s border-dashed border-udem-blue/35">
          {items.map((item) => (
            <li key={item.title} className="relative ms-6 py-3">
              <span className="absolute -start-1.5 mt-3 h-3 w-3 rounded-full border border-udem-blue/40 bg-white/90 shadow-[0_4px_10px_rgba(11,17,58,0.10)]" />

              <div className="rounded-xl border border-udem-blue/15 bg-white/85 p-4 shadow-[0_8px_18px_rgba(11,17,58,0.08)] transition hover:border-udem-blue/35 hover:shadow-[0_10px_22px_rgba(11,17,58,0.10)]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    {item.icon ? (
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-udem-blue/15 bg-udem-mist text-sm">
                        {item.icon}
                      </span>
                    ) : null}

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <p className="text-sm font-semibold text-udem-navy">{item.title}</p>
                        {item.meta ? (
                          <p className="text-xs text-udem-navy/55">{item.meta}</p>
                        ) : null}
                        {item.date ? (
                          <p className="text-xs text-udem-navy/55">{item.date}</p>
                        ) : null}
                      </div>

                      {item.subtitle ? (
                        <p className="mt-1 text-sm text-udem-navy/70">{item.subtitle}</p>
                      ) : null}
                    </div>
                  </div>

                  {item.logoSrc ? (
                    <div className="shrink-0 self-center flex h-12 w-40 items-center justify-center rounded-xl border border-udem-blue/15 bg-white/90 px-3 py-2 shadow-[0_6px_16px_rgba(11,17,58,0.06)]">
                      <Image
                        src={item.logoSrc}
                        alt={`${item.title} logo`}
                        width={160}
                        height={48}
                        className="max-h-8 w-auto max-w-full object-contain opacity-100"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}