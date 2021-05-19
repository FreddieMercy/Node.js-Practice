const { rawListeners } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? (answer is ${answer}) \n`, (userInput) => {
    console.log("User input: " + userInput.trim());
    if (userInput.trim() == answer) { // it is string compare to integer, thus use == not ===
        console.log("Correct!!!")
        rl.close();
    }
    else {
        rl.setPrompt(`Incorrect! Please try again: What is ${num1} + ${num2}?`);
        rl.prompt();
        rl.on("line", (userInput) => {
            if (userInput.trim() == answer) {
                console.log("Correct!!!")
                rl.close();
            }
            else {
                rl.setPrompt(`Incorrect! Please try again: What is ${num1} + ${num2}?`);
                rl.prompt();
            }
        });
    }
});

rl.on('close', () => {
    console.log("Closed...");
})