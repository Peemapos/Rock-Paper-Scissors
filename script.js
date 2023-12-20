function getComputerChoice() {
    const rpc = ["rock", "paper", "scissors"];
    return  rpc[Math.floor(Math.random() * rpc.length)] ;
}
let playerScore=0;
let computerScore=0;
function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("What is your choice?").toLowerCase();
    if (playerSelection === computerSelection) {
        alert("TIES replay again");
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        alert("You Lose! Paper beats Rock") ;
        return computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You Lose! Rock beats scissors") ;
        return computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You Lose! Scissors beats Paper") ;
         return computerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You Win! Rock beats Scissors") ;
        return playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win! Scissors beats Paper") ;
        return playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You Win! Paper beats Rock") ;
        return playerScore++;
    }
    else {
        alert("Invalid input");
    }
}
function game() {
    while (true) {
        playRound();
        if (playerScore >= 5 ) {
            alert("Game Over. You Win!");
            break
        } else if (computerScore >= 5 ) {
            alert("Game Over. You Lose!");
            break
        }
    }
}

console.log(game())



