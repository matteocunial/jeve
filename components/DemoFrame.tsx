/**
 * DemoFrame: incorpora una demo del kit afterloop-demos (scena fissa 1280x800,
 * autoscalante). Contenitore sobrio: bordo 1px, raggio 20px, ombra leggera.
 * Nessun frame di browser finto.
 *
 * - desktop: la demo riempie il contenitore in aspect 16/10.
 * - mobile (<768): il wrapper è più basso (16/7) e l'iframe — sempre renderizzato
 *   in scala piena 16/10 a tutta larghezza — è sollevato in overflow hidden per
 *   ritagliare la fascia utile, senza ingrandire il testo.
 */
export default function DemoFrame({
  src,
  title,
  caption,
  callouts = [],
  eager = false,
  className,
}: {
  src: string;
  title: string;
  caption: string;
  callouts?: string[];
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {/* Etichette ancorate alla demo, sopra il contenitore — mai dentro l'iframe */}
      {callouts.length > 0 ? (
        <ul className="mb-4 flex flex-wrap gap-2" aria-hidden="true">
          {callouts.map((c) => (
            <li
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-al-line bg-[var(--al-surface)] px-3 py-1.5 text-al-muted"
              style={{ font: "500 11px var(--al-font-mono)", letterSpacing: "0.04em" }}
            >
              <span
                className="inline-block h-[6px] w-[6px] shrink-0 rounded-full"
                style={{ background: "var(--al-glow)" }}
              />
              {c}
            </li>
          ))}
        </ul>
      ) : null}

      <figure className="relative m-0 overflow-hidden rounded-[20px] border border-al-line bg-al-bg shadow-[0_24px_70px_-40px_rgba(5,8,15,0.9)] aspect-[16/7] md:aspect-auto">
        <iframe
          src={src}
          title={title}
          loading={eager ? undefined : "lazy"}
          className="absolute left-0 top-[-10%] w-full border-0 md:static md:top-auto"
          style={{ aspectRatio: "16 / 10" }}
        />
        <figcaption className="sr-only">{caption}</figcaption>
      </figure>

      {/* Didascalia: beneficio concreto, una riga */}
      <p className="mt-3 max-w-[65ch] text-[14px] leading-[1.55] text-al-muted">
        {caption}
      </p>
    </div>
  );
}
