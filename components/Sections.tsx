import { Accent, Card, Container, Eyebrow, IconTile, Section, SectionHeader, StatusPill, TOKEN_COLOR, TOKEN_TINT, cn, type TokenColor } from "@/components/ui";

import { Icon } from "@/components/Icon";
import DemoFrame from "@/components/DemoFrame";
import Reveal from "@/components/Reveal";

/* ---------------------------------------------------------------- *
 * Striscia chip dei casi d'uso (statica, tra hero e problema)
 * ---------------------------------------------------------------- */
const CASI: Array<{ icon: Parameters<typeof Icon>[0]["name"]; label: string; color: TokenColor }> = [
  { icon: "box", label: "Ricambi", color: "ember" },
  { icon: "wrench", label: "Manutenzione preventiva", color: "cobalt" },
  { icon: "refresh", label: "Revamping", color: "flare" },
  { icon: "shield", label: "Estensioni di garanzia", color: "sky" },
];

export function CaseChips() {
  return (
    <div className="border-b border-al-line">
      <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 py-6 md:justify-between">
        <span className="al-eyebrow" aria-hidden="true">
          Cosa copre per il commerciale
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-2" aria-label="Casi d'uso coperti">
          {CASI.map((c) => (
            <li key={c.label}>
              <span
                className="inline-flex items-center gap-2 rounded-full border border-al-line px-3.5 py-2 text-[13px] text-al-muted"
                style={{ background: TOKEN_TINT[c.color] }}
              >
                <span style={{ color: TOKEN_COLOR[c.color] }} aria-hidden="true">
                  <Icon name={c.icon} size={15} />
                </span>
                {c.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Problema — Ember/Glow
 * ---------------------------------------------------------------- */
const PROBLEMI = [
  {
    icon: "box" as const,
    titolo: "Perdi i ricambi dopo il collaudo",
    testo:
      "Il collaudo chiude la commessa e apre il silenzio. Un anno dopo il cliente compra la catena di ricambio altrove, perché l'hai lasciato soltanto con la lista ricambi in un allegato PDF.",
  },
  {
    icon: "downtime" as const,
    titolo: "Il cliente ti chiama solo a macchina ferma",
    testo:
      "Quando squilla il telefono c'è un fermo improvviso, un'urgenza e un cliente arrabbiato. Nessuna finestra per proporre il giusto prima che qualcosa si rompa.",
  },
  {
    icon: "user" as const,
    titolo: "Il post-vendita dipende dalla memoria di qualcuno",
    testo:
      "Chi ha seguito l'impianto sa quali componenti erano critici. Ma quando viene promosso o cambia azienda, se ne va anche il margine del post-vendita.",
  },
];

export function Problem() {
  return (
    <Section id="problema" accent="glow">
      <Container>
        <SectionHeader
          node="ember"
          eyebrow="Il problema"
          title={
            <>
              Il venduto è un circolo <Accent>interrotto</Accent>.
            </>
          }
          lead="Ogni macchina consegnata dovrebbe generare ricambi, manutenzione e revamping per anni. Nella maggior parte delle PMI manifatturiere, quella catena si interrompe subito dopo il collaudo."
        />
        <ul className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3">
          {PROBLEMI.map((p, i) => (
            <li key={p.titolo}>
              <Reveal delay={i * 60}>
                <Card className="h-full">
                  <IconTile name={p.icon} color="ember" muted size={20} />
                  <h3 className="al-title balance mt-5 text-[19px] tracking-[-0.02em]">{p.titolo}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-al-muted">{p.testo}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * Come funziona — Cobalt, 3 passi numerati su una linea con nodi
 * ---------------------------------------------------------------- */
const PASSI = [
  {
    icon: "loop" as const,
    titolo: "Mappa il ciclo di vita",
    testo:
      "Per ogni macchina venduta registri le fasi del loop: consegna, avviamento, garanzia, ricambi. In una schermata vedi lo stato di tutto il parco venduto, non un foglio Excel di 4 anni fa.",
  },
  {
    icon: "wear" as const,
    titolo: "Calcola l'usura",
    testo:
      "Ogni componente critico ha una vita utile stimata. AfterLoop mostra quanto se ne è consumato e quanto ne resta, componente per componente, macchina per macchina.",
  },
  {
    icon: "bell" as const,
    titolo: "Ti avvisa al momento giusto",
    testo:
      "Quando la finestra di proposta si apre, AfterLoop crea un task per il commerciale e prepara la bozza dell'email. Il cliente riceve l'offerta prima che il componente si rompa, non dopo.",
  },
];

function passoVisual(n: number) {
  if (n === 1) {
    return (
      <div className="rounded-[12px] border border-al-line p-4" aria-hidden="true">
        <div className="flex flex-wrap items-center gap-1.5">
          {["Consegna", "Avviamento", "Garanzia", "Ricambi"].map((s, i) => (
            <span key={s} className="inline-flex items-center gap-1.5">
              <span
                className="inline-flex items-center rounded-full px-2.5 py-1"
                style={{
                  font: "500 11px var(--al-font-mono)",
                  background: i === 3 ? "rgba(255,107,44,.14)" : TOKEN_TINT.cobalt,
                  color: i === 3 ? TOKEN_COLOR.glow : TOKEN_COLOR.sky,
                }}
              >
                {s}
              </span>
              {i < 3 ? (
                <span className="text-al-muted" style={{ fontSize: 10 }}>
                  →
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (n === 2) {
    return (
      <div className="rounded-[12px] border border-al-line p-4" aria-hidden="true">
        <div className="grid gap-2.5">
          {[
            { l: "Catena", v: 82, c: "var(--al-ember)" },
            { l: "Rulli", v: 56, c: "var(--al-glow)" },
            { l: "Cinghia", v: 34, c: "var(--al-ok)" },
          ].map((c) => (
            <div key={c.l} className="grid grid-cols-[58px_1fr] items-center gap-3">
              <span className="text-al-muted" style={{ font: "500 10px var(--al-font-mono)" }}>
                {c.l}
              </span>
              <div className="flex items-center gap-2.5">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                  <div className="h-full rounded-full" style={{ width: `${c.v}%`, background: c.c }} />
                </div>
                <span className="tabular w-8 text-right text-al-muted" style={{ font: "500 10px var(--al-font-mono)" }}>
                  {c.v}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="rounded-[12px] border border-al-line p-4" aria-hidden="true">
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          style={{ background: "rgba(255,107,44,.16)", color: TOKEN_COLOR.glow }}
        >
          <Icon name="bell" size={15} />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-medium">Finestra ricambio aperta</p>
          <p className="mt-0.5 truncate text-[12px] text-al-muted">Task + bozza email pronta</p>
        </div>
        <span className="al-pill al-pill--warn ml-auto hidden shrink-0 sm:inline-block" style={{ font: "500 10px var(--al-font-mono)" }}>
          DA AGIRE
        </span>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <Section id="come-funziona" accent="cobalt">
      <Container>
        <SectionHeader
          node="cobalt"
          eyebrow="Come funziona"
          title={
            <>
              Tre passi, ogni macchina <Accent>seguita</Accent>.
            </>
          }
        />

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {PASSI.map((s, i) => {
            const active = i === 2;
            const node = active ? TOKEN_COLOR.ember : TOKEN_COLOR.cobalt;
            return (
              <li key={s.titolo} className="relative">
                {/* linea con nodi: il loop del brand. Passo finale (da agire) = Ember. */}
                {i < 2 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-2 hidden h-px w-[calc(100%-4rem)] after:absolute after:right-0 after:top-1/2 md:block"
                    style={{
                      left: "calc(2rem + 40px)",
                      background: `linear-gradient(90deg, ${node}, rgba(43,89,255,0.25))`,
                      opacity: 0.5,
                    }}
                  />
                ) : null}
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="tabular al-title mt-0.5 inline-flex h-8 items-center text-[26px] tracking-[-0.02em]"
                    style={{ color: active ? TOKEN_COLOR.ember : TOKEN_COLOR.cobalt }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-[9px] w-[9px] shrink-0 rounded-full"
                    style={{ background: node, boxShadow: "0 0 0 4px rgba(43,89,255,0.08)" }}
                  />
                </div>
                <Reveal delay={i * 60} className="mt-4">
                  <div>
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-al-line"
                      style={{ background: TOKEN_TINT[active ? "ember" : "cobalt"], color: active ? TOKEN_COLOR.glow : TOKEN_COLOR.sky }}
                      aria-hidden="true"
                    >
                      <Icon name={s.icon} size={20} />
                    </span>
                    <h3 className="al-title mt-5 text-[19px] tracking-[-0.02em]">{s.titolo}</h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-al-muted">{s.testo}</p>
                    <div className="mt-6">{passoVisual(i + 1)}</div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * Showcase prodotto — Sky, 3 blocchi alternati con le demo del kit
 * ---------------------------------------------------------------- */
export function Showcase() {
  return (
    <Section id="prodotto" accent="sky">
      <Container>
        <SectionHeader
          node="sky"
          eyebrow="Il prodotto"
          title={
            <>
              Le schermate che il tuo team userebbe <Accent>ogni lunedì</Accent>.
            </>
          }
          lead="Niente slide: queste sono le viste centrali di AfterLoop, con dati di esempio e clienti anonimi."
          badge={
            <span
              className="rounded-full border border-al-line px-2.5 py-1 text-al-muted"
              style={{ font: "500 10px var(--al-font-mono)", letterSpacing: "0.06em" }}
            >
              DATI DI ESEMPIO
            </span>
          }
        />

        <div className="mt-14 grid gap-16 md:mt-20 lg:gap-20">
          {/* Blocco 1 — demo: macchina */}
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <IconTile name="gear" color="sky" muted size={18} />
                  <span className="al-eyebrow">Scheda macchina</span>
                </div>
                <h3 className="al-title balance mt-5 text-[26px] leading-[1.1] tracking-[-0.03em] md:text-[30px]">
                  Alert sull&apos;<Accent>usura</Accent> dei componenti
                </h3>
                <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-al-muted">
                  Ogni componente critico della macchina — catene, rulli, cuscinetti — ha la sua
                  barra di usura stimata. L&apos;alert arriva quando la finestra di intervento si
                  apre, non dopo la rottura.
                </p>
              </div>
              <div className="lg:col-span-8">
                <DemoFrame
                  src="/demos/macchina.html"
                  title="AfterLoop — Dettaglio macchina e usura componenti (dati di esempio)"
                  callouts={["Usura per componente", "Alert al momento giusto"]}
                  caption="Per ogni componente la barra di usura stimata: il commerciale sa cosa proporre e quando."
                />
              </div>
            </div>
          </Reveal>

          {/* Blocco 2 — demo: settimana */}
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="order-2 lg:order-1 lg:col-span-8">
                <DemoFrame
                  src="/demos/settimana.html"
                  title="AfterLoop — Priorità della settimana (dati di esempio)"
                  callouts={["Priorità per impatto", "Lista del lunedì"]}
                  caption="Ogni lunedì il team sa chi chiamare, cosa proporre e in che ordine, senza riscoprire ogni volta."
                />
              </div>
              <div className="order-1 lg:order-2 lg:col-span-4">
                <div className="flex items-center gap-3">
                  <IconTile name="tasks" color="sky" muted size={18} />
                  <span className="al-eyebrow">Priorità della settimana</span>
                </div>
                <h3 className="al-title balance mt-5 text-[26px] leading-[1.1] tracking-[-0.03em] md:text-[30px]">
                  Sai ogni settimana chi <Accent>chiamare</Accent>
                </h3>
                <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-al-muted">
                  La lista è ordinata per impatto sul cliente e urgenza dell&apos;usura: i ricambi
                  prima della rottura, la manutenzione prima del fermo, il revamping quando la
                  macchina invecchia.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Blocco 3 — demo: followup */}
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <IconTile name="mail" color="sky" muted size={18} />
                  <span className="al-eyebrow">Follow-up</span>
                </div>
                <h3 className="al-title balance mt-5 text-[26px] leading-[1.1] tracking-[-0.03em] md:text-[30px]">
                  Follow-up <Accent>pronti da inviare</Accent>
                </h3>
                <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-al-muted">
                  Il task aperto con la bozza d&apos;email completa: [CLIENTE A], [MODELLO],
                  proposta di ricambio e orario. Il commerciale la rivede in tre righe e la invia.
                </p>
              </div>
              <div className="lg:col-span-8">
                <DemoFrame
                  src="/demos/followup.html"
                  title="AfterLoop — Task ed email pronta (dati di esempio)"
                  callouts={["Email già scritta", "In 3 righe la rivedi"]}
                  caption="Zero fogli bianchi: la bozza d'email è pronta e rispetta il tono della tua azienda."
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * Funzionalità — griglia bento, una tinta per cella
 * ---------------------------------------------------------------- */
type BentoCell = {
  icon: Parameters<typeof Icon>[0]["name"];
  titolo: string;
  testo: string;
  color: TokenColor;
  span: string;
  visual: "usura" | "data" | "garanzia" | "alert" | "email" | "timeline";
};

const BENTO: BentoCell[] = [
  {
    icon: "box",
    titolo: "Ricambi",
    testo: "La finestra di proposta si apre quando il componente ha ancora valore per il cliente: vendi il ricambio prima che diventi un'urgenza.",
    color: "ember",
    span: "md:col-span-7",
    visual: "usura",
  },
  {
    icon: "shield",
    titolo: "Estensioni di garanzia",
    testo: "La scadenza di garanzia diventa un contatto calendarizzato, non una data persa.",
    color: "sky",
    span: "md:col-span-5",
    visual: "garanzia",
  },
  {
    icon: "wrench",
    titolo: "Manutenzione preventiva",
    testo: "Interventi pianificati sul parco venduto, con priorità in base all'usura: meno fermi improvvisi per te e per il cliente.",
    color: "cobalt",
    span: "md:col-span-5",
    visual: "data",
  },
  {
    icon: "mail",
    titolo: "Email già pronte",
    testo: "Per ogni opportunità, una bozza completa: il commerciale la controlla, la adatta, la invia. Zero fogli bianchi.",
    color: "ok",
    span: "md:col-span-7",
    visual: "email",
  },
  {
    icon: "refresh",
    titolo: "Revamping",
    testo: "Le macchine che invecchiano sono opportunità: AfterLoop ti dice quando proporre una revisione o un ammodernamento.",
    color: "flare",
    span: "md:col-span-6",
    visual: "timeline",
  },
  {
    icon: "bell",
    titolo: "Alert sull'usura",
    testo: "Notifiche puntuali quando un componente critico entra nella finestra di intervento, con il contesto per agire subito.",
    color: "glow",
    span: "md:col-span-6",
    visual: "alert",
  },
];

function BentoVisual({ kind }: { kind: BentoCell["visual"] }) {
  const mono = (t: string) => ({ font: "500 11px var(--al-font-mono)", letterSpacing: "0.03em" }) as const;
  switch (kind) {
    case "usura":
      return (
        <div aria-hidden="true" className="mt-5 border-t border-al-line pt-4">
          <div className="flex items-center gap-3">
            <span className="text-al-muted" style={mono("l")}>Catena</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
              <div className="h-full w-[82%] rounded-full" style={{ background: "var(--al-ember)" }} />
            </div>
            <span className="tabular text-al-muted" style={mono("v")}>82%</span>
          </div>
        </div>
      );
    case "garanzia":
      return (
        <div aria-hidden="true" className="mt-5 border-t border-al-line pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <StatusPill tone="info">Scade [DATA]</StatusPill>
            <span className="text-al-muted" style={mono("x")}>→</span>
            <StatusPill tone="ok">Estensione [€]</StatusPill>
          </div>
        </div>
      );
    case "data":
      return (
        <div aria-hidden="true" className="mt-5 border-t border-al-line pt-4">
          <div className="flex items-center gap-2.5">
            <span style={{ color: TOKEN_COLOR.sky }} className="shrink-0">
              <Icon name="calendar" size={16} />
            </span>
            <span className="tabular text-al-muted" style={mono("l")}>[DATA] · intervento programmato</span>
          </div>
        </div>
      );
    case "email":
      return (
        <div aria-hidden="true" className="mt-5 border-t border-al-line pt-4">
          <div className="flex items-center gap-2.5">
            <span className="shrink-0 rounded-full border border-al-line px-2 py-0.5 text-al-muted" style={mono("b")}>
              BOZZA
            </span>
            <span className="truncate text-al-muted" style={mono("l")}>Proposta di ricambio — [CLIENTE A]</span>
          </div>
        </div>
      );
    case "timeline":
      return (
        <div aria-hidden="true" className="mt-5 border-t border-al-line pt-4">
          <div className="flex items-center gap-2">
            {[40, 61, 84].map((t) => (
              <span key={t} className="inline-block h-1.5 w-8 rounded-full" style={{ background: t === 84 ? "var(--al-flare)" : "rgba(224,69,123,.22)" }} />
            ))}
            <span className="ml-1 tabular text-al-muted" style={mono("t")}>2019 → oggi → [DATA]</span>
          </div>
        </div>
      );
    case "alert":
      return (
        <div aria-hidden="true" className="mt-5 border-t border-al-line pt-4">
          <div className="flex items-center gap-2.5">
            <span
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(255,107,44,.16)", color: TOKEN_COLOR.glow }}
            >
              <Icon name="bell" size={12} />
            </span>
            <span className="truncate text-al-muted" style={mono("l")}>Cuscinetti 78% · finestra aperta</span>
          </div>
        </div>
      );
  }
}

export function Features() {
  return (
    <Section id="funzioni">
      <Container>
        <SectionHeader
          node="ember"
          eyebrow="Funzionalità"
          title={
            <>
              Dalla scadenza di garanzia al revamping: tutto il <Accent>circuito</Accent>.
            </>
          }
          badge={
            <span
              className="rounded-full border border-al-line px-2.5 py-1 text-al-muted"
              style={{ font: "500 10px var(--al-font-mono)", letterSpacing: "0.06em" }}
            >
              DATI DI ESEMPIO
            </span>
          }
        />
        <ul className="mt-12 grid grid-flow-row gap-5 md:grid-cols-12 md:mt-14 md:gap-6">
          {BENTO.map((f, i) => (
            <li key={f.titolo} className={f.span}>
              <Reveal delay={(i % 2) * 60}>
                <Card className="h-full">
                  <IconTile name={f.icon} color={f.color} muted size={20} />
                  <h3 className="al-title mt-5 text-[17px] tracking-[-0.02em]">{f.titolo}</h3>
                  <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.6] text-al-muted">{f.testo}</p>
                  <BentoVisual kind={f.visual} />
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * Reattivo vs proattivo — due colonne
 * ---------------------------------------------------------------- */
const RIGHE_PRIMA = [
  "Il team service reagisce alle chiamate di urgenza.",
  "I ricambi partono dopo la rottura: il cliente è già fermo e già infastidito.",
  "Le proposte di routine dipendono dalla memoria di chi ha seguito la commessa.",
  "Le garanzie scadute restano scadute.",
];

const RIGHE_DOPO = [
  "Finestra di intervento aperta prima della rottura: task e bozza email entro venerdì.",
  "Ricambi e manutenzione proposti nel momento conveniente per il cliente.",
  "Ogni settimana la lista di chiamate con priorità secondo l'usura.",
  "Ogni scadenza di garanzia è un appuntamento nel calendario del team.",
];

export function ReactiveProactive() {
  return (
    <Section id="reattivo" accent="cobalt">
      <Container>
        <SectionHeader
          node="ok"
          eyebrow="Reattivo vs proattivo"
          title={
            <>
              Passare da <Accent>subire</Accent> ad anticipare, riga per riga.
            </>
          }
        />
        <Reveal>
          <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-8">
            {/* Prima: neutro / Ember spento */}
            <div className="al-card p-6 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <span className="al-eyebrow">Fino a oggi</span>
                <StatusPill tone="warn">Reattivo</StatusPill>
              </div>
              <ul className="mt-6 grid gap-4">
                {RIGHE_PRIMA.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[15px] leading-[1.55] text-al-muted">
                    <span className="mt-0.5 shrink-0" style={{ color: "rgba(255,107,44,.55)" }} aria-hidden="true">
                      <Icon name="close" size={15} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dopo: Cobalt/Ok */}
            <div
              className="hairline-top al-card p-6 md:p-8"
              style={{ background: "rgba(43,89,255,.07)", borderColor: "rgba(43,89,255,.28)" }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="al-eyebrow">Con AfterLoop</span>
                <StatusPill tone="ok">Proattivo</StatusPill>
              </div>
              <ul className="mt-6 grid gap-4">
                {RIGHE_DOPO.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[15px] leading-[1.55] text-al-text">
                    <span className="mt-0.5 shrink-0" style={{ color: TOKEN_COLOR.ok }} aria-hidden="true">
                      <Icon name="check" size={15} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * Cosa cambia per te — sezione CHIARA (Mist, testo Ink, accenti Cobalt)
 * ---------------------------------------------------------------- */
const BENEFICI = [
  {
    icon: "euro" as const,
    titolo: "Più ricavi da ricambi e manutenzione",
    testo:
      "Il parco macchine venduto è il canale con il margine più alto: ricambi, assistenza e revamping proposti al momento giusto, in modo proattivo. Da misurare insieme ai primi early access [X%].",
  },
  {
    icon: "downtime" as const,
    titolo: "Meno fermi improvvisi",
    testo:
      "Un componente sostituito prima della rottura evita una macchina ferma e una chiamata urgente. Il cliente che non resta fermo torna a comprare da te.",
  },
  {
    icon: "users" as const,
    titolo: "Relazioni più solide con i clienti",
    testo:
      "Chiamare il cliente per dirgli \"la catena della tua macchina sta per finire, te la cambiamo prima che si fermi\" costruisce una fiducia che nessuna proposta a freddo può comprare.",
  },
];

export function Benefits() {
  return (
    <Section id="cambia" dataTheme="light" className="relative">
      {/* Passaggio sfumato Ink→Mist (top) e Mist→Ink (bottom) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--al-ink)] to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--al-ink)] to-transparent" />
      <Container className="relative z-[1]">
        <SectionHeader
          node="ember"
          eyebrow="Cosa cambia per te"
          title={
            <>
              Post-vendita come <Accent>motore</Accent> di fatturato.
            </>
          }
          lead="Siamo in fase di lancio: non mettiamo in pagina numeri che non abbiamo ancora misurato. Con i primi early access li misuriamo insieme."
        />
        <ul className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3">
          {BENEFICI.map((b, i) => (
            <li key={b.titolo}>
              <Reveal delay={i * 60}>
                <Card className="h-full">
                  <IconTile name={b.icon} color="ok" muted size={20} />
                  <h3 className="al-title balance mt-5 text-[19px] tracking-[-0.02em]">{b.titolo}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-al-muted">{b.testo}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="al-eyebrow mt-10 !text-[10px]" role="note">
          [X%] da definire con i primi early access — nessun numero presentato come realizzato
        </p>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * Per chi è — Sky
 * ---------------------------------------------------------------- */
const PROFILI = [
  {
    icon: "user" as const,
    ruolo: "Titolari",
    headline: "Post-vendita da centro di costo a margine",
    testo:
      "Vedere in un'unica schermata quanto valore resta nel parco macchine venduto e quante opportunità di vendita ci sono adesso.",
  },
  {
    icon: "trend" as const,
    ruolo: "Direttori commerciali",
    headline: "Pipeline di post-vendita prevedibile",
    testo:
      "Obiettivi di ricambi e servizi con basi concrete: ogni settimana la lista delle proposte da fare, con priorità e contatto già pronti.",
  },
  {
    icon: "headset" as const,
    ruolo: "Responsabili service e after-sales",
    headline: "Meno urgenze, più lavoro pianificato",
    testo:
      "L'equipe service passa da rispondere alle chiamate a seguire un calendario: alert, task e follow-up divisi tra l'operativa e il commerciale.",
  },
];

export function ForWhom() {
  return (
    <Section id="per-chi" accent="sky">
      <Container>
        <SectionHeader
          node="sky"
          eyebrow="Per chi è"
          title={
            <>
              Fatto per chi vive di <Accent>fatturato</Accent> post-vendita.
            </>
          }
          lead="Costruito per le PMI manifatturiere che producono macchinari industriali, conveyor e sistemi di automazione e li vendono con assistenza inclusa."
        />
        <ul className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3">
          {PROFILI.map((p, i) => (
            <li key={p.ruolo}>
              <Reveal delay={i * 60}>
                <Card className="h-full">
                  <IconTile name={p.icon} color="sky" muted size={20} />
                  <p className="al-eyebrow mt-5">{p.ruolo}</p>
                  <h3 className="al-title balance mt-2 text-[19px] tracking-[-0.02em]">{p.headline}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-al-muted">{p.testo}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
