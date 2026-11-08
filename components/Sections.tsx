import { Accent, Card, Container, Eyebrow, Section, SectionHeader } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MockLifecycle, MockPriorities, MockTaskEmail, MockWearAlert, MockWearMini } from "@/components/mocks";
import Reveal from "@/components/Reveal";

/* ---------------------------------------------------------------- *
 * 3. Problema
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
    <Section id="problema">
      <Container>
        <SectionHeader
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-al-line text-al-muted">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="al-title mt-5 text-[19px] tracking-[-0.02em]">{p.titolo}</h3>
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
 * 4. Come funziona — 3 passi
 * ---------------------------------------------------------------- */
function StepVisual({ n }: { n: number }) {
  if (n === 1) {
    return (
      <div className="al-card p-4" aria-hidden="true">
        <div className="flex flex-wrap items-center gap-1.5">
          {["Consegna", "Avviamento", "Garanzia", "Ricambi"].map((s, i) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
              style={{
                font: "500 11px var(--al-font-mono)",
                background: i === 3 ? "rgba(255,107,44,.14)" : "var(--al-surface)",
                color: i === 3 ? "var(--al-glow)" : "var(--al-text-muted)",
                border: "1px solid var(--al-border)",
              }}
            >
              {i < 3 ? <span className="text-al-muted">{s}</span> : s}
              {i < 3 ? <Icon name="arrow-right" size={11} /> : null}
            </span>
          ))}
        </div>
      </div>
    );
  }
  if (n === 2) return <MockWearMini />;
  return (
    <div className="al-card flex items-center gap-3 p-4" aria-hidden="true">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(255,107,44,.16)", color: "var(--al-glow)" }}>
        <Icon name="bell" size={16} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-[13px] font-medium">Finestra ricambio aperta</p>
        <p className="mt-0.5 truncate text-[12px] text-al-muted">Task + bozza email pronta</p>
      </div>
      <span className="al-pill al-pill--warn shrink-0" style={{ font: "500 10px var(--al-font-mono)" }}>
        DA AGIRE
      </span>
    </div>
  );
}

const PASSI = [
  {
    icon: "loop" as const,
    titolo: "1. Mappa il ciclo di vita",
    testo:
      "Per ogni macchina venduta registri le fasi del loop: consegna, avviamento, garanzia, ricambi. In una schermata vedi lo stato di tutto il parco venduto, non un foglio Excel di 4 anni fa.",
  },
  {
    icon: "wear" as const,
    titolo: "2. Calcola l'usura",
    testo:
      "Ogni componente critico ha una vita utile stimata. AfterLoop mostra quanto se ne è consumato e quanto ne resta, componente per componente, macchina per macchina.",
  },
  {
    icon: "bell" as const,
    titolo: "3. Ti avvisa al momento giusto",
    testo:
      "Quando la finestra di proposta si apre, AfterLoop crea un task per il commerciale e prepara la bozza dell'email. Il cliente riceve l'offerta prima che il componente si rompa, non dopo.",  },
];

