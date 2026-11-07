"use client";

import { asset } from "@/lib/base";
import { useEffect, useState } from "react";
import { Container, cn } from "@/components/ui";
import { Icon } from "@/components/Icon";

const LINKS = [
  { href: "#prodotto", label: "Prodotto" },
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#per-chi", label: "Per chi" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-[var(--al-glass)] backdrop-blur-md transition-[border-color,box-shadow] duration-150",
        scrolled ? "border-al-line" : "border-transparent",
      )}
    >
      <Container>
        <nav aria-label="Principale" className="flex h-16 items-center justify-between gap-6">
          <a href="/" className="flex shrink-0 items-center" aria-label="AfterLoop — home">
            {/* Kit: lockup-on-dark su tema scuro */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo/lockup-on-dark.svg")} alt="" width={133} height={26} className="h-[26px] w-auto" />
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[14px] text-al-muted transition-colors duration-150 hover:text-al-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#early-access"
              className="al-btn al-btn--light hidden h-11 px-5 text-[14px] md:inline-flex"
            >
              Richiedi l&apos;early access
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border border-al-line text-al-text md:hidden"
            >
              <Icon name={open ? "close" : "filter"} size={20} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Pannello menu mobile */}
      <div
        id="menu-mobile"
        className={cn(
          "border-t border-al-line bg-[var(--al-glass)] backdrop-blur-md md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container>
          <ul className="py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex h-11 items-center text-[15px] text-al-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#early-access" onClick={() => setOpen(false)} className="al-btn al-btn--primary w-full justify-center">
                Richiedi l&apos;early access
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
