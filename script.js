// Function to simulate computer's choice
function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];// Randomly selects Rock, Paper, or Scissors
}
