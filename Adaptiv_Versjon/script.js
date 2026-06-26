const questionsData = [
    // --- CASE 1 ---
    {
        caseTitle: "Case 1: Hypoksemisk respirasjonssvikt",
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspné, lav O₂-metning og er uttalt sliten i pusten.",
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
            "A. Mild dyspné",
            "B. Hypoksemi til tross for høyt oksygen på maske",
            "C. Mistanke om pneumothorax",
            "D. Høy puls og hypertensjon"
        ],
        correctAnswerIndex: 1, // B
        reasoning: "Riktig! Denne pasienten har lav SpO₂ til tross for 10 L/min oksygen på maske. Her må vi sikre korrekt oksygenmengde samt kunne gi høyere konsentrasjon av oksygen med high-flow. Denne pasienten vil også ha stor fordel av både fuktet luft, redusert dødrom og inspiratorisk støtte med dynamisk PEEP. Husk å følge opp bakenforliggende behandling som kan være like viktig for utfallet."
    },
    {
        caseTitle: "Case 1: Hypoksemisk respirasjonssvikt",
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspné, lav O₂-metning og er uttalt sliten i pusten.",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "86 % på 10 L/min oksygen på maske",
            "HF": "112/min",
            "BT": "148/82",
            "Temp": "38.8 °C",
            "Status": "Våken, men utmattet. Knatrelyder basalt bilateralt. Bruk av aksessoriske muskler."
        },
        question: "2. Hvilken flow vil du foreslå som oppstart hos denne pasienten?",
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
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspné, lav O₂-metning og er uttalt sliten i pusten.",
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
            "B. Kapillærfylling",
            "C. Farge på sputum",
            "D. Endring i respirasjonsarbeid"
        ],
        correctAnswerIndex: 3, // D
        reasoning: "Riktig! Men ikke glem de andre målene som er avtalt med legen. En klinisk bedring sees ofte raskt i form av redusert respirasjonsarbeid og stabilisert respirasjonsfrekvens."
    },
    {
        caseTitle: "Case 1: Hypoksemisk respirasjonssvikt",
        caseDescription: "En 63 år gammel mann legges inn med pneumoni. Han har økende dyspné, lav O₂-metning og er uttalt sliten i pusten.",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "86 % på 10 L/min oksygen på maske",
            "HF": "112/min",
            "BT": "148/82",
            "Temp": "38.8 °C",
            "Status": "Våken, men utmattet. Knatrelyder basalt bilateralt. Bruk av aksessoriske muskler."
        },
        question: "4. Når bør man vurdere NIV eller IMV?",
        options: [
            "A. Etter 5 minutter uten bedring",
            "B. Ved redusert respirasjonsarbeid",
            "C. Ved økt hypoksemi og tretthet",
            "D. Ved stabilisert SpO₂ og redusert respirasjonsfrekvens"
        ],
        correctAnswerIndex: 2, // C
        reasoning: "Riktig! Hvis high-flow ikke hjelper etter justeringer som forordnet av lege må legen tilkalles for ny vurdering. Vedvarende hypoksemi og økt tretthet er tydelige tegn på at behandlingstiltakene må endres. Nye behandlingstiltak kan være NIV eller IMV."
    },

    // --- CASE 2 ---
    {
        caseTitle: "Case 2: KOLS-forverring med CO₂-retensjon",
        caseDescription: "En 71 år gammel kvinne med kjent alvorlig KOLS (GOLD 3) innlegges med dyspné og økende hoste.",
        clinicalData: {
            "RR": "28/min",
            "SpO₂": "88 % på 4 L/min nesegrime",
            "HF": "104/min",
            "BT": "134/76",
            "Temp": "37.4 °C",
            "Blodgass": "pH 7.34, pCO₂ 7.2 kPa, pO₂ 7.4 kPa",
            "Klinikk": "Sliten, men kontaktbar. Bruker leppepusting spontant. Pasienten ble startet på NIV, men river av seg masken etter få minutter på grunn av klaustrofobi og kvalme."
        },
        question: "5. Når kan high-flow være et nyttig supplement hos en pasient med KOLS-forverring?",
        options: [
            "A. Når NIV ikke tolereres, eller som pauser mellom NIV-økter",
            "B. Som primærbehandling ved alvorlig acidose",
            "C. Når pasienten er helt stabil og ikke har respirasjonsproblemer",
            "D. Ved mistanke om pneumothorax"
        ],
        correctAnswerIndex: 0, // A
        reasoning: "Riktig! High-flow kan brukes ved NIV-intoleranse eller som pauser mellom NIV-økter. (Hovedindikasjonen for high-flow er imidlertid type 1-respirasjonssvikt, som vi så i Case 1.)"
    },
    {
        caseTitle: "Case 2: KOLS-forverring med CO₂-retensjon",
        caseDescription: "En 71 år gammel kvinne med kjent alvorlig KOLS (GOLD 3) innlegges med dyspné og økende hoste.",
        clinicalData: {
            "RR": "28/min",
            "SpO₂": "88 % på 4 L/min nesegrime",
            "HF": "104/min",
            "BT": "134/76",
            "Temp": "37.4 °C",
            "Blodgass": "pH 7.34, pCO₂ 7.2 kPa, pO₂ 7.4 kPa",
            "Klinikk": "Sliten, men kontaktbar. Bruker leppepusting spontant. Pasienten ble startet på NIV, men river av seg masken etter få minutter på grunn av klaustrofobi og kvalme."
        },
        question: "6. Hvilket tegn tyder på forverret CO₂-retensjon?",
        options: [
            "A. Pasienten blir mer våken",
            "B. Forvirring og somnolens",
            "C. Bedret oksygenmetning",
            "D. Økt respirasjonsfrekvens og uro"
        ],
        correctAnswerIndex: 1, // B
        reasoning: "Riktig! CO₂ har en dempende effekt på sentralnervesystemet. Når CO₂-nivået stiger, ser vi gjerne en gradvis utvikling fra hodepine og søvnighet til forvirring, somnolens og — i verste fall — bevisstløshet (CO₂-narkose). Dette er viktige observasjoner å gjøre tidlig hos KOLS-pasienter, særlig hvis pasienten får for høy oksygentilførsel og mister sitt hypoksiske respirasjonsdriv. (Kilde: T10.2.5 Akutt kolsforverring | Legemiddelhåndboka)"
    },

    // --- CASE 3 ---
    {
        caseTitle: "Case 3: Akutt oksygeneringssvikt ved pneumoni",
        caseDescription: "En 67 år gammel kvinne innlegges på overvåkningen med feber, hoste og tiltagende dyspné. Kjente sykdommer er hypertensjon og type 2-diabetes. Til tross for maksimal oksygentilførsel via maske oppnår pasienten ikke tilfredsstillende oksygenering. Røntgen toraks: Konsolidering basalt venstre side forenlig med pneumoni.",
        clinicalData: {
            "RR": "32/min",
            "SpO₂": "84 % på 10 L/min O₂ via oksygenmaske med reservoar",
            "HF": "118/min",
            "BT": "102/64",
            "Temp": "38.9 °C",
            "Laktat": "1.6 mmol/L",
            "Blodgass": "pH 7.46, PaCO₂ 4.7 kPa, PaO₂ 7.8 kPa, HCO₃⁻ 24 mmol/L",
            "Status": "Anstrengt respirasjon, bruker aksessoriske respirasjonsmuskler, dyspnéisk."
        },
        question: "7. Hva er neste steg i behandlingen?",
        options: [
            "A. Øke O₂-flow til 15 L/min på oksygenmasken",
            "B. Starte CPAP uten oksygentilførsel",
            "C. Starte high-flow oksygenbehandling med høy flow og FiO₂",
            "D. Intubere pasienten umiddelbart"
        ],
        correctAnswerIndex: 2, // C
        reasoning: "Riktig! Pasienten har akutt oksygenasjonssvikt (hypoksemisk respirasjonssvikt, type 1) som ikke bedres av oksygenmaske med reservoar. High-flow er anbefalt her fordi det gir nøyaktig titrerbar FiO2 (opp til 1.0), høy flow, reduserer anatomisk dødrom, gir lavt nivå av PEEP og oppleves mer komfortabelt."
    },

    // --- CASE 4 ---
    {
        caseTitle: "Case 4: Postoperativ respirasjonssvikt etter abdominalkirurgi",
        caseDescription: "En 45 år gammel kvinne er 8 timer postoperativ etter en større laparotomi. Hun har betydelige smerter, overfladisk respirasjon og fallende O₂-metning. Lette basale atelektaser på røntgen toraks.",
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
            "B. Erstatter behov for tidlig mobilisering",
            "C. Bedrer oksygenering og reduserer respirasjonsarbeid",
            "D. Erstatter behov for smertebehandling"
        ],
        correctAnswerIndex: 2, // C
        reasoning: "Riktig! Etter operasjon kan pasienten ha fått både invasiv respirasjonsstøtte, sterke smertestillende, sovemedisiner og muskelrelakserende legemidler. High-flow vil kunne lette den postoperative fasen ved å sikre korrekt oksygentilførsel, redusere dødromsventilasjon, lette respirasjonsarbeid og fremme sekretmobilisering."
    },
    {
        caseTitle: "Case 4: Postoperativ respirasjonssvikt etter abdominalkirurgi",
        caseDescription: "En 45 år gammel kvinne er 8 timer postoperativ etter en større laparotomi. Hun har betydelige smerter, overfladisk respirasjon og fallende O₂-metning. Lette basale atelektaser på røntgen toraks.",
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
        reasoning: "Riktig! Be pasienten puste med lukket munn så ofte hun klarer det. Det forsterker PEEP-effekten og bidrar til å rekruttere atelektaser. På oppvåkning vil pasienter ofte være påvirket av anestesimidler, og her gir high-flow en særlig god effekt."
    },
    {
        caseTitle: "Case 4: Postoperativ respirasjonssvikt etter abdominalkirurgi",
        caseDescription: "En 45 år gammel kvinne er 8 timer postoperativ etter en større laparotomi. Hun har betydelige smerter, overfladisk respirasjon og fallende O₂-metning. Lette basale atelektaser på røntgen toraks.",
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
            "A. Antibiotikabehandling",
            "B. Smertebehandling",
            "C. Sedasjon for å redusere uro",
            "D. Diuretika for å redusere lungestuvning"
        ],
        correctAnswerIndex: 1, // B
        reasoning: "Riktig! I dette eksempelet har pasienten gjennomgått laparotomi som ofte innebærer sterke smerter i mageregionen. Når pasienten puster inn vil diafragma dytte mot operasjonsområdet som igjen vil gi ytterligere smerter. For at pasienten skal klare å puste godt nok er det viktig at det gis adekvat smertelindring."
    }
];

