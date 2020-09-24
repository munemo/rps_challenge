import React , { Component } from "react";

export class App extends Component {
  state = {
    player1: "",
    player2: "",
    currentPlayer: "",
    player1Points: 0,
    player2Points: 0,
  };


  render() {

     return (
       <div>
         <h1>Rock Papper Scissors</h1>
         <button data-cy="Player 1">Player 1</button>
         <button data-cy="Player 2">Player 2</button>
         <button data-cy="Start">Start</button>
       </div>
     );
  }
}

export default App;
