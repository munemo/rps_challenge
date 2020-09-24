const generateChoices = () => {
  const choices = ["Rock", "Papper", "Scissors"];
  var randomChoice = choices[Math.floor(Math.random() * choices.length)];

  alert(`You chose ${randomChoice}`);

  return randomChoice;
};

export { generateChoices };
