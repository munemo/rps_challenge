import React from "react";

class GenerateWords extends React.Component {


  render() {
  const choices = ["Rock", "Papper", "Scissors"];
  var randomItem = choices[Math.floor(Math.random() * choices.length)];

    return <div>{randomItem}</div>;
  }
}

export default GenerateWords;
