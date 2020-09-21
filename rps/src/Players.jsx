import React from "react";
import rock from "./Images/rock.png";
import scissors from "./Images/scissors.png";
import papper from "./Images/papper.png"; 

class Player extends React.Component {

  state = {
    player1: true,
    player2: true,
  };


  render() {


    return (
      <div>
        <header id="header" className="header">
          <h1>Rock Papper Sciccors</h1>
        </header>

        <button
          id="player1"
          className="player"
          onClick={() => this.setState({ player1: false })}
        >
          Player 1
        </button>
        <button
          id="player2"
          className="player"
          onClick={() => this.setState({ player1: false })}
        >
          Player 2
        </button>
        <div id="rock" className="choice">
          <img src={rock} alt="" />
        </div>
        <div id="papper" className="choice">
          <img src={papper} alt="" />
        </div>
        <div id="scissors" className="choice">
          <img src={scissors} alt="" />
        </div>

        <button>Start</button>
      </div>
    );
  }
}

export default Player;
