# AfterLoop — regole per agenti di codice (sito e prodotto)

## Prodotto
AfterLoop è una piattaforma SaaS B2B per il post-vendita e l'aftermarket delle PMI manifatturiere (macchinari industriali, conveyor, sistemi di automazione). Mappa il ciclo di vita di ogni macchina venduta, calcola l'usura dei componenti critici e avvisa il team commerciale quando è il momento di proporre ricambi, manutenzione preventiva, revamping o estensioni di garanzia, con task ed email già pronte.
Target: titolari, direttori commerciali, responsabili service/after-sales di PMI italiane. Siamo in fase di lancio.

## Regole sui contenuti (vincolanti)
- Lingua: italiano. Tono professionale, diretto, concreto: fatturato, margini, tempo, fermi macchina. Niente gergo da startup.
- NON dichiarare né mostrare integrazione con ERP/gestionali, import automatico dei dati o "zero data entry": non esistono nella prima versione.
- NON inventare statistiche, clienti, loghi cliente, testimonianze. Usa segnaposto evidenti: [X%], [N], [€], [CLIENTE A], [MODELLO].
- Non presentare AfterLoop come già diffuso. Una sola CTA primaria per pagina o schermata.

## Design system
- Importa `tokens/tokens.css` (o `tokens/tailwind.preset.js`). Non introdurre colori, font o raggi fuori dai token.
- Sito e prodotto: layout estremamente pulito, ordinato, professionale. Niente effetti vistosi, animazioni decorative o grafiche invadenti. Mostra il valore con schermate di prodotto chiare.
- Tema scuro di default (Ink/Deep), tema chiaro con `data-theme="light"`.
- Font: Geist (UI e titoli, peso 500, letter-spacing -0.04em sui titoli grandi), Instrument Serif Italic per UNA parola chiave per titolo (`.al-accent`), Geist Mono per etichette e dati.
- Ember = azione primaria e stato "da agire". Testo su Ember sempre Ink, mai bianco. Una sola azione Ember per vista.
- Afterglow (`.al-afterglow`) solo in due punti: hero e banda della CTA finale (con anelli loop-rings tenui). Mai dietro tabelle, form o testo lungo.
- Card: `.al-card` (20px) nel prodotto, `.al-glass` (28px) nei contenuti. Bordo 1px + hairline gradiente Cobalt→Ember sul bordo superiore; al hover il bordo si accende e l'icona prende colore pieno. Nessun bordo laterale colorato, nessuna ombra pesante.
- Colore per sezione (ritmo 60/30/10): basi scure strutturali + un colore dominante per sezione con accent word in Instrument Serif Italic del colore di sezione. Una sezione chiara (Mist, `data-theme="light"`). Tinte 8-16% per sfondi, 20-40% per bordi. Ember solo per l'azione primaria e lo stato "da agire", mai decorativo.
- Stati: ok `--al-ok`, attenzione Ember/Glow, informativo Sky.
- Icone: `icons/sprite.svg` (id `al-<nome>`) oppure `icons/icons.tsx`. 24px, stroke 1.75, `currentColor`. Mai emoji come icone.
- Logo: `logo/`. Su scuro `lockup-on-dark.svg`, su chiaro `lockup-on-light.svg`. Area di rispetto = altezza del nodo arancione x2. Non deformare, non cambiare il colore del nodo (tranne versioni mono).
- Accessibilità: contrasto minimo 4.5:1, target tocco ≥44px, focus visibile (outline 2px Sky), rispetta `prefers-reduced-motion`.

## Dati di esempio nel prodotto
Usa nomi generici e segnaposto ([CLIENTE A], Trasportatore [MODELLO]). Stati: Operativa (ok), Ticket aperto (info), Da ispezionare (warn).
