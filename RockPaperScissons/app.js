document.addEventListener("DOMContentLoaded", () => {
  const actions = document.getElementById("actions");

  const buttons = actions.getElementsByTagName("button");
  const result = document.getElementById("result");
  const arr = Array.from(buttons)
    
  arr.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target.id);
      const mine = e.target.id;
      const machine = arr[Math.floor(Math.random() * arr.length)].id;
      result.innerHTML = rockPaperScissor(mine, machine);
    });
  });
});

/**
 * Determines the outcome of a Rock-Paper-Scissors game.
 *
 * @param {string} mine - The player's choice, which can be "rock", "paper", or "scissor".
 * @param {string} machine - The machine's choice, which can be "rock", "paper", or "scissor".
 * @returns {string} - The result of the game: "Win", "Lose", "Tie", or "Wrong Input" if an invalid choice is provided.
 */
const rockPaperScissor = (mine, machine) => {
  switch (mine) {
    case "rock":
      return machine === "rock" ? "Tie" : machine === "paper" ? "Lose" : "Win";
    case "paper":
      return machine === "rock" ? "Win" : machine === "paper" ? "Tie" : "Lose";
    case "scissor":
      return machine === "rock" ? "Lose" : machine === "paper" ? "Win" : "Tie";
    default:
      return "Wrong Input";
  }
};
