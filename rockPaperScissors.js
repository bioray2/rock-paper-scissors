function getComputerChoice(){

    let randNum = Math.random;

    if (randNum < 0.33){
        let computerChoice = "rock";
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