// Local State
let currentQuestionIndex = 0;
let hasAnsweredCurrentQuestion = false;
let firstAttemptCorrect = 0;       // UX-1: track first-attempt correct answers
let hasFailedCurrentQuestion = false; // UX-1: track if user failed current question
const answeredQuestions = new Map(); // UX-6: map of index -> { selectedIndex, wasFirstAttempt }

// DOM Elements
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
const backBtnEl = document.getElementById('back-btn');           // UX-6
const completionScreenEl = document.getElementById('completion-screen');
const completionScoreEl = document.getElementById('completion-score'); // UX-1

// Helper to format subscripts for medical terms (SpO2, O2, CO2, etc.)
function formatSubscripts(text) {
    if (typeof text !== 'string') return text;
    let html = text;
    // Replace most specific terms first, then general terms
    html = html.replace(/spo[₂2]/gi, 'SpO<sub>2</sub>');
    html = html.replace(/paco[₂2]/gi, 'P<sub>a</sub>CO<sub>2</sub>');
    html = html.replace(/pao[₂2]/gi, 'P<sub>a</sub>O<sub>2</sub>');
    html = html.replace(/pco[₂2]/gi, 'pCO<sub>2</sub>');
    html = html.replace(/po[₂2]/gi, 'pO<sub>2</sub>');
    html = html.replace(/fio[₂2]/gi, 'FiO<sub>2</sub>');
    html = html.replace(/co[₂2]/gi, 'CO<sub>2</sub>');
    html = html.replace(/o[₂2]/gi, 'O<sub>2</sub>');
    html = html.replace(/hco[₃3]/gi, 'HCO<sub>3</sub>');
    return html;
}

