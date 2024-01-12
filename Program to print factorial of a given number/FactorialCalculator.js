// Function to calculate the factorial using a loop
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Taking input from the user
let userInput = parseInt(prompt("Enter a non-negative integer:"));

// Checking if the number is non-negative
if (userInput < 0 || isNaN(userInput)) {
    console.log("Please enter a valid non-negative integer.");
} else {
    // Calculating and printing the factorial
    let result = factorial(userInput);
    console.log(`Factorial of ${userInput} is: ${result}`);
}