export function HowItWorks() {
  return (
    <Section id="come-funziona">
      <Container>
        <SectionHeader
          eyebrow="Come funziona"
          title={
            <>
              Tre passi, ogni macchina <Accent>seguita</Accent>.
            </>
          }
        />
        <ol className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3">
          {PASSI.map((s, i) => (
            <li key={s.titolo}>
              <Reveal delay={i * 60}>
                <Card className="flex h-full flex-col">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-al-line text-glow">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <h3 className="al-title mt-5 text-[19px] tracking-[-0.02em]">{s.titolo}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-al-muted">{s.testo}</p>
                  <div className="mt-auto pt-6">
                    <StepVisual n={i + 1} />
                  </div>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * 5. Showcase prodotto — 3 blocchi alternati
 * ---------------------------------------------------------------- */
export function Showcase() {
  return (
    <Section id="prodotto">
      <Container>
        <SectionHeader
          eyebrow="Il prodotto"
          title={
            <>
              Le schermate che il tuo team userebbe <Accent>ogni lunedì</Accent>.
            </>
          }
          lead="Niente slide: queste sono le viste centrali di AfterLoop, con dati di esempio e clienti anonimi."
        />

        <div className="mt-14 grid gap-16 md:mt-20 lg:gap-20">
          {/* Blocco 1 */}
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-al-line text-al-muted">
                    <Icon name="loop" size={18} />
                  </span>
                  <span className="al-eyebrow">Scheda macchina</span>
                </div>
                <h3 className="al-title mt-5 text-[26px] leading-[1.1] tracking-[-0.03em] md:text-[30px]">
                  Il ciclo di vita di ogni <Accent>macchina</Accent>
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-al-muted">
                  Ogni macchina consegnata ha la sua scheda: cliente, modello, garanzia, componenti
                  critici con la loro usura. Il team service sa sempre dove si trova ogni macchina nel
                  suo ciclo, senza aprire cartelle di versione su versione.
                </p>
              </div>
              <div className="lg:col-span-7">
                <MockLifecycle />
              </div>
            </div>
          </Reveal>

          {/* Blocco 2 */}
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="order-2 lg:order-1 lg:col-span-7">
                <MockWearAlert />
              </div>
              <div className="order-1 lg:order-2 lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-al-line text-al-muted">
                    <Icon name="wear" size={18} />
                  </span>
                  <span className="al-eyebrow">Alert in tempo reale</span>
                </div>
                <h3 className="al-title mt-5 text-[26px] leading-[1.1] tracking-[-0.03em] md:text-[30px]">
                  Alert sul&apos;<Accent>usura</Accent> dei componenti
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-al-muted">
                  Quando un componente critico si avvicina alla fine della sua vita utile, AfterLoop
                  apre un alert con il contesto: macchina, componente, usura stimata e finestra di
                  intervento consigliata. Il tuo team decide, ma con le informazioni davanti.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Blocco 3 */}
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-al-line text-al-muted">
                    <Icon name="tasks" size={18} />
                  </span>
                  <span className="al-eyebrow">Task e follow-up</span>
                </div>
                <h3 className="al-title mt-5 text-[26px] leading-[1.1] tracking-[-0.03em] md:text-[30px]">
                  <Accent>Priorità</Accent> della settimana e follow-up pronti
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-al-muted">
                  Una lista chiara delle azioni con il maggior impatto: chiamate, proposte di
                  ricambio, preventivi di manutenzione. Ogni task arriva con l&apos;email già scritta:
                  il commerciale la rivede, la personalizza in tre righe e la invia.
                </p>
              </div>
              <div className="grid gap-6 lg:col-span-7">
                <MockPriorities />
                <MockTaskEmail />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * 6. Funzionalità — griglia 2x3
 * ---------------------------------------------------------------- */
const FUNZIONI: Array<{ icon: Parameters<typeof Icon>[0]["name"]; titolo: string; testo: string }> = [
  {
    icon: "box",
    titolo: "Ricambi",
    testo: "La finestra di proposta si apre quando il componente ha ancora valore per il cliente: vendi il ricambio prima che diventi un'urgenza.",
  },
  {
    icon: "wrench",
    titolo: "Manutenzione preventiva",
    testo: "Interventi pianificati sul parco venduto, con priorità in base all'usura: meno fermi improvvisi per te e per il cliente.",
  },
  {
    icon: "refresh",
    titolo: "Revamping",
    testo: "Le macchine che invecchiano sono opportunità: AfterLoop ti dice quando è il momento di proporre una revisione o un ammodernamento.",
  },
  {
    icon: "shield",
    titolo: "Estensioni di garanzia",
    testo: "La scadenza di garanzia diventa un contatto calendarizzato, non una data persa: proponi l'estensione al cliente giusto, in tempo.",
  },
  {
    icon: "bell",
    titolo: "Alert sull'usura",
    testo: "Notifiche puntuali quando un componente critico entra nella finestra di intervento, con il contesto per agire subito.",
  },
  {
    icon: "mail",
    titolo: "Email già pronte",
    testo: "Per ogni opportunità, una bozza completa: il commerciale la controlla, la adatta, la invia. Zero fogli bianchi.",
  },
];

export function Features() {
  return (
    <Section id="funzioni">
      <Container>
        <SectionHeader
          eyebrow="Funzionalità"
          title={
            <>
              Dalla scadenza di garanzia al revamping: tutto il <Accent>circuito</Accent>.
            </>
          }
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-14 lg:gap-x-8 lg:gap-y-6">
          {FUNZIONI.map((f, i) => (
            <li key={f.titolo}>
              <Reveal delay={(i % 2) * 60}>
                <div className="flex items-start gap-4 border-t border-al-line py-6 first:border-t first:pt-0 sm:pt-6">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-al-line text-mist">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="al-title text-[17px] tracking-[-0.02em]">{f.titolo}</h3>
                    <p className="mt-2 max-w-[420px] text-[15px] leading-[1.6] text-al-muted">{f.testo}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- *
 * 7. Cosa cambia per te
 * ---------------------------------------------------------------- */
const BENEFICI = [
  {
    icon: "euro" as const,
    titolo: "Più ricavi da ricambi e manutenzione",
    testo:
      "Il parco macchine venduto è il canale di vendita con il margine più alto: ricambi, assistenza e revamping proposti al momento giusto, in modo proattivo. Un punto di partenza da misurare insieme ai primi early access.",
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
      "Chiamare un cliente per dirgli \u201cla tua macchina sta per finire la catena, te la cambiamo prima che si fermi\u201d costruisce una fiducia che nessuna offerta a freddo può comprare.",
  },
];

export function Benefits() {
  return (
    <Section id="cambia">
      <Container>
        <SectionHeader
          eyebrow="Cosa cambia per te"
          title={
            <>
              Post-vendita come <Accent>motore</Accent> di fatturato.
            </>
          }
          lead="Siamo in fase di lancio: non mettiamo in pagina numeri che non abbiamo ancora misurato. Con i primi early access li misureremo insieme."
        />
        <ul className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3">
          {BENEFICI.map((b, i) => (
            <li key={b.titolo}>
              <Reveal delay={i * 60}>
                <Card className="h-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-al-line text-mist">
                    <Icon name={b.icon} size={20} />
                  </span>
                  <h3 className="al-title mt-5 text-[19px] tracking-[-0.02em]">{b.titolo}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-al-muted">{b.testo}</p>
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
 * 8. Per chi è
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
    <Section id="per-chi">
      <Container>
        <SectionHeader
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-al-line text-mist">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <p className="al-eyebrow mt-5">{p.ruolo}</p>
                  <h3 className="al-title mt-2 text-[19px] tracking-[-0.02em]">{p.headline}</h3>
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
