// Function to validate input as a positive integer
function isValidNumber(value) {
    return /^[0-9]+$/.test(value); // Only digits, no negatives, no decimals
}

// Function to perform the calculation
function calculateResult() {
    let leftOperand = document.getElementById("leftOperand").value;
    let rightOperand = document.getElementById("rightOperand").value;
    let operator = document.getElementById("operator").value;

    // Validate that both inputs are positive integers
    if (!isValidNumber(leftOperand) || !isValidNumber(rightOperand)) {
        alert("Error :(");
        return;
    }

    // Convert string inputs to numbers
    let num1 = parseInt(leftOperand, 10);
    let num2 = parseInt(rightOperand, 10);
    let result;

    // Handle division/modulo by zero case
    if ((operator === "/" || operator === "%") && num2 === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    // Perform the calculation
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            alert("Invalid operation");
            return;
    }

    // Show the result in an alert and log it
    alert(result);
    console.log(result);
}

// Attach event listener to the button
document.getElementById("calculate").addEventListener("click", calculateResult);

// Alert message every 30 seconds
setInterval(() => {
    alert("Please, use me...");
}, 30000);
