const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: "4",
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Perth", "Canberra"],
    correct: "Canberra",
  },
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function showQuestion() {
  // Clear previous answers
  answersEl.innerHTML = "";
  resultEl.textContent = "";

  const currentQuestion = questions[currentIndex];
  questionEl.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer");

    btn.addEventListener("click", () => {
      if (answer === currentQuestion.correct) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
      }

      // Disable all buttons
      document.querySelectorAll(".answer").forEach(b => b.disabled = true);
    });

    answersEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Complete!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your score: ${score} / ${questions.length}`;
  }
});

showQuestion();
