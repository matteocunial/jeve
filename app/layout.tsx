import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://afterloop.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AfterLoop — Il post-vendita che anticipa, non rincorre",
  description:
    "AfterLoop mappa il ciclo di vita di ogni macchina venduta, calcola l'usura dei componenti critici e avvisa il tuo team commerciale quando è il momento di proporre ricambi, manutenzione o revamping. Early access aperta per le PMI manifatturiere.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "AfterLoop",
    title: "AfterLoop — Il post-vendita, in loop.",
    description:
      "Mappa il ciclo di vita di ogni macchina venduta, calcola l'usura dei componenti e avvisa il team commerciale al momento giusto, con task ed email già pronte.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AfterLoop — Il post-vendita, in loop." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AfterLoop — Il post-vendita, in loop.",
    description:
      "Mappa il ciclo di vita di ogni macchina venduta, calcola l'usura dei componenti e avvisa il team commerciale al momento giusto.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05080F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>
      <body className="bg-al-bg text-al-text antialiased">
        {/* Preconnect: le demo incorporano i font Geist/Instrument dal CDN Google. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <noscript>
          <style>{`.al-reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ember focus:text-ink focus:rounded-full focus:px-4 focus:py-2"
        >
          Salta al contenuto
        </a>
        {children}
      </body>
    </html>
  );
}
