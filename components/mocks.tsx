import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { StatusPill, cn } from "@/components/ui";

/* ------------------------------------------------------------------ *
 * Mock di prodotto AfterLoop — costruiti in HTML/CSS con i token del
 * kit. Nessuna immagine: solo componenti React. Tutti i dati sono
 * etichettati "Dati di esempio", nomi in segnaposto ([CLIENTE A]).
 * ------------------------------------------------------------------ */

/** Cornice finestra prodotto con label mono e badge "Dati di esempio". */
export function MockFrame({
  label,
  children,
  className,
 footer,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "al-card overflow-hidden bg-[var(--al-surface)] p-0",
        className,
      )}
      role="img"
      aria-label={`Anteprima di prodotto AfterLoop: ${label}`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-al-line px-4 py-3 md:px-5">
        <span className="al-eyebrow !text-[10px] tracking-[0.1em]">{label}</span>
        <span
          className="rounded-full border border-al-line px-2.5 py-1 text-al-muted"
          style={{ font: "500 10px var(--al-font-mono)", letterSpacing: "0.06em" }}
        >
          DATI DI ESEMPIO
        </span>
      </div>
      <div className="px-4 py-4 md:px-5 md:py-5">{children}</div>
      {footer ? <div className="border-t border-al-line px-4 py-3 md:px-5">{footer}</div> : null}
    </div>
  );
}

/** Barra di usura con soglia colore dai token (ok / glow / ember). */
function WearBar({ value, label }: { value: number; label?: string }) {
  const color = value >= 70 ? "var(--al-ember)" : value >= 45 ? "var(--al-glow)" : "var(--al-ok)";
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08]"
        role="img"
        aria-label={label ?? `Usura ${value}%`}
      >
        <div className="h-full rounded-full" style={{ width: `${value}%`, background: color }} />
      </div>
      <span className="w-9 shrink-0 text-right text-al-muted" style={{ font: "500 11px var(--al-font-mono)" }}>
        {value}%
      </span>
    </div>
  );
}

/** Righe parco macchine con i tre stati kit: Operativa, Ticket aperto, Da ispezionare. */
const MACHINE_ROWS: Array<{
  cliente: string;
  macchina: string;
  stato: string;
  tone: "ok" | "warn" | "info";
  usura: number;
}> = [
  { cliente: "[CLIENTE A]", macchina: "Trasportatore [MODELLO]", stato: "Operativa", tone: "ok", usura: 34 },
  { cliente: "[CLIENTE B]", macchina: "Pressa [MODELLO]", stato: "Ticket aperto", tone: "info", usura: 58 },
  { cliente: "[CLIENTE C]", macchina: "Trasportatore [MODELLO]", stato: "Da ispezionare", tone: "warn", usura: 82 },
];

