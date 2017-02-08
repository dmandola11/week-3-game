
//logs winning games
var wins = 0;
var losses = 0;
var guesses = 12;

//array of hangman words
var words = ["bart",  "homer",  "springfield",  "doh",  "woohoo",
 			"squishee",  "craptacular",  "foilage", "marge", "lisa" ];

var gameWord = ""; // word to solve
var guessedLetters = []; //array that keeps all guessed letters
var letters = []; // letters of the word to solve
var blanksAndLetters = []; //array that will update the blanks and letters guessed
var blanks = 0; //initial blanks of the game word

function initGame() {

	guesses = 12;

	gameWord = words[Math.floor(Math.random() * words.length)]; //choose a random word from words array
	letters = gameWord.split(""); //now that the word is chosen we'll break it up into it's letters
	blanks = letters.length; //number of letters in the word

	console.log(gameWord);

	blanksAndLetters = []; // resets the array each round
	guessedLetters = []; //wrong guesses

	for (var i=0; i < blanks; i++) { // create blanks for the number of letters in the word
		blanksAndLetters.push("_");
	}

	console.log(blanksAndLetters); //gives number of blanks in console

	document.getElementById("guesses").innerHTML = guesses; //displays guesses left
	document.getElementById("dispword").innerHTML = blanksAndLetters.join(" "); //displays initial blanks
	document.getElementById("displetters").innerHTML = guessedLetters.join(" "); //clears previous round

}

//now we create a function to check for matching letters
function guessLetters(letter) {

	var letterInWord = false; // boolean to check if letter is found in the word

	for (var i=0; i< blanks; i++) { //check if letter is in array
		if(gameWord[i] == letter) {
			letterInWord = true; //if so letterInWord switches to true
		}
	}

	if(letterInWord){     // find where letter exists

		for(var i=0; i< blanks; i++) {
			if(gameWord[i] == letter) {
				blanksAndLetters[i] = letter;

			}
		}
		console.log(blanksAndLetters);
	}
	else {
		guessedLetters.push(letter); //add to wrong letter list
		guesses--; //decreases guesses left
	}
}

function finishGame(){
	console.log("Wins: " + wins + " | Losses: " + losses + " | Guesses Left: " + guesses); //display wins, losses, guesses in console

	//display correct/wrong guesses on page
	document.getElementById("guesses").innerHTML = guesses;
	document.getElementById("dispword").innerHTML = blanksAndLetters.join(" ");
	document.getElementById("displetters").innerHTML = guessedLetters.join(" ");

	//if we guess the word correctly

	if(letters.toString() == blanksAndLetters.toString()) {
		wins++;
		alert("You Won!!!");
		document.getElementById("wins").innerHTML = wins;
		initGame(); //starts game over again
	}
	else if (guesses == 0) { //if you lose :(
		losses++;
		alert("You Lost!");
		document.getElementById("losses").innerHTML = losses;
		initGame(); //start over again
	}
}

//now we run the functions to begin the game

initGame();

//capture key strokes
document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); //makes sure letters are in lowercase
	guessLetters(letterGuessed); //checks for correct letters
	finishGame(); // runs function after each round
}
