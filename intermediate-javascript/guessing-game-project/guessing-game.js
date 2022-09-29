const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const askRange = () => {
  rl.question("Enter a min number: ", answer => { // Ask the user for min number
    const min = Number(answer);
    maxNumber(min); // Pass the input 'min' to maxNumber
  });
}

function maxNumber(num) {
  rl.question("Enter a max number: ", answer => { // Ask the user for max number
    const max = Number(answer);
    randomNumber(num, max); // Pass the argument 'num' and the input 'max'
  });
}

// Outputs a random integer between two values
const randomInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function randomNumber(n1, n2) {
  const secretNumber = randomInRange(n1, n2)
  console.log("I'm thinking of a number between " + n1 + " and " + n2 + "..."); 
  askGuess(secretNumber);
}



const askGuess = function(secretNumber) {
  rl.question("Enter a guess: ", (answer) => checkGuess(answer, secretNumber));
}

const checkGuess = (number, secretNumber) => {
  if (number > secretNumber) {
    console.log("Too high");
    askGuess(secretNumber);
  } else if (number < secretNumber) {
    console.log("Too low");
    askGuess(secretNumber);
  } else {
    console.log("You win!");
    rl.close();
  }
}

askRange();