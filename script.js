const questionsData = [
    // --- CASE 1 ---
    {
        caseTitle: "Case 1: Hypoksemisk respirasjonssvikt",
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspne, lav O₂-metning og er uttalt sliten i pusten.",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "86 % på 10 L/min oksygen på maske",
            "HF": "112/min",
            "BT": "148/82",
            "Temp": "38.8 °C",
            "Status": "Våken, men utmattet. Knatrelyder basalt bilateralt. Bruk av aksessoriske muskler."
        },
        question: "1. Hva er den viktigste indikasjonen for å starte high-flow hos denne pasienten?",
        options: [
            "A. Mild dyspné uten oksygenbehov",
            "B. Hypoksemi til tross for høyt oksygen på maske",
            "C. Mistanke om pneumothorax",
            "D. Lav puls og hypotensjon"
        ],
        correctAnswerIndex: 1, // B
        reasoning: "Riktig! Denne pasienten har lav SpO2 til tross for 10 l/min oksygen på maske. Her må vi sikre korrekt oksygenmengde samt kunne gi høyere konsentrasjon av oksygen med high-flow. Denne pasienten vil også ha stor fordel av både fuktet luft, redusert dødrom og inspiratorisk støtte med dynamisk PEEP. Husk å følge opp bakenforliggende behandling som kan være like viktig for utfallet."
    },
    {
        caseTitle: "Case 1: Hypoksemisk respirasjonssvikt",
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspne, lav O₂-metning og er uttalt sliten i pusten.",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "86 % på 10 L/min oksygen på maske",
            "HF": "112/min",
            "BT": "148/82",
            "Temp": "38.8 °C",
            "Status": "Våken, men utmattet. Knatrelyder basalt bilateralt. Bruk av aksessoriske muskler."
        },
        question: "2. Hva er en vanlig flow-innstilling på high-flow hos voksne?",
        options: [
            "A. 5–10 L/min",
            "B. 10–20 L/min",
            "C. 30–60 L/min",
            "D. 80–100 L/min"
        ],
        correctAnswerIndex: 2, // C
        reasoning: "Riktig! Følg legens forordninger og lokale retningslinjer for oppstart og justeringer. Normalt startes voksne gjerne med en flow på mellom 30 - 60 L/min avhengig av pasientens behov og toleranse."
    },
    {
        caseTitle: "Case 1: Hypoksemisk respirasjonssvikt",
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspne, lav O₂-metning og er uttalt sliten i pusten.",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "86 % på 10 L/min oksygen på maske",
            "HF": "112/min",
            "BT": "148/82",
            "Temp": "38.8 °C",
            "Status": "Våken, men utmattet. Knatrelyder basalt bilateralt. Bruk av aksessoriske muskler."
        },
        question: "3. Hvilket parameter er viktigst å vurdere for tidlig effekt av high-flow?",
        options: [
            "A. Temperatur i rommet",
            "B. Respirasjonsfrekvens",
            "C. Farge på sputum",
            "D. Endring i respirasjonsarbeid"
        ],
        correctAnswerIndex: 3, // D
        reasoning: "Riktig! Men ikke glem de andre målene som er avtalt med legen. En klinisk bedring sees ofte raskt i form av redusert respirasjonsarbeid og stabilisert respirasjonsfrekvens."
    },
    {
        caseTitle: "Case 1: Hypoksemisk respirasjonssvikt",
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspne, lav O₂-metning og er uttalt sliten i pusten.",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "86 % på 10 L/min oksygen på maske",
            "HF": "112/min",
            "BT": "148/82",
            "Temp": "38.8 °C",
            "Status": "Våken, men utmattet. Knatrelyder basalt bilateralt. Bruk av aksessoriske muskler."
        },
        question: "4. Når bør man vurdere NIV/intubasjon?",
        options: [
            "A. Etter 5 minutter uten bedring",
            "B. Ved redusert respirasjonsarbeid",
            "C. Ved økt hypoksemi og tretthet",
            "D. Når pasienten ber om mer vann"
        ],
        correctAnswerIndex: 2, // C
        reasoning: "Riktig! Hvis high-flow ikke hjelper etter justeringer som forordnet av lege må legen tilkalles for ny vurdering. Vedvarende hypoksemi og økt tretthet er tydelige tegn på at behandlingstiltakene må endres. Nye behandlingstiltak kan være NIV eller IMV."
    },
    
    // --- CASE 2 ---
    {
        caseTitle: "Case 2: KOLS-forverring med CO₂-retensjon",
        caseDescription: "En 71 år gammel kvinne med kjent alvorlig KOLS (GOLD 3) innlegges med dyspne og økende hoste.",
        clinicalData: {
            "RR": "28/min",
            "SpO₂": "88 % på 4 L/min nesegrime",
            "HF": "104/min",
            "BT": "134/76",
            "Temp": "37.4 °C",
            "Gass": "pH 7.32, pCO₂ 8.2 kPa, pO₂ 7.4 kPa",
            "Klinikk": "Sliten, men kontaktbar. Bruker leppepusting spontant."
        },
        question: "5. Når kan high-flow være et nyttig supplement hos en pasient med KOLS-forverring?",
        options: [
            "A. Når NIV ikke tolereres, eller som pauser mellom NIV-økter",
            "B. Som primærbehandling ved alvorlig acidose",
            "C. Når pasienten er helt stabil og ikke har respirasjonsproblemer",
            "D. Ved mistanke om pneumothorax"
        ],
        correctAnswerIndex: 0, // A
        reasoning: "Riktig! High-flow behandling kan være et alternativ ved dårlig toleranse for NIV eller behandling ved respirasjonssvikt type 1, men evidensgrunnlaget for high-flow er fortsatt mangelfullt."
    },
    {
        caseTitle: "Case 2: KOLS-forverring med CO₂-retensjon",
        caseDescription: "En 71 år gammel kvinne med kjent alvorlig KOLS (GOLD 3) innlegges med dyspne og økende hoste.",
        clinicalData: {
            "RR": "28/min",
            "SpO₂": "88 % på 4 L/min nesegrime",
            "HF": "104/min",
            "BT": "134/76",
            "Temp": "37.4 °C",
            "Gass": "pH 7.32, pCO₂ 8.2 kPa, pO₂ 7.4 kPa",
            "Klinikk": "Sliten, men kontaktbar. Bruker leppepusting spontant."
        },
        question: "6. Hvilket tegn tyder på forverret CO₂-retensjon?",
        options: [
            "A. Pasienten blir mer våken",
            "B. Forvirring og somnolens",
            "C. Bedret oksygenmetning",
            "D. Bedret appetitt"
        ],
        correctAnswerIndex: 1, // B
        reasoning: "Riktig! Kriterier for sykehusinnleggelse kan være: Alvorlige symptomer/funn som forverret dyspne i hvile, cyanose, perifere ødemer, forvirring eller somnolens med mer. (T10.2.5 Akutt kolsforverring | Legemiddelhåndboka)"
    },

    // --- CASE 3 ---
    {
        caseTitle: "Case 3: Akutt oksygeneringssvikt ved pneumoni",
        caseDescription: "En 67 år gammel kvinne innlegges på overvåkningen med feber, hoste og tiltagende dyspné. Kjente sykdommer er hypertensjon og type 2-diabetes. Til tross for maksimal oksygentilførsel via maske oppnår pasienten ikke tilfredsstillende oksygenering. Konsolidering basalt venstre side forenlig med pneumoni (Rtg. thorax).",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "84 % på 10 L/min O₂ via oksygenmaske med reservoir",
            "HF": "118/min",
            "BT": "102/64 mmHg",
            "Temp": "38.9 °C",
            "Gass": "pH 7.46, PaCO₂ 4.7 kPa, PaO₂ 7.8 kPa, HCO₃– 24",
            "Laktat": "1.6 mmol/L",
            "Status": "Anstrengt respirasjon, bruker aksessorisk resp. muskler, dyspnéisk."
        },
        question: "7. Hva er neste steg i behandlingen?",
        options: [
            "A. Øke O₂-flow til 15 L/min på brillekateter",
            "B. Starte CPAP uten oksygentilførsel",
            "C. Starte high-flow oksygenbehandling med høy flow og FiO₂",
            "D. Avvente videre tiltak og se om pasienten stabiliserer seg spontant"
        ],
        correctAnswerIndex: 2, // C
        reasoning: "Riktig! Pasienten har akutt oksygenasjonssvikt (hypoksemisk respirasjonssvikt, type 1) som ikke bedres av oksygenmaske med reservoar. High-flow er anbefalt her fordi det gir nøyaktig titrerbar FiO2 (opp til 1.0), høy flow, reduserer anatomisk dødrom, gir lavt nivå av PEEP og oppleves mer komfortabelt."
    },

    // --- CASE 4 ---
    {
        caseTitle: "Case 4: Postoperativ respirasjonssvikt etter abdominalkirurgi",
        caseDescription: "En 45 år gammel kvinne er 8 timer postoperativ etter en større laparotomi. Hun har betydelig smerter, overfladisk respirasjon og fallende O₂-metning. Lette basale atelektaser på rtg.",
        clinicalData: {
            "RR": "26/min",
            "SpO₂": "90 % på 6 L/min oksygen",
            "HF": "98/min",
            "BT": "120/70",
            "Smerte": "VAS 7",
            "Klinikk": "Engstelig, klarer ikke å ta dype innpust"
        },
        question: "8. Hvorfor er high-flow nyttig til postoperative pasienter?",
        options: [
            "A. Gir høyt positivt trykk og full ventilasjon",
            "B. Forhindrer hypoglykemi",
            "C. Bedrer oksygenering og reduserer respirasjonsarbeid",
            "D. Erstatter behov for smertebehandling"
        ],
        correctAnswerIndex: 2, // C
        reasoning: "Riktig! Etter operasjon kan pasienten ha fått både invasiv respirasjonsstøtte, sterke smertestillende, sovemedisiner og muskelrelakserende legemidler. High-flow vil kunne lette den postoperative fasen ved å sikre korrekt oksygentilførsel, redusere dødromsventilasjon, lette respirasjonsarbeid og fremme sekretmobilisering."
    },
    {
        caseTitle: "Case 4: Postoperativ respirasjonssvikt etter abdominalkirurgi",
        caseDescription: "En 45 år gammel kvinne er 8 timer postoperativ etter en større laparotomi. Hun har betydelig smerter, overfladisk respirasjon og fallende O₂-metning. Lette basale atelektaser på rtg.",
        clinicalData: {
            "RR": "26/min",
            "SpO₂": "90 % på 6 L/min oksygen",
            "HF": "98/min",
            "BT": "120/70",
            "Smerte": "VAS 7",
            "Klinikk": "Engstelig, klarer ikke å ta dype innpust"
        },
        question: "9. Hvilket funn best forklarer hvorfor high-flow kan bedre oksygeneringen hos postoperative pasienter med atelektaser?",
        options: [
            "A. High-flow øker tidalvolumet gjennom aktiv ventilasjonsstøtte",
            "B. High-flow skaper et lett positivt ende-ekspiratorisk trykk som bidrar til alveolær rekruttering",
            "C. High-flow øker hjertets minuttvolum og dermed oksygenleveransen",
            "D. High-flow reduserer kroppens metabolisme og dermed oksygenforbruket"
        ],
        correctAnswerIndex: 1, // B
        reasoning: "Riktig! Hvis man instruerer pasienten til å puste med lukket munn under high-flow behandling vil PEEP-effekten bli bedre og atelektasene vil lettere kunne bli rekruttert. På en oppvåkningsavdeling vil pasienter ofte være påvirket av anestesimidler. Da vil high-flow bidra positivt."
    },
    {
        caseTitle: "Case 4: Postoperativ respirasjonssvikt etter abdominalkirurgi",
        caseDescription: "En 45 år gammel kvinne er 8 timer postoperativ etter en større laparotomi. Hun har betydelig smerter, overfladisk respirasjon og fallende O₂-metning. Lette basale atelektaser på rtg.",
        clinicalData: {
            "RR": "26/min",
            "SpO₂": "90 % på 6 L/min oksygen",
            "HF": "98/min",
            "BT": "120/70",
            "Smerte": "VAS 7",
            "Klinikk": "Engstelig, klarer ikke å ta dype innpust"
        },
        question: "10. Hvilken behandling må optimaliseres parallelt med high-flow for at pasienten skal puste bedre?",
        options: [
            "A. Vanntilførsel",
            "B. Smertebehandling",
            "C. Koffein",
            "D. Antihistaminer"
        ],
        correctAnswerIndex: 1, // B
        reasoning: "Riktig! I dette eksempelet har pasienten gjennomgått laparotomi som ofte innebærer sterke smerter i mageregionen. Når pasienten puster inn vil diafragma dytte mot operasjonsområdet som igjen vil gi ytterligere smerter. For at pasienten skal klare å puste godt nok er det viktig at det gis adekvat smertelindring."
    }
];

