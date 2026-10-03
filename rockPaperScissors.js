function getComputerChoice(){

    let randNum = Math.random();
    let choice;

    if (randNum < 0.33){
        choice = "rock";
    }
    else if(randNum > 0.33 && randNum < 0.66){
        choice = "paper"
    }
    else{
        choice = "scissors"
    }

    const cChoice = document.querySelector("#cChoice");
    cChoice.textContent = "Computer Choice: " + choice;

    return choice;
}

// retrives a choice from a human through button input
function getHumanChoice(){
    count++;

    // prompts the user to make a move
    const title = document.querySelector("#title");
    title.textContent = "Please Select an option with the buttons below!";

    // sets a default value
    let choice;

    //  retrives choice from user with buttons
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        choice = "rock"
        playRound("rock");
    });

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        choice = "paper"
        playRound("paper");
    });

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        choice = "scissors"
        playRound("scissors");
    });
}

function playRound(humanChoice){

    let computerChoice = getComputerChoice();

    //  updates player choice h3
    const pChoice = document.querySelector("#pChoice");
    pChoice.textContent = "Player Choice: " + humanChoice;

    switch(humanChoice){
        case "rock":
            if (computerChoice == "rock"){
                console.log("Tie");
            }
            else if (computerChoice == "paper"){
                console.log("Loss!");
                computerScore++;
            }
            else if (computerChoice == "scissors"){
                console.log("Win!");
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice == "rock"){
                console.log("Win!");
                humanScore++;
            }
            else if (computerChoice == "paper"){
                console.log("Tie");
            }
            else if (computerChoice == "scissors"){
                console.log("loss");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice == "rock"){
                console.log("Loss!");
                computerScore++;
            }
            else if (computerChoice == "paper"){
                console.log("Win!");
                humanScore++;
            }
            else if (computerChoice == "scissors"){
                console.log("Tie");
            }
            break;
    }
    updateScore();
}


function playGame(){
    let count = 0;

    const play = document.querySelector("#play");
    play.addEventListener("click", () => {
        while(count <= 5){
            getHumanChoice();
        }
    })
}

function updateScore(){
    const scoreBoard = document.querySelector("#scoreBoard");
    scoreBoard.textContent = "Player - " + humanScore + " | Computer - " + computerScore;
}

let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;

playGame();