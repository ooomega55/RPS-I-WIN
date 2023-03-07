//fuction to detect the player's input from clicking on the button with each onclick command
function getPlayerChoice(playerInput) {
  if (playerInput === "rock" || playerInput === "paper" || playerInput === "scissors"){
    return playerInput;
  }
}

//random number generation to give the computer its choice, depending on the number, thats the option computer uses
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

//player and computer are the 2 parameters needed to compare player and computer's answer, depending on outcome, different message will show up.
function determineWinner(player, computer){
  if (player === computer) {
      return "The game is a tie!";
} else if (player === "rock" && computer === "paper") {
      return "You suck!";
} else if (player === "rock" && computer === "scissors") {
      return "Nice, you won!";
} else if (player === "paper" && computer === "rock") {
      return "Nice, you won!";
} else if (player === "paper" && computer === "scissors"){
      return "You suck!";
} else if (player === "scissors" && computer === "rock") {
      return "You suck!";
} else if (player === "scissors" && computer === "paper") {
      return "Nice, you won!";
 } 
}

//set score for player and computer
let player = 0
let computer = 0

//if player's choice matches specific message, player gets a point and it returns that message in result
function playerScore(playerChoice, computerChoice) {
  if (determineWinner(playerChoice, computerChoice) === "Nice, you won!") {
        player ++;
    }
    return player;
}

//if computer's choice matches specific message, computer gets a point and it returns that message in result
function compScore(playerChoice, computerChoice) {
  if (determineWinner(playerChoice, computerChoice) === "You suck!") {
        computer ++;
    }
    return computer;
}

//playerchoice is connected to the function as well as the computerchoice being connected to its function
//document will find each text location and functions are placed properly based on the name of the Id
//score is also connected to read player and computer choice to see where the point goes.
function playGame(playerInput) {
  let playerChoice = getPlayerChoice(playerInput)
  let computerChoice = getComputerChoice()
  document.getElementById("playerText").innerHTML = playerChoice;
  document.getElementById("computerText").innerHTML = computerChoice;
  document.getElementById("resultText").innerHTML = determineWinner(playerChoice, computerChoice);
  document.getElementById("playerScore").innerHTML = playerScore(playerChoice, computerChoice);
  document.getElementById("compScore").innerHTML = compScore(playerChoice, computerChoice);
}