// Local State
let currentQuestionIndex = 0;
let hasAnsweredCurrentQuestion = false;

// DOM Elements
const viewSelectorOverlay = document.getElementById('view-selector');
const appContainer = document.getElementById('app-container');

const progressBarFill = document.getElementById('progress-bar-fill');
const progressText = document.getElementById('progress-text');

const caseTitleEl = document.getElementById('case-title');
const caseDescriptionEl = document.getElementById('case-description');
const clinicalGridEl = document.getElementById('clinical-grid');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');

const feedbackSectionEl = document.getElementById('feedback-section');
const feedbackBoxEl = document.getElementById('feedback-box');
const feedbackTextEl = document.getElementById('feedback-text');
const nextBtnEl = document.getElementById('next-btn');
const completionScreenEl = document.getElementById('completion-screen');

// Initialize the app
function init() {
    // Check local storage for view mode
    const savedView = localStorage.getItem('highflow-view');
    if (!savedView) {
        // Show view selector if not set
        viewSelectorOverlay.classList.add('active');
    } else {
        viewSelectorOverlay.classList.remove('active');
        setViewMode(savedView, false); // Don't save again
    }

    // Check local storage for progress
    const savedProgress = localStorage.getItem('highflow-progress');
    if (savedProgress !== null) {
        currentQuestionIndex = parseInt(savedProgress, 10);
        // Ensure we don't start out of bounds
        if (currentQuestionIndex >= questionsData.length) {
            showCompletionScreen();
            return;
        }
    } else {
        currentQuestionIndex = 0;
    }

    renderQuestion(currentQuestionIndex);
}

