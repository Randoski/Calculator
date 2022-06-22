let firstNumber = prompt('Insert a number');
// confirm that firstNumber is a number
while (isNaN(firstNumber)) {
    firstNumber = prompt('Please insert a valid number');
}

whil


let operator = prompt('Add an operator (+, -, /, *)')
 // confirm that operator is a valid operator
 while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*') {
    operator = prompt('Operator is not valid, insert one of: (+, -, /, *)');
}


let secondNumber = prompt('Insert a number');
// confirm that secondNumber is a number
while (isNaN(secondNumber)) {
    secondNumber = prompt('Please insert a valid number');
}


let result = 0;

// Perform arithmetic operation with firstNumber, operator and secondNumber
function arithmetic(firstNumber, arithmetic, secondNumber) {
    switch (operator) {
        case '+':
            result = parseInt(firstNumber) + parseInt(secondNumber);
            break;
        case '-':
            result = parseInt(firstNumber) - parseInt(secondNumber);
            break;
        case '/':
            result = parseInt(firstNumber) / parseInt(secondNumber);
            break;
        case '*':
            result = parseInt(firstNumber) * parseInt(secondNumber);
            break;
    }
     alert(`${firstNumber} ${arithmetic} ${secondNumber} = ${result}`);
}
arithmetic(firstNumber, operator, secondNumber); 