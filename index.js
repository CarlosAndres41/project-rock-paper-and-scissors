// Create variables to keep count of the score 

let playerScore = 0
let computerScore = 0

let roundMsg = document.querySelector(".msg");
let playerScoreH3 = document.querySelector(".playerScore");
let computerScoreH3 = document.querySelector(".pcScore");
let finalScore = document.querySelector(".finalScore")

function getComputerChoice() {
    const rockPaperOrScissors = ["Rock", "Paper", "Scissors"]
    // Generate a random number beteen 0 and 2
    let randomNumber = Math.floor(Math.random() * rockPaperOrScissors.length)
    // Pick and return a random option from the array
    return rockPaperOrScissors[randomNumber]
}

function checkWinner() {
    if (playerScore === 5) {
        console.log("player wins");
        finalScore.textContent = `Final score: You: ${playerScore}, Computer: ${computerScore}. You Win!!`;
    } else if (computerScore === 5) {
        console.log("pc wins");
        finalScore.textContent = `Final score: Computer: ${computerScore}, You: ${playerScore}. You Lose.`;
    };
};

// Add event listeners to buttons
const buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let player = event.target.textContent;
        let pc = getComputerChoice();

        if (player === pc) {
            roundMsg.textContent = `It's a tie, both players picked: ${player}.`;
        } else {
            if ((player == "Paper" && pc == "Rock") ||
                (player == "Rock" && pc == "Scissors") ||
                (player == "Scissors" && pc == "Paper")
            ) {
                playerScore += 1
                playerScoreH3.textContent = `Player: ${playerScore}`;
                roundMsg.textContent = `You win! ${player} beats ${pc}`;
                checkWinner();
            } else {
                computerScore += 1
                computerScoreH3.textContent = `Computer: ${computerScore}`;
                roundMsg.textContent = `You Lose! ${pc} beats ${player}`;
                checkWinner();
            };
        };
    })
};

