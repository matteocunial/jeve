import { Button, Container, Eyebrow, HeroAccent, Arrow } from "@/components/ui";
import DemoFrame from "@/components/DemoFrame";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Afterglow: uso n.1 (hero). Livello mascherato verso l'alto, attenuato. */}
      <div
        aria-hidden="true"
        className="al-afterglow pointer-events-none inset-0"
        style={{
          position: "absolute",
          opacity: 0.45,
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 55%)",
          maskImage: "linear-gradient(180deg, transparent 0%, #000 55%)",
        }}
      />
      <Container className="relative z-[1] pb-20 pt-16 md:pb-28 md:pt-24 lg:pt-28">
        <div className="mx-auto flex max-w-[840px] flex-col items-center text-center">
          <div className="al-enter">
            <Eyebrow node="ember" className="inline-flex items-center gap-2 rounded-full border border-al-line px-3 py-1.5">
              In fase di lancio
            </Eyebrow>
          </div>

          <h1 className="al-enter-d1 al-title balance mt-6 text-[40px] leading-[1.02] tracking-[-0.035em] sm:text-[52px] md:mt-8 md:text-[64px]">
            Il post-vendita che <HeroAccent>anticipa</HeroAccent>, non rincorre.
          </h1>

          <p className="al-enter-d2 mt-5 max-w-[640px] text-[16px] leading-[1.65] text-al-muted md:mt-6 md:text-[18px]">
            AfterLoop mappa il ciclo di vita di ogni macchina venduta, calcola l&apos;usura dei
            componenti e avvisa il tuo team commerciale quando è il momento di proporre ricambi,
            manutenzione o revamping. Con task ed email già pronte.
          </p>

          <div className="al-enter-d2 mt-8 flex flex-col items-center gap-3 sm:flex-row md:mt-10">
            <Button href="#early-access" className="w-full justify-center sm:w-auto">
              Richiedi l&apos;early access
              <Arrow />
            </Button>
            <Button href="#come-funziona" variant="ghost" className="w-full justify-center sm:w-auto">
              Come funziona
            </Button>
          </div>
        </div>

        {/* Demo n.1: dashboard (hero, senza lazy). */}
        <div className="al-enter-d2 mx-auto mt-14 max-w-[980px] md:mt-20">
          <div className="md:px-8">
            <DemoFrame
              src="/demos/dashboard.html"
              title="AfterLoop — Parco macchine (dati di esempio)"
              eager
              callouts={["Usura calcolata per componente", "Task ed email pronte"]}
              caption="Lo stato di ogni macchina venduta e l'usura dei componenti critici, in un'unica vista."
              className="-mx-5 md:mx-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
