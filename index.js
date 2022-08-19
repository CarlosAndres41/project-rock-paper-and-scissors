const rockPaperOrScissors = ["Rock", "Paper", "Scissors"]

function getComputerChoice(array) {
    // Generate a random number beteen 0 and 2
    let randomNumber = Math.floor(Math.random() * array.length)
    let computerChoice = array[randomNumber]
    console.log(computerChoice);
}

getComputerChoice(rockPaperOrScissors)