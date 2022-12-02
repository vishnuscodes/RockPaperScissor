const userOptions = ["rock","paper","scissor"];

let countComputerWins = 0;
let countUserWins = 0;
let winner = "";


// for(let i = 0;i<5;i++){

    // let computerChoice = getComputerChoice(userOptions);
    let playerSelection = "";
    // let userClicked1 = false;
    // let userClicked2 = false;
    // let userClicked3 = false;
    // let letComputerSelect = true;

  
        // console.log("Inside loop")
        const btn1 = document.getElementById("option1");
        const btn2 = document.getElementById("option2");
        const btn3 = document.getElementById("option3");
        const exit = document.getElementById("exit");

        btn1.addEventListener("click", Option1);
    
        btn2.addEventListener("click", Option2);
    
        btn3.addEventListener("click", Option3);

        exit.addEventListener("click", exitFunction);


   
    // while(letComputerSelect){
        // if(userClicked1===true||userClicked2===true||userClicked3===true){
            // let computerChoice = getComputerChoice(userOptions);
        //     letComputerSelect==false;
        // }
        
    // }

    // lplayerSelection= prompt("What are you selecting?? Type in \"Rock\", \"Paper\", \"Scissor\"").toLowerCase();

    // while(playerSelection!="rock"&&playerSelection!="paper"&&playerSelection!="scissor"){
    //     alert("Invalid Entry");

    //     playerSelection = prompt("What are you selecting?? Type in \"Rock\", \"Paper\", \"Scissor\"").toLowerCase();
    // }

    // console.log(`Computer selection: ${computerChoice}`);
    // console.log(`Player selection: ${playerSelection}`);

    // result = singleRoundResult(playerSelection,computerChoice);

    // if( result === "tie"){
    //     continue;
    // }

    // if(result === "computer"){
    //     countComputerWins+=1;
    //     document.getElementById("computer-score").textContent = countComputerWins;
    //     console.log(  document.getElementById("computer-score").textContent);
    // }

    // if(result === "user"){
    //     countUserWins+=1;
    //     document.getElementById("user-score").textContent = countUserWins;
    //     console.log(  document.getElementById("user-score").textContent);
    // }

    // if(countComputerWins===3){
    //     console.log("Oopss!!! You lost!! Better luck next time");
    //     // break;
    // }

    // if(countUserWins===3){
    //     console.log("Wohoooo!!! YOU WON!!!!");
    //     // break;
    // }

    // if(i===4){
    //     if(countComputerWins>countUserWins){
    //         console.log("Oopss!!! You lost!! Better luck next time");
    //     }

    //     else if(countComputerWins<countUserWins){
    //         console.log("Wohoooo!!! YOU WON!!!!");
    //     }

    //     else{
    //         console.log("Its a tie!!!");
    //     }
    // }
// }

function Option1(){
    playerSelection = "rock";
    console.log(`Player Selection ${playerSelection}`);
    let computerChoice = getComputerChoice(userOptions);
    document.getElementById("display-computer-selection").textContent = computerChoice;
    result = singleRoundResult(playerSelection,computerChoice);
    if(result === "computer"){
        countComputerWins+=1;
        document.getElementById("computer-score").textContent = countComputerWins;
        // console.log(  document.getElementById("computer-score").textContent);
    }

    if(result === "user"){
        countUserWins+=1;
        document.getElementById("user-score").textContent = countUserWins;
        // console.log(  document.getElementById("user-score").textContent);
    }
    // userClicked1 = true;
    // console.log("Option1");
}

function Option2(){
    playerSelection = "paper";
    console.log(`Player Selection  ${playerSelection}`);
    let computerChoice = getComputerChoice(userOptions);
    document.getElementById("display-computer-selection").textContent = computerChoice;
    result = singleRoundResult(playerSelection,computerChoice);
    if(result === "computer"){
        countComputerWins+=1;
        document.getElementById("computer-score").textContent = countComputerWins;
        console.log(  document.getElementById("computer-score").textContent);
    }

    if(result === "user"){
        countUserWins+=1;
        document.getElementById("user-score").textContent = countUserWins;
        console.log(  document.getElementById("user-score").textContent);
    }
    // userClicked2 = true;
    // console.log("Option2");
}

function Option3(){
    playerSelection = "scissor";
    console.log(`Player Selection ${playerSelection}`);
    let computerChoice = getComputerChoice(userOptions);
    document.getElementById("display-computer-selection").textContent = computerChoice;
    result = singleRoundResult(playerSelection,computerChoice);
    if(result === "computer"){
        countComputerWins+=1;
        document.getElementById("computer-score").textContent = countComputerWins;
        console.log(  document.getElementById("computer-score").textContent);
    }

    if(result === "user"){
        countUserWins+=1;
        document.getElementById("user-score").textContent = countUserWins;
        console.log(  document.getElementById("user-score").textContent);
    }
    // userClicked3 = true;
    // console.log("Option3");
}

function exitFunction(){
    window.location.href = "index.html";
}

function getComputerChoice(userOptions){
    //const optionsForComputer = ["Rock","Paper","Scissor"];
    //return optionsForComputer[0];
    // console.log("getting computer choice")
    let limit = (userOptions.length);
    let computerSelection =  userOptions[Math.floor(Math.random()*limit)];
    console.log(computerSelection);
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