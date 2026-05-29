# Adaptiv/Responsiv Tilpasning for Articulate Rise 360 (Kopi)

Dette prosjektet skal brukes i et e-læringskurs laget i Articulate Rise 360. For å bevare det opprinnelige prosjektet uendret, jobber vi i en kopi plassert i mappen `Adaptiv_Versjon`.

Per nå har prosjektet en manuell visningsvelger ("Velg visning" der brukeren må klikke på enten "Jeg bruker mobil" eller "Jeg bruker PC"). Dette lagres i `localStorage` og legger til enten `.desktop` eller `.mobile` på `#app-container`. 

Når dette bygges inn som en kodeblokk (iframe) i Rise 360, gir dette en dårlig brukeropplevelse fordi:
1. Brukeren må gjøre et manuelt valg hver gang de starter modulen.
2. Siden Rise 360 tilpasser seg skjermstørrelsen automatisk, bør innholdet i iframen også gjøre det helt sømløst uten manuelle steg.
3. CSS Media Queries (`@media`) kjøres i nettleseren relativt til iframens bredde, noe som betyr at vi kan styre alt av layout automatisk basert på den tilgjengelige bredden i iframen.

Dette løsningsforslaget fjerner den manuelle visningsvelgeren helt, gjør layouten helautomatisk responsiv verktøy av CSS media queries, og legger til en "Nullstill" / "Start på nytt" knapp i headeren slik at brukeren fremdeles kan slette sin fremdrift ved behov.

## User Review Required

> [!IMPORTANT]
> **Fjerning av manuell visningsvelger:** Denne endringen vil fjerne "Velg visning"-skjermen helt. Brukeren vil gå rett til første spørsmål, og layouten vil automatisk justere seg etter enheten.

> [!NOTE]
> **Ny knapp for å slette fremdrift:** "Slett lagret fremdrift"-knappen lå tidligere på visningsvelgerskjermen. Vi flytter denne funksjonaliteten til en "Start på nytt"-knapp i headeren ved siden av tittelen, med samme bekreftelsesdialog som før.

## Open Questions

> [!NOTE]
> Ingen åpne spørsmål for øyeblikket. Planen dekker full konvertering til helautomatisk responsivt design i den nye mappen. Hvis du har spesielle ønsker rundt brytningspunkter (breakpoints) utover standard mobil/desktop (600px/768px), vennligst gi beskjed.

## Proposed Changes

### Kildekode i `Adaptiv_Versjon/`

---

#### [MODIFY] [index.html](file:///c:/Google%20Drive%20JOBBPC/Kodeprogrammer/prosjekter/Respirasjonsst%C3%B8ttende_behandling_Modul_1_Case_oppgaver/Adaptiv_Versjon/index.html)
- Fjern `#view-selector` overleget (linje 12-23).
- Endre `#app-container` til kun å ha klassen `app-container` i stedet for `app-container desktop` (linje 25).
- Bytt ut knappen for "Endre visning" i headeren med en knapp for å nullstille fremdrift (linje 31):
  ```html
  <button class="btn btn-secondary btn-sm" onclick="resetProgress()">Start på nytt</button>
  ```

#### [MODIFY] [style.css](file:///c:/Google%20Drive%20JOBBPC/Kodeprogrammer/prosjekter/Respirasjonsst%C3%B8ttende_behandling_Modul_1_Case_oppgaver/Adaptiv_Versjon/style.css)
- Fjern alle CSS-regler spesifikt knyttet til `.app-container.desktop` og `.app-container.mobile`.
- Etabler en felles, responsiv stil for `.app-container` som standard tilpasser seg skjerm/iframe-bredde.
- Bruk `@media (max-width: 768px)` for å aktivere mobil-tilpasset layout (fjerne ytre padding, gjøre kanter skarpe, fjerne skygge på beholderen) slik at innholdet fyller iframen pent på mindre skjermer.
- Bruk eksisterende `@media (max-width: 600px)` for mindre detaljer (redusere tekststørrelser, endre klinisk tabell-grid fra mange kolonner to 2 kolonner, etc.).
- Fjern stiler tilknyttet det gamle `#view-selector` overleget.

#### [MODIFY] [script.js](file:///c:/Google%20Drive%20JOBBPC/Kodeprogrammer/prosjekter/Respirasjonsst%C3%B8ttende_behandling_Modul_1_Case_oppgaver/Adaptiv_Versjon/script.js)
- Fjern referansen til `viewSelectorOverlay`.
- Forenkle `init()` til å ikke sjekke `highflow-view` eller vise overlegget.
- Fjern funksjonene `showViewSelector()` og `setViewMode()`.
- Legg til automatisk høyderapportering via `window.parent.postMessage` når innholdet endres (ved init, spørsmålsskifte, feedback og fullføring) slik at eventuelle LMS-er eller foreldresider som støtter dynamisk iframe-høyde kan justere seg automatisk.

## Verification Plan

### Automated Tests
- Siden dette er et rent statisk front-end-prosjekt, vil vi verifisere endringene visuelt i nettleseren ved å simulere ulike enhetsbredder (mobil, nettbrett og desktop).

### Manual Verification
1. Åpne kopien av `index.html` under `Adaptiv_Versjon/index.html` direkte i nettleseren.
2. Sjekk at applikasjonen starter direkte på Spørsmål 1 uten å vise noen "Velg visning"-skjerm.
3. Endre størrelsen på nettleservinduet for å verifisere at layouten automatisk skalerer:
   - **Desktop-bredde (>768px):** Sentrert boks med 900px maksbredde og fin padding rundt.
   - **Mobil-bredde (<768px):** Fyller 100% av bredden for å unngå unødvendig luft på sidene.
   - **Smal mobil (<600px):** Den kliniske tabellen går over til en kompakt 2-kolonners layout, og skriftstørrelser reduseres for bedre lesbarhet.
4. Klikk på "Start på nytt" i headeren, godta bekreftelsen, og sjekk at fremdriften slettes og applikasjonen starter på nytt.
5. Sjekk at `postMessage` med høyde og fullførings-signal sendes riktig til foreldrevinduet.
