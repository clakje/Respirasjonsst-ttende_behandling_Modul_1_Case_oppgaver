# Walkthrough: Adaptiv/Responsiv Versjon for Articulate Rise 360

Vi har opprettet en egen mappe for den adaptive versjonen for å unngå endringer på det eksisterende kurset. Alle endringer er utført i mappen `Adaptiv_Versjon/`.

## Endringer som er gjort

### 1. Fjerning av manuell visningsvelger
- **Før:** Brukeren ble møtt med en "Velg visning"-skjerm som tvang dem til å velge mellom mobil og PC-visning ved start. Dette la til `.desktop` eller `.mobile` klasser i HTML.
- **Nå:** Overlegget er slettet fra [index.html](file:///c:/Google%20Drive%20JOBBPC/Kodeprogrammer/prosjekter/Respirasjonsst%C3%B8ttende_behandling_Modul_1_Case_oppgaver/Adaptiv_Versjon/index.html). Siden starter direkte på Spørsmål 1, noe som gir en raskere og mer profesjonell flyt.

### 2. Helautomatisk CSS-responsivitet
- **Før:** Layouten ble styrt av spesifikke CSS-klasser lagt på av JavaScript (`.app-container.desktop` og `.app-container.mobile`).
- **Nå:** Layouten styres helautomatisk av nettleseren ved hjelp av CSS media queries i [style.css](file:///c:/Google%20Drive%20JOBBPC/Kodeprogrammer/prosjekter/Respirasjonsst%C3%B8ttende_behandling_Modul_1_Case_oppgaver/Adaptiv_Versjon/style.css):
  - **Over 768px (Desktop):** Appen sentrerer seg med en maksbredde på 900px og 2rem padding, som ser flott ut på PC-skjermer.
  - **Mellom 600px og 768px (Nettbrett/Stor Mobil):** Appen fyller 100% av tilgjengelig bredde i iframen uten ytre padding for å unngå unødvendig luft og scrolling.
  - **Under 600px (Mobil):** I tillegg til full bredde, byttes den kliniske tabellen til en kompakt 2-kolonners layout, og fontstørrelser/knapper skaleres ned for å optimalisere plassen.

### 3. Flytting av Nullstill-funksjon
- Siden "Slett lagret fremdrift" tidligere lå på den slettede visningsvelgeren, har vi lagt til en diskret **"Start på nytt"**-knapp i headeren ved siden av tittelen. Denne har samme bekreftelsesdialog som før og lar brukeren slette fremdrift/svar direkte fra quizen.

### 4. Automatisk høyderapportering via `postMessage`
- Vi har lagt til en JavaScript-funksjon `sendHeightToParent()` i [script.js](file:///c:/Google%20Drive%20JOBBPC/Kodeprogrammer/prosjekter/Respirasjonsst%C3%B8ttende_behandling_Modul_1_Case_oppgaver/Adaptiv_Versjon/script.js).
- Denne måler den nøyaktige høyden på innholdet (`scrollHeight`) og sender det til foreldresiden via `window.parent.postMessage({ type: 'resize', height: ... }, '*')`.
- Dette kjører hver gang en ny side lastes, når feedback vises, og når brukeren endrer størrelse på vinduet. Dette gjør at moduler som støtter dynamisk iframe-høyde automatisk kan tilpasse iframens høyde slik at brukeren slipper scrollbjelker inni iframen.

### 5. ZIP-fil for opplasting
- Det er generert en ny ZIP-fil: [High-flow_Case_oppgaver_Adaptiv.zip](file:///c:/Google%20Drive%20JOBBPC/Kodeprogrammer/prosjekter/Respirasjonsst%C3%B8ttende_behandling_Modul_1_Case_oppgaver/Adaptiv_Versjon/High-flow_Case_oppgaver_Adaptiv.zip).
- Denne inneholder kun de tre nødvendige produksjonsfilene (`index.html`, `style.css`, `script.js`) fra `Adaptiv_Versjon/` og er klar til å lastes opp direkte i Articulate Rise 360 (for eksempel som et Web Object eller via en ekstern server).

## Slik bruker du det i Articulate Rise 360

1. **Last opp filene:** Pakk ut den nye ZIP-filen eller last den opp til din webserver/LMS (eller bruk ZIP-filen direkte der forfatterverktøyet tillater det).
2. **Sett inn Embed-blokk:** Legg til en **Multimedia > Embed**-blokk i Rise 360.
3. **Bruk iframe-kode:**
   ```html
   <iframe src="https://din-server-url/Adaptiv_Versjon/index.html" width="100%" height="600" frameborder="0" allowfullscreen></iframe>
   ```
4. **Tilpasning:** Siden Rise 360 bruker bredde og høyde i embed-koden som et aspektratio-forhold, kan du fritt justere `height` i embed-koden (f.eks. til `650` eller `700`) for å unngå scrollbar på de lengste spørsmålene, og layouten inni iframen vil tilpasse seg enheten (mobil vs desktop) automatisk!
