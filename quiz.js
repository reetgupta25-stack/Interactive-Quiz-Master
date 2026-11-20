
const questions = [
    {
        question: "Which language is used to structure web pages?",
        options: ["CSS", "HTML", "Python", "Java"],
        answer: "HTML"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["JavaScript", "Python", "CSS", "C++"],
        answer: "CSS"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["var", "define", "int", "string"],
        answer: "var"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
    },
    {
        question: "Which HTML tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which method selects an element by ID?",
        options: [
            "getElementById()",
            "queryClass()",
            "getElement()",
            "selectId()"
        ],
        answer: "getElementById()"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["<!-- -->", "//", "##", "**"],
        answer: "//"
    },
    {
        question: "Which CSS property changes text color?",
        options: ["background", "font-size", "color", "text-style"],
        answer: "color"
    },
    {
        question: "Which method adds an element to an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "push()"
    },
    {
        question: "Which HTML tag is used for the largest heading?",
        options: ["<h6>", "<head>", "<heading>", "<h1>"],
        answer: "<h1>"
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const progress = document.getElementById("progress");

function showQuestion() {
    selectedAnswer = null;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreElement.textContent = `Score: ${score}`;

    progress.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsElement.innerHTML = "";

    nextButton.disabled = true;

    current.options.forEach(option => {
        const button = document.createElement("button");

        button.textContent = option;
        button.classList.add("option-btn");

        button.addEventListener("click", () => {
            selectAnswer(button, option);
        });

        optionsElement.appendChild(button);
    });
}

function selectAnswer(button, answer) {
    if (selectedAnswer !== null) return;

    selectedAnswer = answer;

    const correctAnswer = questions[currentQuestion].answer;

    const allButtons = document.querySelectorAll(".option-btn");

    allButtons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (answer === correctAnswer) {
        score++;
    } else {
        button.classList.add("wrong");
    }

    scoreElement.textContent = `Score: ${score}`;

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        localStorage.setItem("quizScore", score);
        localStorage.setItem("totalQuestions", questions.length);

        window.location.href = "results.html";
    }
});

showQuestion();