// Helper to report content height to parent window (useful for iframe autogrow in LMS/Rise)
function sendHeightToParent() {
    setTimeout(() => {
        const height = document.body.scrollHeight || document.documentElement.scrollHeight;
        window.parent.postMessage({
            type: 'resize',
            height: height
        }, '*');
    }, 50);
}

// Initialize the app
function init() {
    // Check local storage for progress
    const savedProgress = localStorage.getItem('highflow-progress');
    const savedScore = localStorage.getItem('highflow-firstAttempt');
    if (savedScore !== null) {
        firstAttemptCorrect = parseInt(savedScore, 10);
    }
    const savedAnswered = localStorage.getItem('highflow-answered');
    if (savedAnswered) {
        try {
            const parsed = JSON.parse(savedAnswered);
            parsed.forEach(([k, v]) => answeredQuestions.set(k, v));
        } catch (e) { /* ignore */ }
    }
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

    // Send initial height and register resize listener
    sendHeightToParent();
    window.addEventListener('resize', sendHeightToParent);
}

// Render the current question to DOM
function renderQuestion(index) {
    hasAnsweredCurrentQuestion = false;
    hasFailedCurrentQuestion = false; // UX-1: reset fail flag
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

    // UX-6: Show/hide back button
    if (index > 0) {
        backBtnEl.classList.remove('hidden');
    } else {
        backBtnEl.classList.add('hidden');
    }

    // Populate Case Text
    caseTitleEl.innerHTML = formatSubscripts(data.caseTitle);
    caseDescriptionEl.innerHTML = formatSubscripts(data.caseDescription);

    // Populate Clinical Data Grid
    const caseKeys = Object.keys(data.clinicalData);
    const group1Keys = ['rr', 'spo₂', 'spo2'];
    const group2Keys = ['hf', 'bt', 'temp', 'laktat'];
    const group2Count = caseKeys.filter(k => group2Keys.includes(k.toLowerCase())).length;

    clinicalGridEl.innerHTML = '';
    for (const [key, value] of Object.entries(data.clinicalData)) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'clinical-item';

        const lowerKey = key.toLowerCase();
        if (group1Keys.includes(lowerKey)) {
            itemDiv.classList.add('grid-row-1');
        } else if (group2Keys.includes(lowerKey)) {
            itemDiv.classList.add('grid-row-2');
            if (group2Count === 3) {
                itemDiv.classList.add('span-4');
            } else if (group2Count === 4) {
                itemDiv.classList.add('span-3');
            } else {
                itemDiv.classList.add('span-6');
            }
        } else {
            itemDiv.classList.add('full-width');
        }

        const labelDiv = document.createElement('div');
        labelDiv.className = 'clinical-label';
        labelDiv.innerHTML = formatSubscripts(key);

        const valDiv = document.createElement('div');
        valDiv.className = 'clinical-value';
        valDiv.innerHTML = formatSubscripts(value);

        itemDiv.appendChild(labelDiv);
        itemDiv.appendChild(valDiv);
        clinicalGridEl.appendChild(itemDiv);
    }

    // Populate Question and Options
    questionTextEl.innerHTML = formatSubscripts(data.question);
    optionsContainerEl.innerHTML = '';

    // UX-6: If this question was already answered, render as read-only
    if (answeredQuestions.has(index)) {
        renderAnsweredQuestion(index, data);
        return;
    }

    data.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = formatSubscripts(optText);
        btn.onclick = () => selectOption(i);
        optionsContainerEl.appendChild(btn);
    });

    // Save progress
    localStorage.setItem('highflow-progress', index);
    sendHeightToParent();
}

