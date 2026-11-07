# AfterLoop demo del prodotto

4 schermate dell'app, autonome (HTML + `demo.css` + `demo.js`), in scena fissa 1280x800 che si scala da sola alla larghezza del contenitore. Dati di esempio con segnaposto ([€], [NOME], [DATA]): non sono dati reali né clienti reali.

- `dashboard.html` Parco macchine · `macchina.html` Dettaglio e usura · `followup.html` Task + email pronta · `settimana.html` Priorità della settimana
- `index.html` anteprima di tutte; `demos.json` mappa file, formato e sezione del sito consigliata.

Uso: copia la cartella in `public/demos/` e incorporala con `<iframe src="/demos/dashboard.html" title="..." loading="lazy" style="width:100%;aspect-ratio:16/10;border:0">`. In alternativa ricostruisci le schermate come componenti React riusando classi e markup di `demo.css`.
Animazioni: solo barre che si riempiono e leggera comparsa all'ingresso (disattivate con prefers-reduced-motion). Non aggiungere altri effetti.
Non inserire promesse su ERP, import automatico dei dati o numeri reali.
