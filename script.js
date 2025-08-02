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
    const player = playerSelection.toLowerCase();// Convert player selection to lowercase for comparison
    const computer = computerSelection.toLowerCase();

    // Check for invalid player input
    if (player !== 'rock' && player !== 'paper' && player !== 'scissors') {
        return 'invalid';
    }
   // Check for a tie
    if (player === computer) {
        return "It's a tie!";
    } else if (
       (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.`;
    } else {
        return `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}.`;
    }
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
// Main game function
function game() {
    console.log("Welcome, traveler, to the Ancient Tournament of Rock, Paper, Scissors!Prove your worth against the legendary Computer Master.");
    let rounds = parseInt(prompt("How many rounds would you like to play?"), 10);
    if (isNaN(rounds) || rounds <= 0) {
        console.log("Invalid number of rounds. Exiting game.");
        return;
    }

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= rounds; i++) {
        console.log(`Round ${i}:`);
        const playerSelection = prompt("`Round ${i + 1} of ${i}: Choose your weapon! (Rock, Paper, or Scissors)`);
        if (!playerSelection || !['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
            console.log("Invalid choice. Skipping this round.");
            continue;
        }

        const computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
 const player = capitalize(playerSelection);
        const computer = capitalize(computerSelection);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You win")) {
            playerScore++;
          console.log(`You Win Round ${i + 1}! ${player} beats ${computer}.`);
        } else if (result.startsWith("You lose")) {
            computerScore++;
              console.log(`You Lose Round ${i + 1}! ${computer} beats ${player}.`);
        }else {
            console.log(`Round ${i + 1} is a Tie! Both chose ${player}.`);
        }


        console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
    }

    console.log("Game Over!");
    console.log("The tournament has concluded!");
    if (playerScore > computerScore) {
       console.log(`*** You are the Champion! Final Score: ${playerScore} to ${computerScore} ***`);
    } else if (playerScore < computerScore) {
        console.log(`*** The Computer Master wins! Final Score: ${playerScore} to ${computerScore} ***`);
    } else {
       console.log(`*** It's a Tie! Final Score: ${playerScore} to ${computerScore} ***`);
    }
}

// Start the game
game();
