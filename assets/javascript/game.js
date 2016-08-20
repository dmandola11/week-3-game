
//logs winning games
var wins = 0;
document.getElementById("wins").textContent = wins;

//array of hangman words
var words = ["bart",  "homer",  "springfield",  "doh",  "woohoo",
 			"squishee",  "craptacular",  "foilage", "marge", "lisa" ];
//selects random word from array
var gameWord = words[Math.floor(Math.random() * words.length)];
console.log(gameWord);
//holds letters already guessed
var guessedLetters = []; 

var lines = [];
//switches out underscores for letters in chosen word
for (var i = 0; i < gameWord.length; i++) {
	lines[i] = " _ ";
	
console.log(lines);
}
	

//increases amount of guesses to 5 more than length of word
var guesses = gameWord.length + 5;
document.getElementById("guesses").innerHTML =  guesses;

var letters = gameWord.length;


if (guesses > 0 && letters > 0){
var spaces = lines.join(" ");
document.getElementById("dispword").innerHTML = spaces;
	
var matches = true;
	
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userGuess);

guessedLetters.push(userGuess);
document.getElementById("displetters").innerHTML = userGuess;

for (let i = 0; i <= gameWord.length; i++) {
	if (gameWord[i] === userGuess) {
                lines[i] = userGuess;
                letters--;
                guesses--;
                matches = true;
            }
	}
}
}
