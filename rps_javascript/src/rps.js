function game() {
  //const player1Choice = choices[Math.floor(Math.random() * choices.length)];
          
  var inputVal = document.getElementById("player1").value;
  var player1Points = 0;
  var player2Points = 0;
  var player1Input = prompt("Player 1, please make a choice");
  var player2Input = prompt("Player 2, please make a choice");

  
  while (player2Points < 3) {
  
    
    if (player1Input == "rock" && player2Input == "rock") {
      alert("Its a tie!");
    } else if (player1Input == "rock" && player2Input == "scissors") {
      player1Points++;
    } else if (player1Input == "rock" && player2Input == "papper") {
      player1Points++;
    } else if (player2Input == "rock" && player1Input == "scissors") {
      player2Points++;
    } else if (player2Input == "rock" && player1Input == "papper") {
      player2Points++;
    }
  
  }
}