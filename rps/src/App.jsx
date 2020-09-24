import React, { Component } from "react";
import { generateChoices } from "./modules/choices";

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
        <button data-cy="Player 1" onClick={generateChoices()}>
          Player 1
        </button>
        <p id="player1"></p>
        <button data-cy="Player 2">Player 2</button>
        <button data-cy="Start">Start</button>
        <section>
          <h1 className="rules">Game Rules</h1>
          <div>
            <li>
              <ul>Rock is greater than Scissors</ul>
            </li>
            <li>
              <ul>Rock is greater than Papper</ul>
            </li>
            <li>
              <ul>Scissors is greater than Papper</ul>
            </li>
            <li>
              <ul>
                The first player to get 3 points wins. Lets the games begin!
              </ul>
            </li>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
