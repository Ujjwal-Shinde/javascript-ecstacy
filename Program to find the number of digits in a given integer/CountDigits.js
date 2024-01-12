function countDigits(number) {
    // Convert the number to a string
    let numString = Math.abs(number).toString();

    // Initialize a counter for digits
    let digitCount = 0;

    // Iterate through each character in the string
    while (numString[digitCount] !== undefined) {
        digitCount++;
    }

    // Print the number of digits
    console.log(`Number of digits in ${number}: ${digitCount}`);
}

// Example usage:
let userInput = prompt("Enter an integer: ");
let inputNumber = parseInt(userInput);

if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid integer.");
} else {
    countDigits(inputNumber);
}

