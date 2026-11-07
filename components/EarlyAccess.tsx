"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { Accent, Container, Eyebrow, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";

/**
 * Endpoint segnaposto da collegare (API route, gestionale API, form provider…).
 * Contratto: POST JSON con i campi del form; risposta 2xx = successo.
 */
const ENDPOINT = "/api/early-access";

const RUOLI = [
  "Titolare / CEO",
  "Direttore commerciale",
  "Responsabile service / after-sales",
  "Altro",
];

type Stato = "idle" | "invio" | "ok" | "errore";
type Field = "nome" | "email" | "azienda" | "ruolo" | "privacy";
type Errori = Partial<Record<Field, string>>;

function valida(v: Record<Field, string | boolean>): Errori {
  const e: Errori = {};
  if (!String(v.nome).trim()) e.nome = "Campo obbligatorio.";
  const email = String(v.email).trim();
  if (!email) e.email = "Campo obbligatorio.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Inserisci un indirizzo email valido.";
  if (!String(v.azienda).trim()) e.azienda = "Campo obbligatorio.";
  if (!v.ruolo) e.ruolo = "Seleziona un ruolo.";
  if (!v.privacy) e.privacy = "Per inviare la richiesta devi accettare l'informativa.";
  return e;
}

const inputClass =
  "min-h-[44px] w-full rounded-[12px] border border-al-line bg-[var(--al-surface)] px-4 text-[15px] text-al-text placeholder:text-al-muted/[.66] focus:border-sky/60 aria-[invalid=true]:border-ember";
const labelClass = "mb-1.5 block text-[13px] font-medium";
const errorClass = "mt-1.5 block text-[12px] text-glow";

