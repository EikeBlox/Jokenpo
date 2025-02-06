let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const resultDiv = document.getElementById("result");
const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const playerChoiceElem = document.getElementById("player-choice");
const computerChoiceElem = document.getElementById("computer-choice");
const gameResultElem = document.getElementById("game-result");

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    playerChoiceElem.textContent = getChoiceName(playerChoice);
    computerChoiceElem.textContent = getChoiceName(computerChoice);

    const result = determineWinner(playerChoice, computerChoice);
    gameResultElem.textContent = result;

    if (result === "Você Ganhou!") {
        playerScore++;
        playerScoreElem.textContent = playerScore;
    } else if (result === "Máquina Ganhou!") {
        computerScore++;
        computerScoreElem.textContent = computerScore;
    }

    updateTable(playerChoice, computerChoice, result);
}

function getChoiceName(choice) {
    if (choice === "rock") return "👊 Pedra";
    if (choice === "paper") return "🖐️ Papel";
    return "✌️ Tesoura";
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "Empate!";
    
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Você Ganhou!";
    } else {
        return "Máquina Ganhou!";
    }
}

function updateTable(playerChoice, computerChoice, result) {
    const row = document.querySelector("#choices-table tbody tr");
    row.cells[0].textContent = getChoiceName(playerChoice);
    row.cells[1].textContent = getChoiceName(computerChoice);
    row.cells[2].textContent = result;
}
