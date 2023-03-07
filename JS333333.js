const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const rpsoption = document.querySelectorAll('.rpsoption');

let player;
let computer;
let result;
//let playerScore = 0;
//let compScore = 0;


 rpsoption.forEach(button => button.addEventListener('click', () => {
  player = button.textContent;
  getComputerChoice();
  playerText.textContent = player;
  computerText.textContent = computer;
}));




function getPlayerChoice(playerInput){
 if (
   playerInput === "rock" ||
   playerInput === "paper" || 
   playerInput === "scissors"
 ){
  return playerInput;
 }
};





function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      computer = 'rock';
      break;
    case 1:
      computer = 'paper';
      break;
    case 2:
      computer = 'scissors';
      break;
  }
};


function determineWinner(player) {
if (player === getComputerChoice()) {
      document.getElementById("resultText").innerHTML = "The game is a tie!";
} else if (player === "rock" && getComputerChoice() === "paper") {
      document.getElementById("resultText").innerHTML = "You suck";
      //compScore+=1;
      //scoreBoardComp.textContent = compScore;
} else if (player === "rock" && getComputerChoice() === "scissors") {
      document.getElementById("resultText").innerHTML = "Nice, you won!";
      //playerScore+=1;
      //scoreBoardPlayer.textContent = playerScore;
} else if (player === "paper" && getComputerChoice() === "rock") {
      document.getElementById("resultText").innerHTML = "Nice, you won!";
      //playerScore+=1;
      //scoreBoardPlayer.textContent = playerScore;
} else if (player === "paper" && getComputerChoice() === "scissors"){
      document.getElementById("resultText").innerHTML = "You suck";
      //compScore+=1;
      //scoreBoardComp.textContent = compScore;
} else if (player === "scissors" && getComputerChoice() === "rock") {
      document.getElementById("resultText").innerHTML = "You suck";
      //compScore+=1;
      //scoreBoardComp.textContent = compScore;
} else if (player === "scissors" && getComputerChoice() === "paper") {
      document.getElementById("resultText").innerHTML = "Nice, you won!";
      //playerScore+=1;
      //scoreBoardPlayer.textContent = playerScore;
 } 
  
}

function playGame(playerInput) {
  player = getPlayerChoice(playerInput);
  computer = getComputerChoice();
  //getPlayerChoice();
  // getComputerChoice();
  determineWinner(player, computer);
}

// playerScore++
  //    playerText.textContent = playerScore



//  else if (computer === 'rock' && player === 'paper') {
//  return "Nice, you won!"
//  }
//  else if (computer === 'paper' && player === 'scissors') {
//   return "Nice, you won!"
//  }
//  else if (computer === 'scissors' && player === 'rock') {
//    return "Nice, you won!"
//  }
//  else if (computer === 'rock') {
//    return (player === 'scissors') ? "You suck" : "Nice, you won!"
//  }
// else if (computer === 'paper') {
//   return (player === 'rock') ? "You suck" : "Nice, you won!"
// }
//  else if (computer === 'scissors') {
//    return (player === 'paper') ? "Nice, you won!" : "You suck"
//  }
//}







//const playGame = (choice) => {
//const playerChoice = getPlayerChoice(choice);
//const computerChoice = getComputerChoice();
// document.getElementById(playerchoice);
 //console.log("You threw: " + userChoice);
 //console.log("The computer threw:" + computerChoice);
 //console.log(determineWinner(userChoice, computerChoice));
//document.getElementById('rock');
 //document.getElementById('paper');
//document.getElementById('scissors');
//};