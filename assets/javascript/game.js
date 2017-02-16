var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var wins=0;
var losses=0;
var guesses=12;
var guessesLeft=12;
var guessedLetters=[];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// var newGuessesLeft = function () {
// 	document.querySelector('#guessLeft').innerHTML = "Guesses Left:" + guessesLeft;
// }

// var newGuessedLetters = function() {
// 	document.querySelector('#yourGuessesSoFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(',');
// }

var newGuessesLeft = function () {
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
}

var newGuessedLetters = function() {
	document.getElementById('yourGuessesSoFar').innerHTML = guessedLetters.join(',');
}

var reset = function() {
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	guesses = 12;
	guessesLeft = 12;
	guessedLetters = [];
	
	newGuessesLeft();
	newGuessedLetters();
}

document.onkeyup = function(event) {
	guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log('computerGuess ' + computerGuess);
	console.log('userGuess ' + userGuess);

	guessedLetters.push(userGuess);	
	newGuessesLeft();
	newGuessedLetters();

	if (guessesLeft > 0)
	{
		if (userGuess == computerGuess)
		{
			wins++;
			// document.querySelector('#wins').innerHTML = "Wins: " + wins;
			document.getElementById('wins').innerHTML = wins;
			reset();
		}
	}
	
	else if(guessesLeft == 0)
	{
		losses++;
		// document.querySelector('#losses').innerHTML = "Losses: " + losses;
		document.getElementById('losses').innerHTML = losses;
		reset();
	}
};