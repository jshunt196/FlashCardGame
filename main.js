var ctr = 1;
var health;
var currentQuestion = 0;

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
    alert(x.elements[0].value);

    if (x.elements[0].value == answers[currentQuestion]) {
      document.getElementById("answer").innerHTML = answers[currentQuestion] + "\nGood Job!";
    }
    else {
      loseHealth();
    }
}
