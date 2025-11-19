// ------------------
// INLINE BIPOLAR QUESTIONS JSON
// ------------------
const QUESTIONS = [
  { question: "Over the past 2 weeks, how often have you felt extremely energetic or unusually active?",
    choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"], answer: 3 },
  { question: "Have you experienced periods of unusually elevated mood or irritability?",
    choices: ["Never", "Sometimes", "Often", "Very often"], answer: 3 },
  { question: "Do you have trouble sleeping even when you are tired?",
    choices: ["Never", "Occasionally", "Frequently", "Always"], answer: 3 },
  { question: "Have you had episodes of racing thoughts or feeling like your mind is jumping from idea to idea?",
    choices: ["Never", "Sometimes", "Often", "Very often"], answer: 3 },
  { question: "Have you engaged in risky behaviors during periods of high energy (e.g., spending sprees, impulsive decisions)?",
    choices: ["Never", "Rarely", "Sometimes", "Often"], answer: 3 },
  { question: "Over the past 2 weeks, how often have you felt very sad or hopeless?",
    choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"], answer: 3 },
  { question: "Have you lost interest or pleasure in activities you usually enjoy?",
    choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"], answer: 3 },
  { question: "Have you experienced difficulty concentrating or making decisions?",
    choices: ["Never", "Sometimes", "Often", "Very often"], answer: 3 },
  { question: "Have you had thoughts of self-harm or feeling that life is not worth living?",
    choices: ["Never", "Sometimes", "Often", "Very often"], answer: 3 },
  { question: "Have your mood changes affected your work, school, or social life?",
    choices: ["Not at all", "A little", "Moderately", "Severely"], answer: 3 }
];

// use let (open-ended) & var to declare variables (scope)
let current = 0;
let answers = [];
let score = 0;

// target ids
const popupBg = document.getElementById("popupBg");// don't need to capitalize all consts in js
const questionText = document.getElementById("questionText");
const choicesDiv = document.getElementById("choices");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const answerPage = document.getElementById("answerPage");
const answerList = document.getElementById("answerList");
const scoreText = document.getElementById("scoreText");

function startQuiz() {
    popupBg.style.display = "flex";
    current = 0;
    answers = [];
    score = 0;
    showQuestion();
}

document.getElementById("startBtn").addEventListener("click", startQuiz());

// show current question & choices
function showQuestion() {
    // get question currently on
    const currentQuestion = QUESTIONS[current];
}