// UX-6: Render a previously answered question as read-only
function renderAnsweredQuestion(index, data) {
    const answered = answeredQuestions.get(index);
    hasAnsweredCurrentQuestion = true;

    data.options.forEach((optText, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.disabled = true;
        btn.innerHTML = formatSubscripts(optText);

        if (i === data.correctAnswerIndex) {
            btn.classList.add('selected-correct');
        }
        optionsContainerEl.appendChild(btn);
    });

    // Show feedback
    feedbackTextEl.innerHTML = '✓ ' + formatSubscripts(data.reasoning);
    feedbackBoxEl.className = 'feedback-box correct';
    feedbackSectionEl.classList.remove('hidden');

    // Show Next button only if not at the furthest answered question
    const maxAnswered = Math.max(...answeredQuestions.keys());
    if (index <= maxAnswered && index < questionsData.length - 1) {
        nextBtnEl.classList.remove('hidden');
    } else if (index >= questionsData.length - 1) {
        nextBtnEl.classList.add('hidden');
    }
    sendHeightToParent();
}

// Handle Option Selection
function selectOption(selectedIndex) {
    if (hasAnsweredCurrentQuestion) return; // Prevent multiple answers after correct

    const data = questionsData[currentQuestionIndex];
    const isCorrect = (selectedIndex === data.correctAnswerIndex);

    const optionBtns = optionsContainerEl.querySelectorAll('.option-btn');

    if (isCorrect) {
        hasAnsweredCurrentQuestion = true;

        // UX-1: Count first-attempt correct
        if (!hasFailedCurrentQuestion) {
            firstAttemptCorrect++;
            localStorage.setItem('highflow-firstAttempt', firstAttemptCorrect);
        }

        // UX-6: Track answered question
        answeredQuestions.set(currentQuestionIndex, {
            selectedIndex: selectedIndex,
            wasFirstAttempt: !hasFailedCurrentQuestion
        });
        localStorage.setItem('highflow-answered', JSON.stringify([...answeredQuestions]));

        // Highlight the buttons
        optionBtns.forEach((btn, i) => {
            btn.disabled = true; // disable all

            if (i === data.correctAnswerIndex) {
                btn.classList.add('selected-correct');
            }
        });

        // UX-5: Show feedback with ✓ icon
        feedbackTextEl.innerHTML = '✓ ' + formatSubscripts(data.reasoning);
        feedbackBoxEl.className = 'feedback-box correct';
        feedbackSectionEl.classList.remove('hidden');

        // Show Next block
        nextBtnEl.classList.remove('hidden');

        // Scroll to bottom slightly
        setTimeout(() => {
            nextBtnEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
            sendHeightToParent();
        }, 100);
    } else {
        // UX-1: Mark that user has failed this question
        hasFailedCurrentQuestion = true;

        // Disabled just the clicked button and mark as incorrect
        optionBtns[selectedIndex].disabled = true;
        optionBtns[selectedIndex].classList.add('selected-incorrect');

        // UX-5: Show feedback with ✗ icon
        feedbackTextEl.innerHTML = '✗ Prøv igjen';
        feedbackBoxEl.className = 'feedback-box incorrect';
        feedbackSectionEl.classList.remove('hidden');
        sendHeightToParent();
    }
}

