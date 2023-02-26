function rollDie(sides) {
  let dieArray = createDie(sides);
  let result = shuffle(dieArray);
  return result[0];
}

function createDie(sides) {
  if (sides % 2 !== 0) {
    throw new Error("Please enter an even number of sides.");
  }
  let die = [];
  for (let i = 1; i <= sides; i++) {
    die.push(i);
  }
  return die;
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export { rollDie };
