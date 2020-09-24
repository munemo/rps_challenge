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
      </div>
    );
  }
}

export default App;
