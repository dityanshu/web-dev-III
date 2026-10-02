const crypto = require("crypto");

// Function to generate a random dice value from 1 to 6
function rollDice() {
    return crypto.randomInt(1, 7);
}

// Simulate multiple dice rolls
for (let i = 1; i <= 5; i++) {
    const diceValue = rollDice();
    console.log("Dice Rolled: " + diceValue);
}
