/*
projeto calculadora
ela possuira por enquanto 4 operações básicas matemáticas
isso inclui as funções: 
    -ADIÇÃO
    -SUBTRAÇÃO
    -MULTIPLICAÇÃO
    -DIVISÃO

*/
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operation-button");
const enterButton = document.querySelector(".enter-button");
const result = document.querySelector(".result");




function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};



function operate(operator, number1, number2) {
   
    switch(operator) {
        case "+": 
           return add(number1, number2);
        break;
        case "-": 
           return subtract(number1, number2);
        break;
        case "*": 
            return multiply(number1, number2);
        break;
        case "/": 
           return divide(number1, number2);
        break;
    }
}

function getOperator(word) {
    let isOperator;
    for(let i=0; i < word.length; i++) {
        if( word.charAt(i) == "+" || word.charAt(i) == "-" || word.charAt(i) == "*" || word.charAt(i) == "/") {
            isOperator = word.charAt(i);
        }
    }
    
    return isOperator;
}


function enterOperation() {
    if(expression == "") console.log("is empty");
    let operator = getOperator(expression);
    let firstNumber = Number(expression.split(operator)[0]);
    let secondNumber = Number(expression.split(operator)[1]);

    result.textContent = operate(operator, firstNumber, secondNumber);
}

let expression = "";
result.innerHTML = "";
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let number = button.textContent;
        
        expression += number;
        result.textContent = expression;
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let operator = button.textContent;

        expression += operator;
        result.textContent = expression;
    })
})

enterButton.addEventListener("click", () => {
    enterOperation();
    expression = "";

})
/* const buttonsArray = [...buttons];
const numberButtons = buttonsArray.filter((button) => Number(button.value)); */


//let buttonNumbers = buttons.filter();
//console.log(numberButtons);

