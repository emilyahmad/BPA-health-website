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
    // display question text
    questionText.textContent = currentQuestion.question;
    // clear old choices before adding new ones
    choicesDiv.innerHTML = "" // can replace formatting too, like bold (> text content)

    // create btn for each choice
    currentQuestion.choices.forEach((choiceText, choiceNumber) => {
        // for every element of choice that we get --> make a new btn
        const choiceButton = document.createElement("button");
        choiceButton.Text = choiceText;

        // when clicked, rescore
        choiceButton.onclick = () => selectAnswer(choiceButton, choiceNumber);

        // add button to the page
        choicesDiv.appendChild(choiceButton);
    });
    
    // change next button depending on the question #
    if (current === QUESTIONS.length-1) {
        nextBtn.textContent = "Finish";
    } else {
        nextBtn.textContent = "Next";
    }

    // disable next until user selects an answer
    nextBtn.disabled == true;
}

// when user clicks an answer
function selectAnswer (buttonClicked, selectedChoice) {
    // remove highlight from all buttons first
    Array.from(choicesDiv.children).forEach(btn => {
        btn.classList.remove("selected");
    });
    // highlight button user clicked
    buttonClicked.classList.add("selected"); // clicked button is highlighted

    // store answer for this question
    answers[current] = selectedChoice;

    // when next, finished button is clicked ; nextBtn appears
    nextBtn.addEventListener("click", () => {
        // if there are additional questions
        if (current < QUESTIONS.length - 1) {
            current++;
            showQuestion();
        } else { // if this was the last question
            calculateScore();
            showResults();
        }
    });
}
// add up the user's score
function calculateScore() {
    // each selected answer's 
    score = answers.reduce ((total, answerValue) => {
        return total + (answerValue || 0);
    }, 0);
}

// show results
function showResults() {
    // hide the quiz popup
    popupBg.style.display = "none";
    // clear old answers, if any
    answerList.innerHTML = "";
    // show results on results page
    // changes numeric to a string
    scoreText.textContent = `You score ${score} out of ${QUESTIONS.length * 3}. `
    + `Please see the rubric above for interpretation.`

    // show the results page
    answerPage.style.display = "block";
}

// restart button resets results view
document.getElementById("restartBtn").addEventListener("click", () => {
    answerPage.style.display = "none";
    answer = []; // clear stored answers
});