/**
 * Prefisso degli asset, per deploy in sottocartella (es. GitHub Pages /jeve).
 * Alla build: BASE_PATH=/jeve NEXT_PUBLIC_BASE_PATH=/jeve next build
 */
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Antepone il basePath a un percorso assoluto dell'app. */
export const asset = (p: string) => `${BASE}${p}`;
