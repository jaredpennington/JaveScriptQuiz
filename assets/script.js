var timer = 100;
var questionIndex = 0;
var buttonEl = document.querySelector(".start");

function timerFunction() {
  setInterval(function () {
    timer--;
    console.log(timer);
  }, 1000);
}

// Questions (object array)

var questionAnswers = [
  {
    question: "1what is my favorite color?",
    answers: ["1black", "purple", "yellow", "green", "red"],
    correctAnswer: "purple",
  },
  {
    question: "2what is my favorite color?",
    answers: ["2black", "purple", "yellow", "green", "red"],
    correctAnswer: "purple",
  },
  {
    question: "3what is my favorite color?",
    answers: ["3black", "purple", "yellow", "green", "red"],
    correctAnswer: "purple",
  },
  {
    question: "4what is my favorite color?",
    answers: ["4black", "purple", "yellow", "green", "red"],
    correctAnswer: "purple",
  },
  {
    question: "5what is my favorite color?",
    answers: ["5black", "purple", "yellow", "green", "red"],
    correctAnswer: "purple",
  },
];

// populate DOM with questions and answers

function getAnswers() {
  // reference DIV that answers and questions will ultyimately be attached to
  var divEl = document.getElementById("divBox");
  //   Creare UL element and add to wrapper
  var ulEl = document.createElement("ul");
  ulEl.setAttribute("id", "question-answer-container");
  divEl.append(ulEl);
  //   reference H1 tag and add question to DOM
  var titleElement = document.getElementById("questions-title");
  var titleQuestion = questionAnswers[questionIndex];
  titleElement.textContent = titleQuestion.question;

  // Add answers to the DOM dynamically
  for (var i = 0; i < questionAnswers[questionIndex].answers.length; i++) {
    var listEl = document.createElement("li");
    listEl.textContent = questionAnswers[questionIndex].answers[i];
    listEl.setAttribute("onclick", "nextQuestion(event)");
    listEl.className = "answers-for-questions";
    document.getElementById("question-answer-container").append(listEl);
    console.dir(listEl)
  }
}

function nextQuestion(event) {
  console.log(event.target);
  var liEl = document.querySelector("#question-answer-container");
  liEl.remove();
  //getAnswers;
  console.log("test");
  if (questionIndex >= questionAnswers.length - 1) {
    buttonEl.classList.remove("next-question");
    buttonEl.setAttribute("class", "start");
    questionIndex = 0;
    timer === 100;
    startQuiz();
  } else {
      if (event.target.textContent == questionAnswers[questionIndex].correctAnswer){
        //you are going to check to see if the answer theyve selected is the correct answer. 
        }else {
            //you are going to check to see if the answer is incorrect and do the logic for that. fucker.
        }
    questionIndex++;
    getAnswers();
  }
  console.log(questionIndex);
}

console.log(questionAnswers[questionIndex].correctAnswer)
// high scores when the quiz ends. create high score button. gather and store info in a var and put onto html.
var highScores = 0;



// var nextQuestionBtn = document.querySelector(".next-question");
function startQuiz() {
  console.log("you just started the quiz!");
  buttonEl.classList.remove("start");
  buttonEl.setAttribute("class", "next-question");
  buttonEl.setAttribute("onclick", "nextQuestion(event)");
  getAnswers();
}

document.querySelector(".start").addEventListener("click", function() {
    if (timer === 100) {
        timerFunction()
        startQuiz()
    } else {
        startQuiz()
    }
}); //this works

