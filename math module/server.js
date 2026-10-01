const mathModule = (() => {

    function isEven(number) {
        return number % 2 === 0;
    }

    // Export the function
    return {
        isEven: isEven
    };
})();

// Import/use the module
const { isEven } = mathModule;

// Examples
console.log(isEven(10)); // true
console.log(isEven(7));  // false
console.log(isEven(20)); // true
console.log(isEven(15)); // false

// Demonstrating reusability
let numbers = [2, 5, 8, 11, 14];

numbers.forEach((number) => {
    if (isEven(number)) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }
});
