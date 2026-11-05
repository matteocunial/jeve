"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * Reveal minimo: fade/translate 180ms all'ingresso nel viewport.
 * Il CSS gestisce prefers-reduced-motion (nessuna animazione).
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Fallback: mai contenuto invisibile per scarsi scenari (IO non supportato,
    // elementi già fuori vista, stitching di screenshot, print...).
    const t = window.setTimeout(() => setVisible(true), 1200);
    if (typeof IntersectionObserver === "undefined") return () => clearTimeout(t);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
          clearTimeout(t);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={{ "--al-reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={"al-reveal " + (className ?? "")}
    >
      {children}
    </div>
  );
}
