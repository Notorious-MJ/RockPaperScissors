//Game

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "TIE!";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection == "PAPER") ||
    (playerSelection === "PAPER" && computerSelection == "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
}

function getRandomChoice() {
  let randomNumber = math.floor(Math.random() *3)
    playRound(playerSelection, computerSelection);
    switch (randomNumber) {
        case 0: return "ROCK";
        case 1: return "PAPER";
        case 2 : return "SCISSORS";
    }
  }


function isGameOver() {
  return playerScore==="5" || computerScore==="5";
}
