// Global Variables
// ============================================================

// Arrays and variables for holding data 
// ============================================================
var wordOptions = ["michaeljackson", "davidbowie", "queen", "bonjovi", "eltonjohn", "johnlennon", "ironmaiden", "madonna"]
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var letterGuessed = "";
// Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions (Reusable blocks of code that I will call upon when needed.)
//=================================================

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]
    lettersInWord = selectedWord.split('');
    numBlanks = lettersInWord.length;

    //Reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    //Populate blanks and success with right number of blanks

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
    }
    //Change html to reflect game round conditions
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //Testing Debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
    console.log(guessesLeft);
}

function checkLetters(letter) {
    // Check if letter exist i code at all
    // alert(letter);
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            alert("Letter found");

        }
    }
    // Check where in the word the letter exists, then populate our blanks and successes array
    if (isLetterInWord) {
        console.log("test");
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    // Letter wasn't found
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    // Testing and debugging
    // Console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left" + numGuesses);
    // Update html to update most recent information
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
    //Check if user won
    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        // document.getElementById("pic").setPointerCapture = "assets/images/madonna.png";
        // alert("You won!")
        // Update the win counter in the html
        document.getElementById("winCounter").innerHTML = winCount;
        if (selectedWord === wordOptions[7]) {
            document.getElementById("pic").src = 'assets/images/madonna.png';
        } else if (selectedWord === wordOptions[6]) {
            document.getElementById("pic").src = 'assets/images/ironmaiden.png';
        } else if (selectedWord === wordOptions[5]) {
            document.getElementById("pic").src = 'assets/images/johnlennon.png';
        } else if (selectedWord === wordOptions[4]) {
            document.getElementById("pic").src = 'assets/images/eltonjohn.png';
        } else if (selectedWord === wordOptions[3]) {
            document.getElementById("pic").src = 'assets/images/bonjovi.png';
        } else if (selectedWord === wordOptions[2]) {
            document.getElementById("pic").src = 'assets/images/queen.png';
        } else if (selectedWord === wordOptions[1]) {
            document.getElementById("pic").src = 'assets/images/davidbowie.png';
        } else {
            document.getElementById("pic").src = 'assets/images/michaeljackson.png';
        }
        startGame();
        // Else if statements


    }
    // Check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You lost!");
        // Update the HTML
        document.getElementById(lossCounter).innerHTML = lossCount;
        startGame();
    }
}




// Main Process
//==============================================
// Initiates the code the first time
startGame();

//Register clicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    //Testing debugging 
    console.log(letterGuessed);
}