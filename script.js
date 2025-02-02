function getHumanChoice()
{
    let humanChoice = prompt("Pick one (rock, paper, scissor): ");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock")
    {
        return humanChoice;
    }
    else if (humanChoice === "paper")
    {
        return humanChoice;
    }
    else if (humanChoice === "scissor")
    {
        return humanChoice;
    }
    else 
    {
        console.error("Invalid Input");
    }
}

function getComputerChoice() 
{
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerChoice;

    switch(randomNumber)
    {
        case 1:
            computerChoice = "rock";
            return computerChoice;
            break;
        case 2:
            computerChoice = "scissor";
            return computerChoice;
            break;
        case 3:
            computerChoice = "paper";
            return computerChoice;
            break;
    }
}

function playRound(humanChoice, computerChoice)
{
    let result;
    let winResult = "You win! " + humanChoice + " beats " + computerChoice;
    let loseResult = "You lose! " + computerChoice + " beats " + humanChoice;

    if (humanChoice === "rock" && computerChoice === "paper")
    {
        result = loseResult;
        computerScore++;
        console.log(result);
    }
    else if (humanChoice === "rock" && computerChoice === "scissor")
    {
        result = winResult;
        humanScore++;
        console.log(result);
    }
    else if (humanChoice === "paper" && computerChoice === "rock")
    {
        result = winResult;
        humanScore++;
        console.log(result);
    }
    else if (humanChoice === "paper" && computerChoice === "scissor")
    {
        result = loseResult;
        computerScore++;
        console.log(result);
    }
    else if (humanChoice === "scissor" && computerChoice === "rock")
    {
        result = loseResult;
        computerScore++;
        console.log(result);
    }
    else if (humanChoice === "scissor" && computerChoice === "paper")
    {
        result = winResult;
        humanScore++;
        console.log(result);
    }
    else 
    {
        result = "It's a tie!";
        console.log(result);
    }
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);

        if (i == 4)
        {
            console.log("Human Score: " + humanScore);
            console.log("Computer Score: " + computerScore);
    
            if (humanScore < computerScore)
            {
                console.log("You lose");
            }
            else 
            {
                console.log("You win!")
            }
        }
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();
