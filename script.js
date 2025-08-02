// Function to simulate computer's choice
function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex]; // Randomly selects Rock, Paper, or Scissors
}

// Function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to play a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }
}

// Main game function
function game() {
    console.log("Welcome to Rock, Paper, Scissors!");
    let rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
    if (isNaN(rounds) || rounds <= 0) {
        console.log("Invalid number of rounds. Exiting game.");
        return;
    }

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= rounds; i++) {
        console.log(`Round ${i}:`);
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        if (!playerSelection || !['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
            console.log("Invalid choice. Skipping this round.");
            continue;
        }

        const computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You win")) {
            playerScore++;
        } else if (result.startsWith("You lose")) {
            computerScore++;
        }

        console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    }

    console.log("Game Over!");
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
game();