// Function to show View Selector
function showViewSelector() {
    viewSelectorOverlay.classList.add('active');
}

// Function to set View Mode (Desktop/Mobile)
function setViewMode(mode, save = true) {
    if (save) {
        localStorage.setItem('highflow-view', mode);
    }
    
    viewSelectorOverlay.classList.remove('active');
    
    if (mode === 'mobile') {
        appContainer.classList.remove('desktop');
        appContainer.classList.add('mobile');
    } else {
        appContainer.classList.remove('mobile');
        appContainer.classList.add('desktop');
    }

    // If we just set it up and we are on index 0, make sure it's rendered
    if (save && currentQuestionIndex === 0 && !hasAnsweredCurrentQuestion) {
        renderQuestion(currentQuestionIndex);
    }
}

// Render the current question to DOM
function renderQuestion(index) {
    hasAnsweredCurrentQuestion = false;
    const data = questionsData[index];

    // Update Progress Bar
    const total = questionsData.length;
    const progressPercent = ((index) / total) * 100;
    progressBarFill.style.width = Math.max(progressPercent, 5) + '%'; 
    progressText.innerText = `Spørsmål ${index + 1} av ${total}`;

    // Hide feedback & next button
    feedbackSectionEl.classList.add('hidden');
    feedbackBoxEl.className = 'feedback-box'; // reset colors
    nextBtnEl.classList.add('hidden');

    // Populate Case Text
    caseTitleEl.innerText = data.caseTitle;
    caseDescriptionEl.innerText = data.caseDescription;

    // Populate Clinical Data Grid
    clinicalGridEl.innerHTML = '';
    for (const [key, value] of Object.entries(data.clinicalData)) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'clinical-item';
        
        // If string is relatively long, span full width
        if (value.length > 25) {
            itemDiv.classList.add('full-width');
        }

        const labelDiv = document.createElement('div');
        labelDiv.className = 'clinical-label';
        labelDiv.innerText = key;

        const valDiv = document.createElement('div');
        valDiv.className = 'clinical-value';
        valDiv.innerText = value;

        itemDiv.appendChild(labelDiv);
        itemDiv.appendChild(valDiv);
        clinicalGridEl.appendChild(itemDiv);
    }

    // Populate Question and Options
    questionTextEl.innerText = data.question;
    optionsContainerEl.innerHTML = '';
    
    data.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = optText;
        btn.onclick = () => selectOption(i);
        optionsContainerEl.appendChild(btn);
    });

    // Save progress
    localStorage.setItem('highflow-progress', index);
}

