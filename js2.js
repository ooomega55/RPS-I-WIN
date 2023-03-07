  if (player === getComputerChoice()) {
      resultText.textContent = "The game is a tie!";
} else if (player === "rock" && getComputerChoice() === "paper") {
      resultText.textContent = "You suck";
      compScore+=1;
      scoreBoardComp.textContent = compScore;
} else if (player === "rock" && getComputerChoice() === "scissors") {
      resultText.textContent = "Nice, you won!";
      playerScore+=1;
      scoreBoardPlayer.textContent = playerScore;
} else if (player === "paper" && getComputerChoice() === "rock") {
      resultText.textContent = "Nice, you won!";
      playerScore+=1;
      scoreBoardPlayer.textContent = playerScore;
} else if (player === "paper" && getComputerChoice() === "scissors"){
      resultText.textContent = "You suck";
      compScore+=1;
      scoreBoardComp.textContent = compScore;
} else if (player === "scissors" && getComputerChoice() === "rock") {
      resultText.textContent = "You suck";
      compScore+=1;
      scoreBoardComp.textContent = compScore;
} else if (player === "scissors" && getComputerChoice() === "paper") {
      resultText.textContent = "Nice, you won!";
      playerScore+=1;
      scoreBoardPlayer.textContent = playerScore;
 } 