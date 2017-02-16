var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


var wins=0;
var losses=0;
var guesses=12;
var guessesLeft=12;
var guessedLetters=[];
var letterToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log('computerGuess ' + computerGuess )

var updateGuessesLeft = function () {
	document.querySelector('#guessLeft').innerHTML = "Guesses Left:" + guessesLeft;

}

var updateLetterToGuess = function () {
	this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
}

var updateGuessesSoFar = function() {
	document.querySelector('#soFar').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
	totalGuesses = 12;
	guessesLeft = 12;
	guessedLetters = [];

	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log('userGuess ' + userGuess)

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();


	if (guessesLeft > 0){
		if (userGuess == computerGuess){
			wins++;
			document.querySelector('#wins').innerHTML = "Wins: " + wins;

			reset();
		}
	}else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;

            reset();
        }
    };