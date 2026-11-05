import { Accent, Container, Eyebrow, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";

const FAQ = [
  {
    q: "Cos'è AfterLoop?",
    a: "AfterLoop è una piattaforma per il post-vendita delle PMI manifatturiere. Mappa il ciclo di vita di ogni macchina venduta, tiene sotto controllo l'usura dei componenti critici e dice al tuo team commerciale quando è il momento di proporre ricambi, manutenzione preventiva, revamping o estensioni di garanzia, con task e bozze di email già pronte.",
  },
  {
    q: "A chi serve?",
    a: "A aziende che producono e vendono macchinari industriali: conveyor, presse, impianti di automazione. È pensata per titolari, direttori commerciali e responsabili service/after-sales che vogliono trasformare il parco macchine venduto in fatturato ricorrente, invece di subire le chiamate di urgenza.",
  },
  {
    q: "A che punto è il prodotto?",
    a: "È in sviluppo attivo ed entriamo in early access con le prime aziende. Le funzioni descritte in questa pagina — mappa del ciclo di vita, calcolo dell'usura, task ed email pronte — sono il perno della prima versione. Ciò che non esiste ancora oggi: integrazioni con gestionali ed ERP, import automatici di dati e rapporti avanzati. Le priorità dello sviluppo le decidiamo insieme ai primi clienti.",
  },
  {
    q: "Come si inseriscono i dati delle macchine?",
    a: "In onboarding carichiamo insieme a te il parco macchine e i componenti critici, con la vita utile stimata. Nella prima versione l'inserimento è manuale e guidato: per un parco da decine di macchine è lavoro di poche ore, e poi si aggiorna solo quando vendi o installi qualcosa di nuovo.",
  },
  {
    q: "Come richiedo l'early access?",
    a: "Compila il modulo in fondo a questa pagina: nome, email aziendale, azienda e ruolo. Stiamo selezionando le prime manifatturiere con cui mettere a punto il prodotto; le aziende selezionate ricevono una demo di 20 minuti e possono iniziare a usare la piattaforma in anteprima, lavorando direttamente con il nostro team.",
  },
];

export default function Faq() {
  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="al-title mt-3 text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[40px]">
              Domande <Accent>dirette</Accent>, risposte altrettanto dirette.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-al-muted">
              Non trovi la risposta che cerchi? Scrivici quando richiedi l&apos;early access: rispondiamo
              a tutti.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="border-t border-al-line">
              {FAQ.map((f) => (
                <li key={f.q} className="border-b border-al-line">
                  <details className="group">
                    <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[17px] font-medium tracking-[-0.01em] transition-colors duration-150 hover:text-glow [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-al-muted transition-transform duration-200 group-open:rotate-45"
                      >
                        <Icon name="plus" size={18} />
                      </span>
                    </summary>
                    <div className="pb-6 pr-10 text-[15px] leading-[1.65] text-al-muted">{f.a}</div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
