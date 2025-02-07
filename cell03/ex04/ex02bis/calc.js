
$(document).ready(function() {
    function isValidNumber(value) {
        return /^[0-9]+$/.test(value); 
    }

    function calculateResult() {
        let leftOperand = $('#leftOperand').val();
        let rightOperand = $('#rightOperand').val();
        let operator = $('#operator').val();

        if (!isValidNumber(leftOperand) || !isValidNumber(rightOperand)) {
            alert("Error :(");
            return;
        }

        let num1 = parseInt(leftOperand, 10);
        let num2 = parseInt(rightOperand, 10);
        let result;

        if ((operator === "/" || operator === "%") && num2 === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }

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

        alert(result);
        console.log(result);
    }

    $('#calculate').on('click', calculateResult);

    setInterval(() => {
        alert("Please, use me...");
    }, 30000);
});