// Move to logical next app state (UX-3: with fade animation)
function nextQuestion() {
    const appMain = document.querySelector('.app-main');
    appMain.classList.add('fade-out');
    appMain.classList.remove('fade-in');

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questionsData.length) {
            appMain.classList.remove('fade-out');
            appMain.classList.add('fade-in');
            showCompletionScreen();
        } else {
            renderQuestion(currentQuestionIndex);
            appMain.classList.remove('fade-out');
            appMain.classList.add('fade-in');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 250);
}

// UX-6: Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex <= 0) return;

    const appMain = document.querySelector('.app-main');
    appMain.classList.add('fade-out');
    appMain.classList.remove('fade-in');

    setTimeout(() => {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
        appMain.classList.remove('fade-out');
        appMain.classList.add('fade-in');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 250);
}

// End of module
function showCompletionScreen() {
    progressBarFill.style.width = '100%';
    progressText.innerText = "Modul Fullført";
    document.querySelector('.app-main').classList.add('hidden');
    completionScreenEl.classList.remove('hidden');
    localStorage.setItem('highflow-progress', questionsData.length);

    // UX-1: Show first-attempt score
    const total = questionsData.length;
    completionScoreEl.innerText = `Du svarte riktig på ${firstAttemptCorrect} av ${total} på første forsøk.`;

    // Notify Articulate Rise 360 that the block is complete
    window.parent.postMessage({ type: 'complete' }, '*');
    sendHeightToParent();
}

// Restart logic
function restartModule() {
    localStorage.removeItem('highflow-progress');
    localStorage.removeItem('highflow-firstAttempt');
    localStorage.removeItem('highflow-answered');
    firstAttemptCorrect = 0;
    hasFailedCurrentQuestion = false;
    answeredQuestions.clear();
    currentQuestionIndex = 0;
    completionScreenEl.classList.add('hidden');
    document.querySelector('.app-main').classList.remove('hidden');
    renderQuestion(0);
    sendHeightToParent();
}

let resetConfirmState = false;
let resetTimeout = null;

// UX-2: Confirm before resetting - using inline button state to bypass sandboxed iframe confirm restriction
function resetProgress(buttonEl) {
    if (!buttonEl) {
        localStorage.removeItem('highflow-progress');
        localStorage.removeItem('highflow-view');
        localStorage.removeItem('highflow-firstAttempt');
        localStorage.removeItem('highflow-answered');
        location.reload();
        return;
    }

    if (!resetConfirmState) {
        resetConfirmState = true;
        const originalText = buttonEl.innerText;
        buttonEl.innerText = "Sikker? Klikk igjen";
        buttonEl.style.backgroundColor = "#dc3545";
        buttonEl.style.color = "#ffffff";
        buttonEl.style.borderColor = "#dc3545";

        resetTimeout = setTimeout(() => {
            buttonEl.innerText = originalText;
            buttonEl.style.backgroundColor = "";
            buttonEl.style.color = "";
            buttonEl.style.borderColor = "";
            resetConfirmState = false;
        }, 3000);
    } else {
        clearTimeout(resetTimeout);
        resetConfirmState = false;
        localStorage.removeItem('highflow-progress');
        localStorage.removeItem('highflow-view');
        localStorage.removeItem('highflow-firstAttempt');
        localStorage.removeItem('highflow-answered');
        location.reload();
    }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', init);
