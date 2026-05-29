# Kodegjennomgang og forbedringsplan

> Gjennomgang av `index.html`, `script.js` og `style.css` for High-flow case-oppgaver modulen.
> Opprettet: 2026-03-18

---

## ✅ Bugs og problemer (alle fikset)

### ~~Bug 1: `resetProgress()` sletter ALL localStorage-data~~ ✅ Fikset 2026-03-18
**Fil:** `script.js` linje 439–443  
**Løsning:** Erstattet `localStorage.clear()` med `localStorage.removeItem('highflow-progress')` og `localStorage.removeItem('highflow-view')`.

### ~~Bug 2: Completion-screen plasseres feil~~ ✅ Fikset 2026-03-18
**Fil:** `style.css`  
**Løsning:** Lagt til `position: relative` på `.app-container`.

### ~~Bug 3: Progressbar hardkodet i HTML~~ ✅ Fikset 2026-03-18
**Fil:** `index.html` linje 35  
**Løsning:** Fjernet `style="width: 10%;"` fra progress bar-elementet. Bredden styres nå kun av JavaScript.

### ~~Bug 4: Ingen responsive media queries~~ ✅ Fikset 2026-03-18
**Fil:** `style.css`  
**Løsning:** Lagt til `@media (max-width: 600px)` med tilpassede fontstørrelser, paddings og layout for smale skjermer.

---

## 💡 Forbedringsforslag: UX/Brukeropplevelse

### UX-1: Vis resultat ved fullføring (Høy prioritet)
**Fil:** `script.js` — `showCompletionScreen()`  
**Beskrivelse:** Vis "Du svarte riktig på X av 10 på første forsøk" på fullføringsskjermen. Krever en ny variabel `firstAttemptCorrect` som telles opp i `selectOption()` kun når brukeren svarer riktig uten å ha feilet på spørsmålet.

### UX-2: Bekreftelsesdialog på "Slett lagret fremdrift" (Middels prioritet)
**Fil:** `script.js` — `resetProgress()`  
**Beskrivelse:** Legg til `if (confirm('Er du sikker på at du vil slette all fremdrift?'))` rundt logikken.

### UX-3: Animasjon mellom spørsmål (Middels prioritet)
**Fil:** `script.js` og `style.css`  
**Beskrivelse:** Legg til en fade-out/fade-in animasjon i `renderQuestion()` og `nextQuestion()`. Bruk CSS-klasse som f.eks. `.fade-out` og en `setTimeout` før innholdet oppdateres.

### UX-4: Vis case-nummer visuelt ved case-bytte (Middels prioritet)
**Fil:** `script.js` — `renderQuestion()`  
**Beskrivelse:** Sammenlign nåværende og forrige `caseTitle`. Hvis casen har endret seg, vis en kort "Ny case"-indikator eller en visuell overgang.

### UX-5: Vis ikon (✓/✗) i feedback-boksen (Lav prioritet)
**Fil:** `script.js` — `selectOption()`  
**Beskrivelse:** Legg til et ikon foran feedback-teksten: ✓ for riktig svar, ✗ for feil svar.

### UX-6: Legg til en "Tilbake"-knapp (Lav prioritet)
**Fil:** `index.html`, `script.js`, `style.css`  
**Beskrivelse:** Tillat navigering bakover til allerede besvarte spørsmål. Krever å lagre hvilke spørsmål som er besvart.

---

## ♿ Forbedringsforslag: Tilgjengelighet (Accessibility)

### A11Y-1: aria-live på feedback
**Fil:** `index.html` — feedback-section  
**Beskrivelse:** Legg til `aria-live="polite"` på `#feedback-section` slik at skjermlesere annonserer tilbakemelding automatisk.

### A11Y-2: role="alert" på feilmelding
**Fil:** `script.js` — selectOption (feil svar)  
**Beskrivelse:** Sett `role="alert"` på feedback-boksen når brukeren svarer feil.

### A11Y-3: Progressbar ARIA-attributter
**Fil:** `index.html` — progress-bar  
**Beskrivelse:** Legg til `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"` og `aria-valuemax="10"` på progress-bar-elementet. Oppdater `aria-valuenow` i JS.

### A11Y-4: Fokusstyring etter svar
**Fil:** `script.js` — selectOption  
**Beskrivelse:** Flytt `focus()` til feedback-seksjonen etter at brukeren svarer, slik at tastaturbrukere kan lese tilbakemeldingen.

---

## 🔧 Forbedringsforslag: Kodekvalitet

### KOD-1: Refaktor duplisert case-data (Høy prioritet)
**Fil:** `script.js`  
**Problem:** Case-info (tittel, beskrivelse, kliniske data) gjentas for hvert spørsmål i samme case. Case 1 har 4 spørsmål, og all case-info dupliseres 4 ganger.  
**Løsning:** Splitt til separate arrays:
```javascript
const cases = [
  { id: 1, title: "Case 1: Hypoksemisk respirasjonssvikt", description: "...", clinicalData: {...} },
  { id: 2, title: "Case 2: KOLS-forverring med CO₂-retensjon", description: "...", clinicalData: {...} },
  // ...
];

const questions = [
  { caseId: 1, question: "...", options: [...], correctAnswerIndex: 1, reasoning: "..." },
  { caseId: 1, question: "...", options: [...], correctAnswerIndex: 2, reasoning: "..." },
  // ...
];
```
Oppdater `renderQuestion()` til å hente case-data fra `cases`-arrayen basert på `caseId`.

### KOD-2: Fjern inline onclick-handlers
**Fil:** `index.html` og `script.js`  
**Beskrivelse:** Flytt alle `onclick="..."` fra HTML til `addEventListener` i JS for bedre separasjon av HTML og logikk.

### KOD-3: Legg til feilhåndtering
**Fil:** `script.js`  
**Beskrivelse:** Sjekk at DOM-elementer eksisterer før bruk (f.eks. null-sjekk på `document.getElementById`-kall).

---

## 🎨 Forbedringsforslag: Visuell polish

### VIS-1: Resultat-ikon på fullføringsskjermen
**Fil:** `index.html` / `script.js`  
**Beskrivelse:** Legg til et emoji eller SVG-ikon (🎉) over "Bra jobbet!"-teksten.

### VIS-2: Animer progressbar mer tydelig
**Fil:** `style.css`  
**Beskrivelse:** Legg til en pulserende effekt eller glød-animasjon på progress-baren ved oppdatering.

### VIS-3: Visuell markering ved case-bytte
**Fil:** `style.css`  
**Beskrivelse:** Legg til en subtil skygge- eller border-endring på case-seksjonen når brukeren bytter til en ny case.

### VIS-4: Mer dempet stil for disabled svaralternativer
**Fil:** `style.css` linje 285–288  
**Beskrivelse:** Reduser opacity fra 0.8 til 0.6 for `.option-btn:disabled` for tydeligere visuell distinksjon.

---

## ✅ Det som fungerer bra (ingen endring nødvendig)

- Ren, profesjonell visuell design med klinisk fargepalett
- God bruk av localStorage for fremdriftslagring
- Klar og informativ feedback ved riktig svar med medisinsk begrunnelse
- Kliniske data presenteres oversiktlig i grid-format
- Smooth transitions og animasjoner på eksisterende elementer
- Radio-button-lignende design på svaralternativene
- Artikulate Rise 360-integrasjon via `postMessage`
