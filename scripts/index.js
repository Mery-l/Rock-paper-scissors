

function getComputerChoice() {

    let choice = ['paper', 'scissors', 'rock'];
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function OneRound(computerChoice, playerChoice) {



    if (playerChoice == computerChoice) {
        result.textContent = `Computer chooses ${computerChoice}, It's a tie!`;
    }
    else
        if (playerChoice == 'rock' && computerChoice == 'scissors') {
            result.textContent = `Computer chooses scissors, You win!`;
            playerScore++;
        }
        else
            if (playerChoice == 'paper' && computerChoice == 'rock') {
                result.textContent = `Computer chooses rock, You win!`;
                playerScore++;
            }
            else
                if (playerChoice == 'scissors' && computerChoice == 'paper') {
                    result.textContent = `Computer chooses paper, You win!`;
                    playerScore++;
                }
                else {
                    result.textContent = `Computer chooses ${computerChoice}, You lose!`;
                    computerScore++;
                }

}


let computerScore = 0;
let playerScore = 0;

let result = document.querySelector(".result");
let buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener("click", () => {
    OneRound(getComputerChoice(), button.classList[0]);
    document.querySelector('.score').textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

    if (computerScore == 5)
        result.textContent = "Computer wins!";
    if (playerScore == 5) {
        result.textContent = "Player wins!";
    }
}));

