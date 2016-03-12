/* function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
} 

ready(choices);

*/

var content = 
[
	{question: 'What is 1+1?', choices: [1, 2, 3, 4], correct: 1},
	{question: 'What is 2+2?', choices: [2, 3, 4, 5], correct: 2},
	{question: 'What is 2+3?', choices: [2, 's', 4, 5], correct: 2},
	{question: 'What is 2+4?', choices: [2, 's', 4, 5], correct: 2},
	{question: 'What is 2+5?', choices: [2, 3, 'z', 5], correct: 2},
];

var x = 0;
var y = 1;
var score = 0;

function choices() {

	if (content[x] === undefined) {
		document.querySelector('.score').textContent = 'Score: ' + score;
		document.form1.style.visibility = 'hidden';
		document.querySelector('.header').style.visibility = 'hidden';

	} else {

		var questionNumber = document.querySelector('.questionNumber');
		questionNumber.textContent = 'Question#' + y;

		var question = document.querySelector('.question');
		question.textContent = content[x]['question'];

		var choices = document.querySelectorAll('label');
		for (var i = 0; i < choices.length; i++) {
			choices[i].textContent = content[x]['choices'][i];
		}
	}
}

function next() {
	var inputs = document.querySelectorAll('input');

	if (content[x] === undefined) {
		return false;
	}

	else if (inputs[0].checked !== true && inputs[1].checked !== true && inputs[2].checked !== true && inputs[3].checked !== true) {
		alert('Please select an answer');

	} else {
		for (var i = 0; i < inputs.length; i++) {
			if (inputs[i].checked === true && i === content[x]['correct']) {
				score++;
			}
			inputs[i].checked = false;
		}

		x++;
		y++;
		choices();

	}
}
