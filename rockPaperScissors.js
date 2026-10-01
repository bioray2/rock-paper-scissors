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