// Handle Option Selection
function selectOption(selectedIndex) {
    if (hasAnsweredCurrentQuestion) return; // Prevent multiple answers after correct

    const data = questionsData[currentQuestionIndex];
    const isCorrect = (selectedIndex === data.correctAnswerIndex);
    
    const optionBtns = optionsContainerEl.querySelectorAll('.option-btn');

    if (isCorrect) {
        hasAnsweredCurrentQuestion = true;
        // Highlight the buttons
        optionBtns.forEach((btn, i) => {
            btn.disabled = true; // disable all

            if (i === data.correctAnswerIndex) {
                btn.classList.add('selected-correct');
            }
        });

        // Show feedback
        feedbackTextEl.innerText = data.reasoning;
        feedbackBoxEl.className = 'feedback-box correct';
        feedbackSectionEl.classList.remove('hidden');

        // Show Next block
        nextBtnEl.classList.remove('hidden');
        
        // Scroll to bottom slightly
        setTimeout(() => {
            nextBtnEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 100);
    } else {
        // Disabled just the clicked button and mark as incorrect
        optionBtns[selectedIndex].disabled = true;
        optionBtns[selectedIndex].classList.add('selected-incorrect');

        // Show feedback
        feedbackTextEl.innerText = "Prøv igjen";
        feedbackBoxEl.className = 'feedback-box incorrect';
        feedbackSectionEl.classList.remove('hidden');
    }
}

// Move to logical next app state
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionsData.length) {
        showCompletionScreen();
    } else {
        renderQuestion(currentQuestionIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// End of module
function showCompletionScreen() {
    progressBarFill.style.width = '100%';
    progressText.innerText = "Modul Fullført";
    document.querySelector('.app-main').classList.add('hidden');
    completionScreenEl.classList.remove('hidden');
    localStorage.setItem('highflow-progress', questionsData.length);
    
    // Notify Articulate Rise 360 that the block is complete
    window.parent.postMessage({ type: 'complete' }, '*');
}

// Restart logic
function restartModule() {
    localStorage.removeItem('highflow-progress');
    currentQuestionIndex = 0;
    completionScreenEl.classList.add('hidden');
    document.querySelector('.app-main').classList.remove('hidden');
    renderQuestion(0);
}

function resetProgress() {
    localStorage.clear();
    location.reload();
}

// Bootstrap
window.addEventListener('DOMContentLoaded', init);
