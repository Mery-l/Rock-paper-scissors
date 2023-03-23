

function getComputerChoice(){
    
    let choice = ['paper', 'scissors', 'rock'];
    let randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function getPlayerChoice(){

    return prompt("What's your pick?").toLowerCase();
}

function playRound(computerChoice, playerChoice){

    if(playerChoice == computerChoice)
            return "It's a tie!"
    else
        if(playerChoice == 'rock' && computerChoice == 'scissors')
            return `You win! Rock beats Scissor`;
        if(playerChoice == 'paper' && computerChoice == 'rock')
            return `You win! Paper beats Rock`;
        if(playerChoice == 'scissor' && computerChoice == 'paper')
            return `You win! scissor beats paper`;
    return `You lose! ${computerChoice} beats ${playerChoice}!`;
                
}

function game(){
    let rounds = 5;

    for(let i = 1; i <= rounds; i++){ 
        
        console.log(`Round ${i}`);

        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        
        console.log(`The computer chooses ${computerChoice}!`);
        console.log(playRound(computerChoice, playerChoice));
    }
}

game();
