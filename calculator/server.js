// calculator.js

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide two valid numbers.");
} else {
    switch (operation) {
        case "add":
            console.log(num1 + num2);
            break;

        case "subtract":
            console.log(num1 - num2);
            break;

        case "multiply":
            console.log(num1 * num2);
            break;

        case "divide":
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log(num1 / num2);
            }
            break;

        default:
            console.log("Invalid operation. Use add, subtract, multiply, or divide.");
    }
}
