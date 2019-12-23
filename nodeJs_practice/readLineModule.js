/* ******************** Working with the readline module *********** */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let ans = num1 + num2;

rl.question(`what is ${num1} + ${num2} ? \n`, userInput => {
  if (userInput.trim() == ans) {
    rl.close();
  } else {
    rl.setPrompt(`your answer is incorrect, please try again ! \n`);
    rl.prompt();
    rl.on("line", userInput => {
      if (userInput.trim() == ans) {
        console.log("correct !!");
        rl.close();
      } else {
        rl.setPrompt(
          `your answer ${userInput} is incorrect, please try again !\n`
        ); //after setting the prompt we need to call the prompt() function
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("correct !!");
});
