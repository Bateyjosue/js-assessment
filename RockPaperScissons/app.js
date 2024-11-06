document.addEventListener("DOMContentLoaded", () => {
  const actions = document.getElementById("actions");
  const result = document.getElementById("result");

  if (actions && result) {
    const buttons = Array.from(actions.getElementsByTagName("button"));

    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
  }
});

function handleButtonClick(event) {
  const playerChoice = event.target.id;
  const machineChoice = getRandomChoice();
  document.getElementById("result").innerText = determineOutcome(playerChoice, machineChoice);
}

function getRandomChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}

/**
 * Determines the outcome of a Rock-Paper-Scissors game.
 *
 * @param {string} playerChoice - The player's choice: "rock", "paper", or "scissor".
 * @param {string} machineChoice - The machine's choice: "rock", "paper", or "scissor".
 * @returns {string} - The result of the game: "Win", "Lose", "Tie", or "Wrong Input" if an invalid choice is provided.
 */
function determineOutcome(playerChoice, machineChoice) {
  switch (playerChoice) {
    case "rock":
      return machineChoice === "rock" ? "Tie" : machineChoice === "paper" ? "Lose" : "Win";
    case "paper":
      return machineChoice === "rock" ? "Win" : machineChoice === "paper" ? "Tie" : "Lose";
    case "scissor":
      return machineChoice === "rock" ? "Lose" : machineChoice === "paper" ? "Win" : "Tie";
    default:
      return "Wrong Input";
  }
}

