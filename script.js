// Function to simulate computer's choice
function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];// Randomly selects Rock, Paper, or Scissors
}
// Function to play a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();// Convert player selection to lowercase for comparison
    const computer = computerSelection.toLowerCase();

    // Check for invalid player input
    if (player !== 'rock' && player !== 'paper' && player !== 'scissors') {
        return 'invalid';
    }
    // Check for a tie
    if (player === computer) {
        return 'tie';
    }
    // Determine the outcome of the round
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}
// Function to capitalize the first letter of a word and lowercase the rest
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// New function to get valid player input with validation
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
// Function to play the game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome, traveler, to the Ancient Tournament of Rock, Paper, Scissors!");
    console.log("Prove your worth in 5 rounds against the legendary Computer Master.");
    console.log("Prepare yourself for battle! Choose wisely between Rock, Paper, or Scissors.");
    console.log("The first to win 3 rounds will be declared the champion!");
    console.log("------------------------------------------------------------------");

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerSelection(i + 1);

        if (playerSelection === null) {
            console.log("Game cancelled. The Computer Master claims victory by default!");
            return;
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        const player = capitalize(playerSelection);
        const computer = capitalize(computerSelection);

        if (result === 'invalid') {
            console.log(`Invalid input detected in Round ${i + 1}. This round is forfeited.`);
            continue; // Skip the round
        } else if (result === 'win') {
            playerScore++;
            console.log(`You Win Round ${i + 1}! ${player} beats ${computer}.`);
        } else if (result === 'lose') {
            computerScore++;
            console.log(`You Lose Round ${i + 1}! ${computer} beats ${player}.`);
        } else {
            console.log(`Round ${i + 1} is a Tie! Both chose ${player}.`);
        }

        console.log(`Current Score: Player ${playerScore} - ${computerScore} Computer`);
        console.log("------------------------------------------------------------------");
    }

    console.log("The tournament has concluded!");
    if (playerScore > computerScore) {
        console.log(`*** You are the Champion! Final Score: ${playerScore} to ${computerScore} ***`);
    } else if (computerScore > playerScore) {
        console.log(`*** The Computer Master wins! Final Score: ${playerScore} to ${computerScore} ***`);
    } else {
        console.log(`*** It's a Tie! Final Score: ${playerScore} to ${computerScore} ***`);
    }
}
game();
