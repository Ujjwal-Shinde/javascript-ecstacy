function reverseNumber(number) {
    let reversedNumber = 0;

    while (number !== 0) {
        let digit = number % 10;
        reversedNumber = reversedNumber * 10 + digit;
        number = Math.floor(number / 10); 
        // Math.floor() : It essentially rounds down a floating-point number to the nearest integer. If the number is already an integer, it remains unchanged.
    }
    return reversedNumber;
}

// Example usage:
let userInput = prompt("Enter an integer: ");
let inputNumber = parseInt(userInput);

// isNaN : is not a number
if (isNaN(inputNumber)) {
    console.log("Invalid input. Please enter a valid integer.");
} else {
    let result = reverseNumber(inputNumber);
    console.log(`Reverse Number : ${result}`);
}

