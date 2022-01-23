var timer = 100;
var questionIndex = 0;
var buttonEl = document.querySelector(".start");
var score = 0;

function timerFunction() {
  document.getElementById("displayTimer").textContent = `time remaining ${timer}`;

  var testTimer = setInterval(function () {
    if (timer == 0) {
        document.getElementById("all").setAttribute("hidden", "")
        return clearInterval(testTimer)
    }
    timer--;
    document.getElementById("displayTimer").textContent = `time remaining ${timer}`;
    console.log(timer);
  }, 1000);
  
}

// Questions (object array)

var questionAnswers = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Texting Makeup Language",
      "Hyper Text Markup Language",
      "Hyper Talking Madeup Language",
      "Hyper text Markup Landing",
      "Hyper Tweeting Madeup Laughing",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question:
      "What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?",
    answers: [
      "<head></head>",
      "<title></title>",
      "<br></br>",
      "<body></body>",
      "<div></div>",
    ],
    correctAnswer: "<body></body>",
  },
  {
    question:
      "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
    answers: ["<code>", "<embed>", "<!DOCTYPE>", "<caption>", "<HTML>"],
    correctAnswer: "<!DOCTYPE>",
  },
  {
    question:
      "What tag defines a division or the beginning/end of an individual section in an HTML document?",
    answers: ["<div>", "<meta>", "<img>", "<table>", "<br>"],
    correctAnswer: "<div>",
  },
  {
    question: "What do you write in order to leave a message in HTML?",
    answers: ["//", "()", "#-- --#", "^__^", "<!-- --!>"],
    correctAnswer: "<!-- --!>",
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
    console.dir(listEl);
  }
}

function nextQuestion(event) {
  console.log(event.target);
  var liEl = document.querySelector("#question-answer-container");
  liEl.remove();
  //getAnswers;
  console.log("test");
  if (questionIndex >= questionAnswers.length -1) {
    if (
      event.target.textContent == questionAnswers[questionIndex].correctAnswer
    ) {
    } else {
      timer -= 10;
    }
    buttonEl.classList.remove("next-question");
    buttonEl.setAttribute("class", "start");
    questionIndex = 0;
    timer === 100;
    startQuiz();
  } else {
    if (
      event.target.textContent == questionAnswers[questionIndex].correctAnswer
    ) {
    } else {
      timer -= 10;
    }
    questionIndex++;
    getAnswers();
  }
  console.log(questionIndex);
}

console.log(questionAnswers[questionIndex].correctAnswer);
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

document.querySelector(".start").addEventListener("click", function () {
  if (timer === 100) {
    timerFunction();
    startQuiz();
  } else {
    startQuiz();
  }
}); //this works
