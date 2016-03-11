function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function changeChoices() {
	var questions = [
	{question: 'What is 1+1?',
	choices:[1, 2, 3, 4],
	correct:1},
	{question: 'What is 2+2?',
	choices:[2, 3, 4, 5],
	correct:2}
];
	document.getElementById('questionNum').innerHTML += 1;

	document.getElementById('question').innerHTML = questions[0]['question'];
	
	document.getElementById('choice1').innerHTML = questions[0]['choices'][0];
	document.getElementById('choice2').innerHTML = questions[0]['choices'][1];
	document.getElementById('choice3').innerHTML = questions[0]['choices'][2];
	document.getElementById('choice4').innerHTML = questions[0]['choices'][3];
}

function correctAnswer() {
	if (document.answers.choice2.checked === true) {
		alert('correct');
	} else {
		alert('wrong');	
	}
}

ready(changeChoices);
