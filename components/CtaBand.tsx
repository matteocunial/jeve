import { Accent, Button, Container, Eyebrow, HeroAccent, Arrow } from "@/components/ui";

/**
 * Banda CTA finale: secondo e ultimo uso dell'afterglow (striature flautate),
 * con anelli del loop (patterns/loop-rings.svg) molto tenui. Nessun form qui:
 * il form è nella sezione successiva, mai sopra l'afterglow.
 */
export default function CtaBand() {
  return (
    <section id="cta" className="al-afterglow scroll-mt-16 border-t border-al-line">
      {/* Anelli del loop del brand, appena percettibli */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/patterns/loop-rings.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute right-[-120px] top-[-40px] hidden h-[420px] w-auto opacity-[0.08] md:block"
      />
      <Container className="relative z-[1] flex flex-col items-center py-24 text-center md:py-32">
        <Eyebrow node="ember">Early access</Eyebrow>
        <h2 className="al-title balance mt-4 max-w-[760px] text-[36px] leading-[1.05] tracking-[-0.035em] md:mt-5 md:text-[52px]">
          Porta AfterLoop nella tua <HeroAccent>azienda</HeroAccent>.
        </h2>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-al-muted md:text-[18px]">
          Stiamo selezionando le prime PMI manifatturiere con cui mettere a punto il prodotto. Demo
          di 20 minuti, con il tuo parco macchine come materiale di lavoro.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="#early-access" className="w-full justify-center sm:w-auto">
            Richiedi l&apos;early access
            <Arrow />
          </Button>
        </div>
        <p className="mt-6 text-[13px] text-al-muted" style={{ font: "400 12px var(--al-font-mono)", letterSpacing: "0.06em" }}>
          STIAMO SELEZIONANDO LE PRIME AZIENDE · RISPONDIAMO ENTRO 2 GIORNI
        </p>
      </Container>
    </section>
  );
}
