var ctr = 1;
var health;
var currentQuestion = 0;
var isFlipped = false;

/* If a question is answered incorrectly, player loses health points */
function loseHealth() {
  health = 100 - (25 * ctr++);
  document.getElementById("progress-bar").style.width = health + '%';
  if (health <= 0) {
    currentQuestion = 0;
    document.getElementById("end").innerHTML = "YOU LOSE! :( <br><button id=\"playAgain\" class=\"button\" onclick=\"qTransition();\">Play Again</button>";
    health = 100;

  }
}

/* Arrays contain questions and answers */
var questions = [];
var answers = [];


/* Change question */
function qTransition() {
    document.getElementById("question").innerHTML = questions[currentQuestion].value;
    document.getElementById("answer").innerHTML = answers[currentQuestion].value;
}

/*
  Compare input to correct answer. If correct, move to next question.
   If incorrect, lose health points.
*/
function compareValues() {

    var x = document.getElementById("frm1");

    if (x.elements[0].value == answers[currentQuestion].value) {
      document.getElementById("answer").innerHTML = "Your answer: <h2 style=\"color: blue\">" + x.elements[0].value + "</h2>Correct Answer: " + answers[currentQuestion].value + "<br>Good Job!";
      currentQuestion++;
      if (currentQuestion >= 5) {
        document.getElementById("end").innerHTML = "CONGRATULATIONS!! YOU WIN! :D <br><button id=\"newQuestions\" class=\"button\">New Questions</button>"
      }
    }
    else {
      loseHealth();
      document.getElementById("answer").innerHTML = "Your answer: <h2 style=\"color: red\">" + x.elements[0].value + "</h2>INCORRECT<br>Try Again";
    }
    setTimeout(flipBack, 3000);
}

/* Flip card on enter */
function keyEnter(input) {

  if (event.key === 'Enter' && !isFlipped) {
    event.preventDefault();
    document.getElementById("cardFront").classList.toggle('flipped');
    compareValues();
    isFlipped = true;
  }
}

/* Set up new question */
function setCurrentQuestion(num) {
  currentQuestion = num;
  flipBack();
}


/* After answer, flip card back to question side after 1 second */
function flipBack() {
  if (isFlipped) {
    document.getElementById("cardFront").classList.toggle('flipped');
    isFlipped = false;
    setTimeout(qTransition, 1000);
  }
  else {
    setTimeout(qTransition, 1000);
  }

}

/* Places inputed questions and answers into arrays, changes to game view */
function changePage() {
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
  currentQuestion = 0;
  document.getElementById("content1").style.display = "none";
  document.getElementById("content2").style.visibility = "visible";
  qTransition();
}
