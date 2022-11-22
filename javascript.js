const userOptions = ["rock","paper","scissor"];

let computerChoice = getComputerChoice(userOptions);

let playerSelection= prompt("What are you selecting?? Type in \"Stone\", \"Paper\", \"Scissor\"").toLowerCase();

console.log(`Computer selection: ${computerChoice}`);
console.log(`Player selection: ${playerSelection}`);

singleRoundResult(playerSelection,computerChoice);


function getComputerChoice(userOptions){
    //const optionsForComputer = ["Rock","Paper","Scissor"];
    //return optionsForComputer[0];
    let limit = (userOptions.length);
    let computerSelection =  userOptions[Math.floor(Math.random()*limit)];
    return computerSelection;
}


function singleRoundResult(playerSelection,computerChoice){

    if(playerSelection===computerChoice){
        console.log("Its a tie!!!!!!");
    }
    
    else{

        if(playerSelection==="rock"){
            if(computerChoice==="scissor"){
                console.log("You win!!! Rock beats Scissor");
            }

            else{
                console.log("Oops!! You lose!!! Paper beats Rock");
            }
        }

        else if(playerSelection==="paper"){

            if(computerChoice==="rock"){
                console.log("You win!!! Paper beats Rock");
            }

            else{
                console.log("Oops!! You lose!!! Scissor beats Paper");
            }
        }

        else if(playerSelection==="scissor"){
            if(computerChoice==="paper"){
                console.log("You win!!! Scissor beats Paper");
            }

            else{
                console.log("Oops!! You lose!!! Rock beats Paper");
            }
        }

    }

    
}