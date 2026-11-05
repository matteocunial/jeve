import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy — AfterLoop",
  description: "Informativa sul trattamento dei dati per le richieste di early access ad AfterLoop.",
};

export default function PrivacyPage() {
  return (
    <main className="al-section-pad">
      <div className="al-container max-w-[720px]">
        <p className="al-eyebrow">Privacy</p>
        <h1 className="al-title mt-4 text-[32px] tracking-[-0.03em] md:text-[40px]">
          Informativa sul trattamento dei dati
        </h1>
        <div className="mt-8 space-y-6 text-[16px] leading-[1.6] text-al-muted">
          <p>
            I dati inviati tramite il modulo di richiesta early access (nome, email aziendale, azienda,
            ruolo) sono utilizzati esclusivamente per rispondere alla richiesta e per le comunicazioni
            relative al programma di early access. Non vengono ceduti a terzi né utilizzati per finalità
            di marketing diverse da questo rapporto.
          </p>
          <p>
            Il modulo salverà i dati nell&apos;endpoint configurato dall&apos;azienda; questa pagina è un
            aggiornamento segnaposto che va sostituito con l&apos;informativa definitiva (titolare del
            trattamento, base giuridica, tempi di conservazione, diritti dell&apos;interessato, contatti
            del responsabile privacy) prima del rilascio in produzione.
          </p>
          <p>
            Per esercitare i diritti previsti dal GDPR o per richiedere la cancellazione dei dati
            inviati, rispondi a una delle nostre email o usa i contatti indicati nel sito.
          </p>
        </div>
        <p className="al-eyebrow mt-12">Ultimo aggiornamento: novembre 2026</p>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
}
