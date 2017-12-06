// alert("test!");
// Global Variables
// ============================================================

// Arrays and variables for holding data 
// ============================================================
var wordOptions = ["michael jackson", "david bowie", "queen", "bon jovi", "elton john", "john lennon", "iron maiden", "madonna"]
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

// Game counters
var winCount = 0;
var lossCount = 0;
var guessesleft = 9;

// Functions (Resuable Blocks of code to be called upon when needed)
// ============================================================
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;
    // Reset
    guessesleft = 0;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks.
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_")

    }
    // Change HTML to reflect round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesleft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;



    // testing /
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function checkLetters(letter) {
    // Check if letter exist in code at
    //  alert(letter);
    var isletterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            // alert("letter found");
        }
    }
    // Check Where in the word the letter exists, then populate out blanks and succesfuly
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }

    }
    // Letter was not found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    // Testing and Debuging
    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + numGuesses);
    // Update the HTML to reflect the recent count stats
    document.getElementById("numGuesses").innerHTML = guessesleft;
    document.getElementById("wordtoGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("");
    // Check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");
        // Update the win counter in HTML
        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    }

    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");
        //Update the HTML
        document.getElementById("lostCounter").innerHTML = lossCount;
        startGame();
    }


}
// Main Process
// ============================================================

// Initiates the code for the first time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    //testing
    console.log(letterGuessed);
}