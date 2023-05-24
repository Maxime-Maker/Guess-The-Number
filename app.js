function playGame() {
  const number = Math.floor(Math.random() * 200) + 1;
  let userInput = '';
  let counter = 0;

  do {
    userInput = prompt(`Veuillez saisir une valeur entre 1 et 200`);

    if (userInput === null) {
      break;
    }

    if (isNaN(userInput)) {
      continue;
    }

    userInput = Number(userInput);
    counter++;

    if (userInput > number) {
      console.log("C'est trop haut");
    } else if (userInput < number) {
      console.log("C'est trop bas");
    } else {
      console.log("C'est gagné !");
    }

    console.log(`Nombre d'essais : ${counter}`);
  } while (userInput !== number);
}

playGame();
