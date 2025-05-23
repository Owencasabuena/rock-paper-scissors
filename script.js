const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let win = 0;
let draw = 0;
let lose = 0;

function determineResult(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        draw++;
        return "DRAW!";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
                win++;
                return "YOU WIN!";
            }
    else {
        lose++;
        return "YOU LOSE...";
    }
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

rock.addEventListener('click', function() {
    startBattle("rock");
});

paper.addEventListener('click', function() {
    startBattle("paper");
});

scissors.addEventListener('click', function() {
    startBattle("scissors");
});

function updateScore() {
    const winScore = document.querySelector("#win");
    const drawScore = document.querySelector("#draw");
    const loseScore = document.querySelector("#lose");

    winScore.textContent = `Win: ${win}`;
    drawScore.textContent = `Draw: ${draw}`;
    loseScore.textContent = `Lose: ${lose}`;
}

const replayButton = document.querySelector(".replay-button");
replayButton.addEventListener('click', function() {
    document.querySelector(".player-choice").style.display = 'block';
    document.querySelector(".battle-area").style.display = 'none';
    document.querySelector(".result-overlay").style.display = 'none';
    document.querySelector(".player-pick").innerHTML = "";
    document.querySelector(".computer-pick").innerHTML = "";
    replayButton.style.display = 'none';
});

function startBattle(playerChoice) {
    let computerChoice = getComputerChoice();
    document.querySelector(".player-choice").style.display = 'none';
    document.querySelector(".battle-area").style.display = 'flex';
    let playerPick = document.createElement("img");
    if(playerChoice === "rock") {
        playerPick.setAttribute('src', 'https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/rock.png');
    }
    else if(playerChoice === "paper") {
        playerPick.setAttribute('src', 'https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/paper.png');
    }
    else {
        playerPick.setAttribute('src', 'https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/scissors.png');
    }
    document.querySelector(".player-pick").appendChild(playerPick);

    let computerPick = document.createElement("img");
    if(computerChoice === "rock") {
        computerPick.setAttribute('src', 'https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/rock.png');
    }
    else if(computerChoice === "paper") {
        computerPick.setAttribute('src', 'https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/paper.png');
    }
    else {
        computerPick.setAttribute('src', 'https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/scissors.png');
    }
    document.querySelector(".computer-pick").appendChild(computerPick);

    let result = determineResult(playerChoice, computerChoice);
    const resultOverlay = document.querySelector(".result-overlay");
    resultOverlay.textContent = result;
    resultOverlay.style.display = 'flex';

    updateScore();
    replayButton.style.display = "block";
}