export function MockMachines({ className }: { className?: string }) {
  return (
    <MockFrame label="AfterLoop · Parco macchine" className={className} footer={
      <div className="flex items-center justify-between gap-3">
        <span className="text-al-muted" style={{ font: "400 12px var(--al-font-mono)" }}>
          3 proposte pronte questa settimana
        </span>
        <span className="inline-flex items-center gap-1.5 text-glow" style={{ font: "500 12px var(--al-font-mono)" }}>
          <Icon name="arrow-right" size={14} /> Apri
        </span>
      </div>
    }>
      <div className="grid grid-cols-[1fr_auto] gap-x-4 text-[13px] leading-[1.4]">
        <span className="al-eyebrow !text-[10px]">Macchina</span>
        <span className="al-eyebrow !text-[10px] text-right">Usura</span>
        {MACHINE_ROWS.map((r) => (
          <div key={r.cliente} className="col-span-2 grid grid-cols-[1fr_auto] items-center gap-x-4 border-t border-al-line/70 py-3 first:border-t-0 md:grid-cols-[1fr_150px_auto]">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-medium">{r.cliente}</p>
              <p className="mt-0.5 truncate text-[12px] text-al-muted">{r.macchina}</p>
            </div>
            <div className="hidden md:block">
              <StatusPill tone={r.tone}>{r.stato}</StatusPill>
            </div>
            <div className="md:w-36">
              <WearBar value={r.usura} />
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

/** Dettaglio macchina: timeline del ciclo di vita + componenti critici. */
export function MockLifecycle({ className }: { className?: string }) {
  const steps = ["Consegna", "Avviamento", "Garanzia", "Ricambi", "Revamping"];
  const componenti = [
    { nome: "Catena di trascinamento", usura: 82 },
    { nome: "Rulli portanti", usura: 64 },
    { nome: "Cinghia motore", usura: 41 },
    { nome: "Cuscinetti di testa", usura: 28 },
  ];
  return (
    <MockFrame label="AfterLoop · Ciclo di vita macchina" className={className}>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-medium">[CLIENTE C] — Trasportatore [MODELLO]</p>
            <p className="mt-0.5 text-[12px] text-al-muted">Installata: marzo 2024 · Garanzia fino a marzo 2026</p>
          </div>
          <StatusPill tone="warn">Da ispezionare</StatusPill>
        </div>

        {/* Timeline del loop */}
        <ol className="flex flex-wrap items-center gap-y-2" aria-label="Fasi del ciclo di vita">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center">
              <span
                className="rounded-full border px-2.5 py-1"
                style={{
                  font: "500 11px var(--al-font-mono)",
                  borderColor: i === 3 ? "var(--al-ember)" : "var(--al-border)",
                  color: i === 3 ? "var(--al-glow)" : "var(--al-text-muted)",
                }}
              >
                {s}
              </span>
              {i < steps.length - 1 ? (
                <span className="mx-1.5 text-al-muted" aria-hidden="true">
                  <Icon name="arrow-right" size={12} />
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="grid gap-3 border-t border-al-line/70 pt-4">
          <span className="al-eyebrow !text-[10px]">Componenti critici</span>
          {componenti.map((c) => (
            <div key={c.nome} className="grid grid-cols-[110px_1fr] items-center gap-3 md:grid-cols-[170px_1fr]">
              <span className="truncate text-[12px] text-al-muted">{c.nome}</span>
              <WearBar value={c.usura} />
            </div>
          ))}
        </div>
      </div>
    </MockFrame>
  );
}

/** Alert sull'usura: notifica + contesto e azione consigliata. */
export function MockWearAlert({ className }: { className?: string }) {
  return (
    <MockFrame label="AfterLoop · Alert usura componenti" className={className}>
      <div className="flex flex-col gap-4">
        {/* Card alert principale (stato warn = da agire, bordo Ember appena accennato via pill) */}
        <div className="flex items-start gap-3 rounded-[12px] border border-al-line p-3.5">
          <span
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
            style={{ background: "rgba(255,107,44,.16)", color: "var(--al-glow)" }}
            aria-hidden="true"
          >
            <Icon name="bell" size={16} />
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-medium">Finestra ricambio aperta</p>
            <p className="mt-1 text-[12px] leading-[1.5] text-al-muted">
              Catena di trascinamento · usura stimata <span className="text-glow">82%</span>. Arriverà
              a fine vita prima del previsto: proponi il ricambio entro la prossima fermata
              programmata.
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5" style={{ font: "500 11px var(--al-font-mono)", color: "var(--al-glow)" }}>
              <Icon name="arrow-right" size={12} /> Crea task per il commerciale
            </p>
          </div>
        </div>

        {/* Altri componenti in osservazione */}
        <div className="grid gap-3 border-t border-al-line/70 pt-4">
          <span className="al-eyebrow !text-[10px]">In osservazione</span>
          <div className="grid grid-cols-[110px_1fr] items-center gap-3 md:grid-cols-[170px_1fr]">
            <span className="truncate text-[12px] text-al-muted">Rulli portanti</span>
            <WearBar value={64} />
          </div>
          <div className="grid grid-cols-[110px_1fr] items-center gap-3 md:grid-cols-[170px_1fr]">
            <span className="truncate text-[12px] text-al-muted">Cinghia motore</span>
            <WearBar value={41} />
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/** Task assegnato + email già pronta da inviare. */
export function MockTaskEmail({ className }: { className?: string }) {
  return (
    <MockFrame label="AfterLoop · Task e follow-up" className={className}>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border border-al-line"
            style={{ color: "var(--al-sky)" }}
            aria-hidden="true"
          >
            <Icon name="tasks" size={16} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[13px] font-medium">Chiama [CLIENTE C] — proposta ricambio catena</p>
              <span className="text-al-muted" style={{ font: "500 11px var(--al-font-mono)" }}>
                entro venerdì
              </span>
            </div>
            <p className="mt-1 text-[12px] text-al-muted">Assegnato a: Marco · Account service</p>
          </div>
          <span className="al-pill al-pill--warn shrink-0" style={{ font: "500 10px var(--al-font-mono)" }}>
            DA AGIRE
          </span>
        </div>

        {/* Email pronta */}
        <div className="rounded-[12px] border border-al-line bg-white/[0.03] p-3.5">
          <div className="flex items-center justify-between gap-3 border-b border-al-line/70 pb-3">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="text-al-muted" aria-hidden="true">
                <Icon name="mail" size={16} />
              </span>
              <span className="truncate text-[12px] text-al-muted">A: info@[CLIENTE-C].it</span>
            </div>
            <span className="shrink-0 rounded-full border border-al-line px-2 py-0.5 text-al-muted" style={{ font: "500 10px var(--al-font-mono)" }}>
              BOZZA
            </span>
          </div>
          <p className="pt-3 text-[13px] font-medium">Proposta di ricambio — Trasportatore [MODELLO]</p>
          <p className="mt-1.5 text-[12px] leading-[1.55] text-al-muted">
            Buongiorno, come da piano di servizio: la catena di trascinamento ha superato il 75% di
            vita utile. Il ricambio consigliato [MODELLO-RC] [...]
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ background: "var(--al-ember)", color: "var(--al-ink)", font: "500 12px var(--al-font-sans)" }}>
              <Icon name="send" size={13} /> Apri bozza e invia
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-al-line px-3 py-1.5 text-al-muted" style={{ font: "500 12px var(--al-font-sans)" }}>
              Rivedi
            </span>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}

/** Priorità della settimana: la lista ordinata del team service. */
export function MockPriorities({ className }: { className?: string }) {
  const items: Array<{ n: string; tipo: "Ricambio" | "Manutenzione" | "Revamping"; cliente: string; dettaglio: string; tone: "ok" | "warn" | "info"; stato: string }> = [
    { n: "01", tipo: "Ricambio", cliente: "[CLIENTE C]", dettaglio: "Catena di trascinamento · usura 82%", tone: "warn", stato: "Da ispezionare" },
    { n: "02", tipo: "Manutenzione", cliente: "[CLIENTE A]", dettaglio: "Intervento preventivo rulli portanti", tone: "ok", stato: "Operativa" },
    { n: "03", tipo: "Revamping", cliente: "[CLIENTE B]", dettaglio: "Proposta revisione lineari", tone: "info", stato: "Ticket chiuso" },
  ];
  const chipTone: Record<string, { bg: string; fg: string }> = {
    Ricambio: { bg: "rgba(255,107,44,.14)", fg: "var(--al-glow)" },
    Manutenzione: { bg: "rgba(61,220,151,.14)", fg: "var(--al-ok)" },
    Revamping: { bg: "rgba(124,155,255,.16)", fg: "var(--al-sky)" },
  };
  return (
    <MockFrame label="AfterLoop · Priorità della settimana" className={className}>
      <ol className="divide-y divide-al-line/70">
        {items.map((it) => (
          <li key={it.n} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <span className="w-5 shrink-0 text-al-muted" style={{ font: "500 12px var(--al-font-mono)" }}>
              {it.n}
            </span>
            <span
              className="shrink-0 rounded-full px-2 py-1"
              style={{
                background: chipTone[it.tipo].bg,
                color: chipTone[it.tipo].fg,
                font: "500 11px var(--al-font-mono)",
              }}
            >
              {it.tipo}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-medium">{it.cliente}</p>
              <p className="mt-0.5 truncate text-[12px] text-al-muted">{it.dettaglio}</p>
            </div>
            <span className="hidden shrink-0 text-al-muted sm:block" style={{ font: "500 11px var(--al-font-mono)" }}>
              {it.stato}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-3 border-t border-al-line/70 pt-3 text-[11px] text-al-muted" style={{ font: "400 11px var(--al-font-mono)" }}>
        Ordinata per impatto sul cliente e urgenza dell&apos;usura.
      </p>
    </MockFrame>
  );
}

/** Mini visual per il passo "Calcola l'usura". */
export function MockWearMini({ className }: { className?: string }) {
  const comp = [
    { v: 82, l: "Catena" },
    { v: 64, l: "Rulli" },
    { v: 41, l: "Cinghia" },
  ];
  return (
    <div className={cn("al-card p-4", className)} aria-hidden="true">
      <div className="grid gap-2.5">
        {comp.map((c) => (
          <div key={c.l} className="grid grid-cols-[52px_1fr] items-center gap-2">
            <span className="text-al-muted" style={{ font: "500 10px var(--al-font-mono)" }}>
              {c.l}
            </span>
            <WearBar value={c.v} />
          </div>
        ))}
      </div>
    </div>
  );
}
