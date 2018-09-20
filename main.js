var ctr = 1;
var health;
var currentQuestion = 0;
var isFlipped = false;

var input1 = document.getElementById("input1");

var answer1 = document.getElementById("answer1");

var input2 = document.getElementById("input2");

var answer2 = document.getElementById("answer2");

var input3 = document.getElementById("input3");

var answer3 = document.getElementById("answer3");

var input4 = document.getElementById("input4");

var answer4 = document.getElementById("answer4");

var input5 = document.getElementById("input5");

var answer5 = document.getElementById("answer5");

function loseHealth() {
  health = 100 - (25 * ctr++);
  document.getElementById("progress-bar").style.width = health + '%';
  if (health <= 0) {
    document.getElementById("end").innerHTML = "YOU LOSE! :("
  }
}

var questions = [];
var answers = [];

function inputQuestions() {

  questions.push(prompt("Welcome to Justin and Josh's ONLINE FLASHCARD MAKER!\n\nWhat is your first question?", "ex: What is the capitol of Alaska?"));
  answers.push(prompt("What is the answer to the question?", "ex: Juneau"));

  questions.push(prompt("What is your second question?"));
  answers.push(prompt("What is the answer to the question?"));

  questions.push(prompt("What is your third question?"));
  answers.push(prompt("What is the answer to the question?"));

  questions.push(prompt("What is your fourth question?"));
  answers.push(prompt("What is the answer to the question?"));

  questions.push(prompt("What is your fifth question?"));
  answers.push(prompt("What is the answer to the question?"));

  qTransition(0);
}

function qTransition(questionNum) {
    document.getElementById("question").innerHTML = questions[questionNum];
    document.getElementById("answer").innerHTML = answers[questionNum];
    currentQuestion = questionNum; // change question counter
}

function compareValues() {
    var x = document.getElementById("frm1");

    if (x.elements[0].value == answers[currentQuestion]) {
      document.getElementById("answer").innerHTML = answers[currentQuestion] + "\nGood Job!";
    }
    else {
      loseHealth();
    }
}

function keyEnter(input) {
  
  if (event.key === 'Enter' && !isFlipped) {
    event.preventDefault();
    document.getElementById("cardFront").classList.toggle('flipped');
    compareValues();
    isFlipped = true;
  }
}

function flipBack() {
  if (isFlipped) {
    document.getElementById("cardFront").classList.toggle('flipped');
    isFlipped = false;
  }
}

function wut() {
  questions.push(input1);
  answers.push(answer1);
  questions.push(input2);
  answers.push(answer2);
  questions.push(input3);
  answers.push(answer3);
  questions.push(input4);
  answers.push(answer4);
  questions.push(input5);
  answers.push(answer5);
  alert(questions.length);
  currentQuestion = 0;
  window.location.href='index.html';
}