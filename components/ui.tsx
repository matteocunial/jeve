import type { ReactNode } from "react";

/** Join helper minimale (senza dipendenze). */
export function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** Container 12 colonne, max-width 1200px. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("al-container", className)}>{children}</div>;
}

export function Section({
  id,
  children,
  className,
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section id={id} className={cn("al-section-pad scroll-mt-16", bordered && "border-t border-al-line", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("al-eyebrow", className)}>{children}</p>;
}

/** Una sola parola chiave per titolo, in Instrument Serif Italic (.al-accent del kit). */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="al-accent">{children}</span>;
}

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return <Tag className={cn("al-card p-6", className)}>{children}</Tag>;
}

/** CTA: una sola azione Ember per vista. primary = Ember con testo Ink. */
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

/** Intestazione standard di sezione: eyebrow + titolo H2 grande con accent. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[720px]", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="al-title mt-3 text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[40px]">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-[16px] leading-[1.6] text-al-muted md:text-[18px]">{lead}</p> : null}
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
