function getComputerChoice(){

    let randNum = Math.random();
    let computerChoice;

    if (randNum < 0.33){
        computerChoice = "rock";
    }
    else if(randNum > 0.33 && randNum < 0.66){
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors"
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Choose between rock, paper and scissors")
    
    let loop = true;

    while(loop){
        if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
            loop = false;
            return humanChoice;
        }
        else{
            loop = true;
            humanChoice = prompt("Make sure to enter a valid input: rock, paper or scissors")
        }
    }
}

function playRound(){

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

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
    displayScore(humanScore, computerScore)
}

function displayScore(X, Y){
    console.log("The Score is You: " + X + " Computer: " + Y + " and its round " + numberOfRounds)
}

function playGame(){
    for(numberOfRounds; numberOfRounds <= 5; numberOfRounds++){
        playRound()
    }

    if (humanScore == computerScore){
        console.log("The Game Resulted in a Tie!")
    }
    else if(humanScore < computerScore){
        console.log("The Game Resulted in a Loss!")
    }
    else if(humanScore > computerScore){
        console.log("The Game Resulted in a Win!")
    }
}

let numberOfRounds = 0;
let humanScore = 0;
let computerScore = 0;

playGame();
