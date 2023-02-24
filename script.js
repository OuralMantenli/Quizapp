let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
        "offcanvasLabel": "Wer hat HTML erfunden?",
        "offcanvasAnswer": "HTML (HyperText Markup Language) wurde 1990 vom Web-Gründer Tim Berners-Lee als Auszeichnungssprache (Markup Language) entwickelt, die auf SGML basiert."
    },

    {
        "question": "Was beschreibt HTML?",
        "answer_1": "Die Struktur einer Webseite",
        "answer_2": "Den Design einer Webseite",
        "answer_3": "Den Inhalt eines Online-Shops",
        "answer_4": "Gar nichts",
        "right_answer": 1,
        "offcanvasLabel": "Was beschreibt HTML?",
        "offcanvasAnswer": "HTML (HyperText Markup Language) beschreibt die Struktur einer Webseite.<br>Es besteht aus einer Reihe von Elementen. Diese Elemente teilen dem Browser mit, wie der Inhalt angezeigt werden soll."
    },

    {
        "question": "Wie viele 'Header' gibt es?",
        "answer_1": "2",
        "answer_2": "6",
        "answer_3": "9",
        "answer_4": "Keine",
        "right_answer": 2,
        "offcanvasLabel": "Wie viele 'Header' gibt es?",
        "offcanvasAnswer": "'Header' - also 'Überschriften' sind Titel oder Untertitel, die man auf der Webseite anzeigen kann.<br>Es gibt insgesamt sechs Header.<br>< h1 > HTML-Überschriften werden mit den to- Tags definiert < h6 >.<br>< h1 > definiert die wichtigste Überschrift. < h6 > definiert die am wenigsten wichtige Überschrift.<br>Suchmaschinen verwenden die Überschriften, um die Struktur und den Inhalt Ihrer Webseiten zu indizieren. Benutzer überfliegen eine Seite oft anhand ihrer Überschriften.<br><br>Es ist wichtig, Überschriften zu verwenden, um die Dokumentstruktur darzustellen.<br>< h1 > Überschriften sollten für Hauptüberschriften verwendet werden, gefolgt von < h2 > Überschriften, dann die weniger wichtigen < h3 > und so weiter."
    },

    {
        "question": "Mit welchem HTML-Element bindet man einen YouTube Video ein?",
        "answer_1": "< youtube >",
        "answer_2": "< link >",
        "answer_3": "< iframe >",
        "answer_4": "< a href= ... >",
        "right_answer": 3,
        "offcanvasLabel": "Mit welchem HTML-Element bindet man einen YouTube Video ein?",
        "offcanvasAnswer": "Das Konvertieren von Videos in andere Formate kann schwierig und zeitaufwändig sein. Eine einfachere Lösung besteht darin, YouTube die Videos auf Ihrer Webseite abspielen zu lassen.<br><br>YouTube zeigt eine ID an, wenn man ein Video speichert (oder abspielt).Man kann diese ID verwenden und im HTML-Code auf das Video verweisen.<br><br><br> < iframe width=[Breite] height=[Höhe] <br>src=[YouTube-Link]><br>< /iframe >"
    },

    {
        "question": "Wie sieht ein Kommentar-Tag aus?",
        "answer_1": "//",
        "answer_2": "< !-- ... -- >",
        "answer_3": "/* ... */",
        "answer_4": "(...)",
        "right_answer": 2,
        "offcanvasLabel": "Wie sieht ein Kommentar-Tag aus?",
        "offcanvasAnswer": "Das Kommentar-Tag wird verwendet, um Kommentare in den Quellcode einzufügen. Kommentare werden in den Browsern nicht angezeigt.<br><br>Man kann Kommentare verwenden, um im Code zu erläutern, was bei der späteren Bearbeitung des Quellcodes helfen kann. Dies ist besonders nützlich, wenn man viel Code hat.<br><br>< !-- ... -- >"
    },

    {
        "question": "Was ist der richtige HTML-Code zum Hinzufügen einer Hintergrundfarbe?",
        "answer_1": "< background > yellow </ background >",
        "answer_2": "< body style=''background-color: yellow;'' >",
        "answer_3": "< body bg=''yellow'' >",
        "answer_4": "< background == yellow >",
        "right_answer": 2,
        "offcanvasLabel": "Was ist der richtige HTML-Code zum Hinzufügen einer Hintergrundfarbe?",
        "offcanvasAnswer": "Antwort 2 ist richtig!<br><br>Um die Hintergrundfarbe zu ändern, muss man wissen, was man anspricht - wir sprechen hier den < body > an.<br><br>Und was wollen wir ändern? - den Style, bzw. das Aussehen (die Farbe) von unserem Hintergrund. Deshalb sagen wir style=''background-color:yellow;'' ."
    },

    {
        "question": "Welches HTML-Attribut gibt einen alternativen Text für ein Bild an, wenn das Bild nicht angezeigt werden kann?",
        "answer_1": "src",
        "answer_2": "longdesc",
        "answer_3": "title",
        "answer_4": "alt",
        "right_answer": 4,
        "offcanvasLabel": "Welches HTML-Attribut gibt einen alternativen Text für ein Bild an, wenn das Bild nicht angezeigt werden kann?",
        "offcanvasAnswer": "Bei einem ALT-Attribut oder ALT-Tag handelt es sich um einen Text, der eine Grafik beschreibt.<br>Das Kürzel „ALT“ steht für „Alternative“ (engl. für „alternativ“). Das ALT-Attribut wird bei Bilddateien auf Websites hinterlegt. Falls ein Bild aus technischen Gründen von einem Browser nicht angezeigt werden kann, erscheint der Text des hinterlegten ALT-Attributs. Er wird zum Alternativtext (Alt-Text).<br><br>Suchmaschinen benutzen dieses Attribut, um den Bildinhalt zu erkennen, da Bilddateien in der Regel nicht direkt ausgelesen werden können.<br><br>Für Nutzer*innen mit Handicap trägt das ALT-Attribut zur Barrierefreiheit bei. Screenreader können ALT-Tags vorlesen."
    }
];

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('audio/right.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('end-screen').style = '';
    document.getElementById('question-body').style = 'display: none';
    document.getElementById('all-questions-end-screen').innerHTML = questions.length;
    document.getElementById('all-right-questions-end-screen').innerHTML = rightQuestions;
    document.getElementById('header-image').src = 'img/question-end.jpg';
    document.getElementById('progress-bar').innerHTML = `Alle Fragen wurden beantwortet!`;
}
function updateProgressBar() {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}
function updateToNextQuestion() {

    updateProgressBar();

    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('offcanvasLabel').innerHTML = question['offcanvasLabel'];
    document.getElementById('offcanvasAnswer').innerHTML = question['offcanvasAnswer'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();
    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('help-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    resetAnswerButtons();
    showQuestion();

    document.getElementById('next-button').disabled = true;
    document.getElementById('help-button').disabled = true;
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/question.jpg';
    document.getElementById('question-body').style = '';
    document.getElementById('end-screen').style = 'display: none';
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}