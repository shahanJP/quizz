const quizArray = [
  {
    question: "Which is the third planet from the sun?",
    a: "Saturn",
    b: "Earth",
    c: "Pluto",
    d: "Mars",
    correct: "b",
  },
  {
    question: "Which is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "a",
  },
  {
    question: "What is the capital of Australia",
    a: "Sydney",
    b: "Canberra",
    c: "Melbourne",
    d: "Perth",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What is Australia National Animal?",
    a: "Koala",
    b: "King Brown ",
    c: "Kangaroo",
    d: "none of the above",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

let timer = 0;
let interval = 0;
let time = document.querySelector("#time");
let countDown = () => {
  if (timer === 15) {
    clearInterval(interval);
    submit.click();
    
  } else {
    timer++
    time.innerText = timer;
  }
};

function loadQuiz() {

  deselectAnswers();

  const currentQuizData = quizArray[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
 
  timer = 0
  
}
loadQuiz();
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}



submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  interval = setInterval(countDown, 1000);
  if (answer) {
    if (answer === quizArray[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizArray.length) {
      loadQuiz();
    
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizArray.length} questions correctly</h2>
 
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
  
});
