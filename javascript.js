const userOptions = ["rock","paper","scissor"];

let countComputerWins = 0;
let countUserWins = 0;
let winner = "";


for(let i = 0;i<5;i++){

    let computerChoice = getComputerChoice(userOptions);

    let playerSelection= prompt("What are you selecting?? Type in \"Rock\", \"Paper\", \"Scissor\"").toLowerCase();

    while(playerSelection!="rock"&&playerSelection!="paper"&&playerSelection!="scissor"){
        alert("Invalid Entry");

        playerSelection = prompt("What are you selecting?? Type in \"Rock\", \"Paper\", \"Scissor\"").toLowerCase();
    }

    console.log(`Computer selection: ${computerChoice}`);
    console.log(`Player selection: ${playerSelection}`);

    result = singleRoundResult(playerSelection,computerChoice);

    if( result === "tie"){
        continue;
    }

    if(result === "computer"){
        countComputerWins+=1;
    }

    if(result === "user"){
        countUserWins+=1;
    }

    if(countComputerWins===3){
        console.log("Oopss!!! You lost!! Better luck next time");
        break;

    }

    if(countUserWins===3){
        console.log("Wohoooo!!! YOU WON!!!!");
        break;
    }

    if(i===4){
        if(countComputerWins>countUserWins){
            console.log("Oopss!!! You lost!! Better luck next time");
        }

        else if(countComputerWins<countUserWins){
            console.log("Wohoooo!!! YOU WON!!!!");
        }

        else{
            console.log("Its a tie!!!");
        }
    }
}




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
        return winner = "tie";
    }
    
    else{

        if(playerSelection==="rock"){
            if(computerChoice==="scissor"){
               console.log("You win!!!");
                return winner = "user";
            }

            else{
               console.log("Computer win!!!");
                return winner = "computer";
            }
        }

        else if(playerSelection==="paper"){

            if(computerChoice==="rock"){
               console.log("You win!!!");
                return winner = "user";
            }

            else{
               console.log("Computer win!!!");
                return winner = "computer";
            }
        }

        else if(playerSelection==="scissor"){
            if(computerChoice==="paper"){
              console.log("You win!!!");
                return winner = "user";
            }

            else{
              console.log("Computer win!!!");
                return winner = "computer";
            }
        }

    }

    
}