export default function EarlyAccess() {
  const [stato, setStato] = useState<Stato>("idle");
  const [errori, setErrori] = useState<Errori>({});
  const [dati, setDati] = useState<Record<Field, string | boolean>>({
    nome: "",
    email: "",
    azienda: "",
    ruolo: "",
    privacy: false,
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (stato === "invio") return;
    const err = valida(dati);
    setErrori(err);
    if (Object.keys(err).length > 0) return;

    setStato("invio");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...dati, source: "landing-early-access" }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStato("ok");
    } catch {
      setStato("errore");
    }
  }

  function campo(k: keyof typeof dati) {
    return {
      value: String(dati[k]),
      onChange: (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
        setDati((d) => ({ ...d, [k]: ev.target.value })),
    };
  }

  const erroreCampo = (f: Field) =>
    errori[f] ? { "aria-invalid": "true" as const, "aria-describedby": `err-${f}` } : {};

  return (
    <Section id="early-access">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Eyebrow node="ember">Early access</Eyebrow>
            <h2 className="al-title balance mt-3 text-[32px] leading-[1.05] tracking-[-0.03em] md:text-[40px]">
              Fai parte delle <Accent>prime</Accent> aziende.
            </h2>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.65] text-al-muted">
              Costruiamo AfterLoop insieme a chi lo userà. Lascia i tuoi dati: ti ricontattiamo per
              fissare una demo di 20 minuti, con il tuo parco macchine come materiale di lavoro.
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-al-muted">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-ok" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                Demo di 20 minuti, senza impegno e senza preparazione richiesta
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-ok" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                Onboarding guidato del parco macchine insieme al nostro team
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-ok" aria-hidden="true">
                  <Icon name="check" size={16} />
                </span>
                Priorità sulla roadmap: lo costruiamo con chi lo usa
              </li>
            </ul>
          </div>

          <div className="al-card p-6 md:p-8 lg:col-span-7">
            {stato === "ok" ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center gap-4 py-8" role="status">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "rgba(61,220,151,.14)", color: "var(--al-ok)" }}>
                  <Icon name="check" size={22} />
                </span>
                <h3 className="al-title text-[24px] tracking-[-0.02em]">Richiesta registrata.</h3>
                <p className="max-w-[440px] text-[15px] leading-[1.6] text-al-muted">
                  Grazie, <strong className="font-medium text-al-text">{dati.nome}</strong>: ti
                  scriviamo entro due giorni lavorativi all&apos;indirizzo{" "}
                  <span className="text-al-text">{dati.email}</span> per fissare la demo.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="ea-nome" className={labelClass}>Nome e cognome</label>
                    <input
                      id="ea-nome"
                      name="nome"
                      type="text"
                      autoComplete="name"
                      placeholder="Mario Rossi"
                      className={inputClass}
                      required
                      {...erroreCampo("nome")}
                      {...campo("nome")}
                    />
                    {errori.nome ? <span id="err-nome" className={errorClass} role="alert">{errori.nome}</span> : null}
                  </div>
                  <div>
                    <label htmlFor="ea-email" className={labelClass}>Email aziendale</label>
                    <input
                      id="ea-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="mario@azienda.it"
                      className={inputClass}
                      required
                      {...erroreCampo("email")}
                      {...campo("email")}
                    />
                    {errori.email ? <span id="err-email" className={errorClass} role="alert">{errori.email}</span> : null}
                  </div>
                  <div>
                    <label htmlFor="ea-azienda" className={labelClass}>Azienda</label>
                    <input
                      id="ea-azienda"
                      name="azienda"
                      type="text"
                      autoComplete="organization"
                      placeholder="Rossi Macchinari S.r.l."
                      className={inputClass}
                      required
                      {...erroreCampo("azienda")}
                      {...campo("azienda")}
                    />
                    {errori.azienda ? <span id="err-azienda" className={errorClass} role="alert">{errori.azienda}</span> : null}
                  </div>
                  <div>
                    <label htmlFor="ea-ruolo" className={labelClass}>Ruolo</label>
                    <select
                      id="ea-ruolo"
                      name="ruolo"
                      className={inputClass}
                      required
                      {...erroreCampo("ruolo")}
                      {...campo("ruolo")}
                      value={dati.ruolo as string}
                    >
                      <option value="" disabled>
                        Seleziona...
                      </option>
                      {RUOLI.map((r) => (
                        <option key={r} value={r} className="bg-ink text-mist">
                          {r}
                        </option>
                      ))}
                    </select>
                    {errori.ruolo ? <span id="err-ruolo" className={errorClass} role="alert">{errori.ruolo}</span> : null}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="ea-privacy" className="flex min-h-[44px] cursor-pointer items-start gap-3 py-1 text-[13px] leading-[1.5] text-al-muted">
                    <input
                      id="ea-privacy"
                      name="privacy"
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-al-line accent-[var(--al-ember)]"
                      checked={Boolean(dati.privacy)}
                      onChange={(ev) => setDati((d) => ({ ...d, privacy: ev.target.checked }))}
                      {...erroreCampo("privacy")}
                      aria-describedby={errori.privacy ? "err-privacy" : undefined}
                    />
                    <span>
                      Ho letto l&apos;
                      <a href="/privacy/" className="underline decoration-al-line underline-offset-2 transition-colors duration-150 hover:text-al-text">
                        informativa privacy
                      </a>{" "}
                      e acconsento al trattamento dei dati per rispondere alla richiesta.
                    </span>
                  </label>
                  {errori.privacy ? <span id="err-privacy" className={errorClass} role="alert">{errori.privacy}</span> : null}
                </div>

                {stato === "errore" ? (
                  <p className="mt-5 rounded-[12px] border border-al-line px-4 py-3 text-[14px] leading-[1.5] text-glow" role="alert">
                    L&apos;invio non è andato a buon fine. Riprova tra qualche minuto.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={stato === "invio"}
                  className="al-btn al-btn--primary mt-6 w-full justify-center disabled:cursor-wait disabled:opacity-70"
                >
                  {stato === "invio" ? "Invio in corso..." : "Invia la richiesta"}
                  {stato === "invio" ? null : <Icon name="arrow-right" size={18} />}
                </button>
                <p className="mt-3 text-center text-[12px] text-al-muted">
                  Ti rispondiamo entro due giorni lavorativi. Nessuna newsletter: solo la risposta
                  alla tua richiesta.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
