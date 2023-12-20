# Rock-Paper-Scissors
function getComputerChoice() {
    const rpc = ["Rock", "Paper", "Scissor"];
    return  rpc[Math.floor(Math.random() * rpc.length)] ;
}
console.log(getComputerChoice());
