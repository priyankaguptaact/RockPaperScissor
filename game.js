function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "It's a tie!";
        }
        else if(computerSelection === "paper"){
            return "The computer wins!";
        }
        else {
            return "You win the game!";
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "paper"){
            return "It's a tie!";
        }
        else if(computerSelection === "scissor"){
            return "The computer wins!";
        }
        else {
            return "You win the game!";
        }
    }
    if(playerSelection === "scissor"){
        if(computerSelection === "scissor"){
            return "It's a tie!";
        }
        else if(computerSelection === "rock"){
            return "The computer wins!";
        }
        else {
            return "You win the game!";
        }
    }
}

const playersSelection = prompt("Choose rock,paper or scissor: ");

playerSelection = playersSelection.toLowerCase();


const computerSelection = getComputerChoice();

game();

function game() {
    alert(playRound(playerSelection,computerSelection));
}
