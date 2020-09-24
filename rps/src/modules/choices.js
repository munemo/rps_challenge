const generateChoices = () => {
  const choices = ["Rock", "Papper", "Scissors"];
  var randomChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`You chose ${randomChoice}`);

  return randomChoice;
};

export { generateChoices };
