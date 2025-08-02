function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];// Randomly selects Rock, Paper, or Scissors





}

// Function to play a single round of Rock, Paper, Scissors
@@ -22,44 +27,51 @@ function playRound(playerSelection, computerSelection) {
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }
}
// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function getPlayerSelection(roundNumber) {
    const validChoices = ['rock', 'paper', 'scissors'];
    while (true) {
        let input = prompt(`Round ${roundNumber} of 5: Choose your weapon! (Rock, Paper, or Scissors)`);
        if (input === null) {
            return null; // User cancelled









        }
        input = input.trim().toLowerCase();
        if (validChoices.includes(input)) {
            return input;
        } else {
            alert("Invalid input! Please enter Rock, Paper, or Scissors.");






        }


    }
}
// Function to start the game
function startGame() {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");
    if (!playerSelection) {
        alert("Game cancelled.");
        return;
    }
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    alert(result);
}

// Function to play the game and display the result
function playGame(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;



}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
