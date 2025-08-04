
// Generate a random choice for the computer
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the result of a single round
function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (!['rock', 'paper', 'scissors'].includes(player)) return 'invalid';
    if (player === computer) return 'tie';

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}

// Capitalize the first letter of a word
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Prompt user for a valid choice
function getPlayerSelection(roundNumber) {
    const validChoices = ['rock', 'paper', 'scissors'];
    while (true) {
        let input = prompt(`Round ${roundNumber} of 5: Choose your weapon! (Rock, Paper, or Scissors)`);
        if (input === null) return null;

        input = input.trim().toLowerCase();
        if (validChoices.includes(input)) return input;

        alert("Invalid input! Please enter Rock, Paper, or Scissors.");
    }
}

// Function to play the game
function game() {
    alert(
        "🎮 Welcome to Rock, Paper, Scissors!\n\n" +
        "👉 The game consists of 5 rounds.\n" +
        "👉 You will be prompted to type Rock, Paper, or Scissors.\n" +
        "👉 Open the browser's console (F12 → Console tab) to see the results.\n\n" +
        "Good luck!"
    );
  
    console.log("============================================================");
    console.log("🎮 Welcome to the Ancient Tournament of Rock, Paper, Scissors!");
    console.log("============================================================");
    console.log("📜 How to Play:");
    console.log("- The game consists of 5 rounds against the Computer Master.");
    console.log("- Each round, you will be asked to choose Rock, Paper, or Scissors.");
    console.log("- Type your choice into the pop-up prompt (not the console!).");
    console.log("- Your input is NOT case sensitive — you can type 'rock', 'Rock', or 'ROCK'.");
    console.log("- The first to win 3 rounds is crowned the champion!");
    console.log("- Results and score updates will appear here in the console.");
    console.log("============================================================");
    console.log("🔥 Prepare for battle and keep your eyes on this console!");
    console.log("");
    
      let playerScore = 0;
    let computerScore = 0;

    // Start game after short delay to let user read instructions
    setTimeout(() => {
        const totalRounds = 5;

        for (let i = 0; i < totalRounds; i++) {
            console.log(`🛡️ Round ${i + 1} of ${totalRounds}`);
            console.log("--------------------------------------------------");

            let playerSelection = getPlayerSelection(i + 1);

            if (playerSelection === null) {
                console.log("❌ Game cancelled. The Computer Master claims victory by default!");
                return;
            }

            const computerSelection = computerPlay();
            const result = playRound(playerSelection, computerSelection);
            const player = capitalize(playerSelection);
            const computer = capitalize(computerSelection);

            if (result === 'invalid') {
                console.log(`⚠️ Invalid input detected. This round is forfeited.`);
                continue;
            } else if (result === 'win') {
                playerScore++;
                console.log(`✅ You Win! ${player} beats ${computer}.`);
            } else if (result === 'lose') {
                computerScore++;
                console.log(`❌ You Lose! ${computer} beats ${player}.`);
            } else {
                console.log(`🤝 It's a Tie! You both chose ${player}.`);
            }

            console.log(`📊 Current Score: Player ${playerScore} - ${computerScore} Computer`);
            console.log("--------------------------------------------------");

            // Early win condition
            if (playerScore === 3 || computerScore === 3) {
                console.log("🏁 A champion has emerged before all 5 rounds!");
                break;
            }
        }

        // Final Result
        console.log("============================================================");
        console.log("🏆 The tournament has concluded!");
        if (playerScore > computerScore) {
            console.log(`🎉 You are the Champion! Final Score: ${playerScore} to ${computerScore}`);
        } else if (computerScore > playerScore) {
            console.log(`💀 The Computer Master wins! Final Score: ${playerScore} to ${computerScore}`);
        } else {
            console.log(`🤷‍♂️ It's a Tie! Final Score: ${playerScore} to ${computerScore}`);
        }
        console.log("============================================================");

    }, 3000); // 2-second delay
}
game();
