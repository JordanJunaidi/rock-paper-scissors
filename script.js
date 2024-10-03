function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats rock!");
                computerScore++;
            }
            else if (computerChoice == "rock") {
                console.log("Tie! You both chose rock!");
            }
            else {
                console.log("You win! Rock beats scissors!");
                humanScore++;
            }
        }
    
        else if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                console.log("Tie! You both chose paper!");
            }
            else if (computerChoice == "rock") {
                console.log("You win! Paper beats rock!");
                humanScore++;
            }
            else {
                console.log("You lose! Scissors beats paper!");
                computerScore++;
            }
        }
    
        else if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                console.log("You win! Scissors beats paper!");
                humanScore++;
            }
            else if (computerChoice == "rock") {
                console.log("You lose! Rock beats scissors!");
                computerScore++;
            }
            else {
                console.log("Tie! You both chose scissors");
            }
        }
    }


    for (i=0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) { 
        console.log(`Congrats, you win! You won ${humanScore} rounds and lost ${computerScore} rounds!`);
    }
    else if (computerScore > humanScore) {
        console.log(`Aw, you lost! You won ${humanScore} rounds and lost ${computerScore} rounds`);
    }
}

playGame();
