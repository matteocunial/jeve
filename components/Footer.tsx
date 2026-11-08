import { Container } from "@/components/ui";

const NAV = [
  { href: "#prodotto", label: "Prodotto" },
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#per-chi", label: "Per chi" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-al-line">
      <Container>
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/lockup-mono-white.svg"
              alt="AfterLoop"
              width={133}
              height={26}
              className="h-[24px] w-auto self-start"
            />
            <p className="text-[13px] text-al-muted">
              Post-vendita e aftermarket per le PMI manifatturiere. In fase di lancio.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] text-al-muted transition-colors duration-150 hover:text-al-text"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/privacy/"
              className="text-[14px] text-al-muted transition-colors duration-150 hover:text-al-text"
            >
              Privacy
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-al-line py-6 pb-10 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-al-muted">© 2026 AfterLoop. Tutti i diritti riservati.</p>
          <p className="text-al-muted" style={{ font: "400 11px var(--al-font-mono)", letterSpacing: "0.06em" }}>
            EARLY ACCESS · STIAMO SELEZIONANDO LE PRIME AZIENDE
          </p>
        </div>
      </Container>
    </footer>
  );
}
