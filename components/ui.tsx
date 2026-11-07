import type { ReactNode, CSSProperties } from "react";
import { Icon } from "@/components/Icon";

/** Join helper minimale (senza dipendenze). */
export function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** Container 12 colonne, max-width 1200px. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("al-container", className)}>{children}</div>;
}

export type TokenColor = "ember" | "glow" | "flare" | "cobalt" | "sky" | "ok" | "neutral";

export const TOKEN_COLOR: Record<TokenColor, string> = {
  ember: "var(--al-ember)",
  glow: "var(--al-glow)",
  flare: "var(--al-flare)",
  cobalt: "var(--al-cobalt)",
  sky: "var(--al-sky)",
  ok: "var(--al-ok)",
  neutral: "var(--al-text-muted)",
};

/** Tinte 12-15% su fondo scuro — ammesse dal brief (trasparenze 8-16%). */
export const TOKEN_TINT: Record<TokenColor, string> = {
  ember: "rgba(255,107,44,.12)",
  glow: "rgba(255,178,122,.12)",
  flare: "rgba(224,69,123,.12)",
  cobalt: "rgba(43,89,255,.14)",
  sky: "rgba(124,155,255,.15)",
  ok: "rgba(61,220,151,.12)",
  neutral: "rgba(255,255,255,.06)",
};

/**
 * Sezione con accent colore per sezione: sovrascrive --al-accent in cascata, così
 * ogni `.al-accent` (Instrument Serif Italic) prende il colore della sezione.
 * dataTheme="light" attiva i token Mist/Ink del kit in una sezione chiara.
 */
export function Section({
  id,
  children,
  className,
  accent,
  bordered = true,
  dataTheme,
  style,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  accent?: TokenColor;
  bordered?: boolean;
  dataTheme?: "light";
  style?: CSSProperties;
}) {
  const s: CSSProperties & Record<"--al-accent", string> = { ...style } as CSSProperties & Record<"--al-accent", string>;
  if (accent) s["--al-accent"] = TOKEN_COLOR[accent];
  return (
    <section
      id={id}
      data-theme={dataTheme}
      style={s}
      className={cn("al-section-pad scroll-mt-16", bordered && "border-t border-al-line", className)}
    >
      {children}
    </section>
  );
}

/** Eyebrow mono maiuscolo con nodo colorato davanti (richiama il nodo del logo). */
export function Eyebrow({
  children,
  node = "neutral",
  className,
}: {
  children: ReactNode;
  node?: TokenColor;
  className?: string;
}) {
  return (
    <p className={cn("al-eyebrow flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="inline-block h-[7px] w-[7px] shrink-0 rounded-full"
        style={{ background: TOKEN_COLOR[node] }}
      />
      <span>{children}</span>
    </p>
  );
}

/** Una sola parola chiave per titolo, in Instrument Serif Italic (.al-accent del kit). */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="al-accent">{children}</span>;
}

/** Sottolineatura sottile a gradiente per la parola in accento (solo hero). */
export function HeroAccent({ children }: { children: ReactNode }) {
  return (
    <span className="hero-underline al-accent">{children}</span>
  );
}

/**
 * Card dei contenuti: `.al-card` del kit + hairline in gradiente sul bordo alto.
 * Al hover (≤180ms): bordo che si accende leggermente; l'icona figlia passa al
 * colore pieno della tinta (gruppo `group/card` + classe `icon-tint`).
 */
export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag className={cn("hairline-top al-card group/card p-6", className)}>
      {children}
    </Tag>
  );
}

/**
 * Riquadro icona con tinta del suo colore. Dentro una Card (group/card): a riposo
 * l'icona è in tono neutro, al hover prende il colore pieno della tinta (--tile-c).
 */
export function IconTile({
  name,
  color,
  size = 20,
  muted,
  className,
}: {
  name: Parameters<typeof Icon>[0]["name"];
  color: TokenColor;
  size?: number;
  muted?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-al-line transition-colors duration-150",
        className,
      )}
      style={{ background: TOKEN_TINT[color], color: muted ? TOKEN_COLOR.neutral : TOKEN_COLOR[color], "--tile-c": TOKEN_COLOR[color] } as CSSProperties}
    >
      <Icon name={name} size={size} className={cn(muted && "icon-tint")} />
    </span>
  );
}

/** CTA: una sola azione Ember per vista. primary = Ember con testo Ink.
 *  focus ring Sky e pressed_state gestiti dai token + globals. */
export function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "al-btn",
        variant === "primary" ? "al-btn--primary" : "al-btn--ghost",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Freccia che scorre di 3px al hover (regola CSS in globals). */
export function Arrow({ size = 18 }: { size?: number }) {
  return <Icon name="arrow-right" size={size} className="btn-arrow" />;
}

/** Intestazione standard di sezione: eyebrow con nodo + titolo con accent. */
export function SectionHeader({
  eyebrow,
  node = "neutral",
  title,
  lead,
  badge,
  className,
}: {
  eyebrow: string;
  node?: TokenColor;
  title: ReactNode;
  lead?: string;
  badge?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[720px]", className)}>
      <div className="flex items-end justify-between gap-4">
        <Eyebrow node={node}>{eyebrow}</Eyebrow>
        {badge}
      </div>
      <h2 className="balance al-title mt-3 text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[40px]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.6] text-al-muted md:text-[18px]">{lead}</p>
      ) : null}
    </div>
  );
}

/** Pill di stato prodotto: ok / warn / info (token del kit). */
export function StatusPill({
  tone,
  children,
  className,
}: {
  tone: "ok" | "warn" | "info";
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "al-pill whitespace-nowrap",
        tone === "ok" && "al-pill--ok",
        tone === "warn" && "al-pill--warn",
        tone === "info" && "al-pill--info",
        className,
      )}
      style={{ font: "500 12px var(--al-font-mono)" }}
    >
      {children}
    </span>
  );
}
