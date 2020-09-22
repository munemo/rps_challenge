function choiceGenerator() {

choices = ["Rock", "Papper", "Scissors"];
const player1Choice = choices[Math.floor(Math.random() * choices.length)];
const player2Choice = choices[Math.floor(Math.random() * choices.length)];
  

document.getElementById("player1").innerHTML = player1Choice;
document.getElementById("player2").innerHTML = player2Choice;

  

}

