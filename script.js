function changeChoices() {
	var questions = [
	{question: 'What is 1+1?',
	choices:[1, 2, 3, 4],
	correct:1},
	{question: 'What is 2+2?',
	choices:[2, 3, 4, 5],
	correct:2}
];
	return function () {
		for (var i = 0; i < document.answers.choice.length; i++) {
			document.getElementById('choice1').innerHTML = questions[0]['choices'][i];
		}
	}
}

