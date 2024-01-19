//listens for button presses and sends it to appropriate functio
function clickButton () {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function() {
            displayArr.push(numbers[i].id);
            currentInt = parseInt(displayArr.join(""));
            updateDisplay(currentInt)
            operate()
        });
    };
}

//displays the current integer being typed in
function updateDisplay(int) {
    display.innerHTML = currentDisplay.textContent = int;
}

//when an operator key is pressed, passes it to the proper function
function operate() {
    plus.addEventListener("click", add)
    minus.addEventListener("click", subtract)
    multiplier.addEventListener("click", multiply)
    divider.addEventListener("click", divide)
    eql.addEventListener("click", equals)
    clear.addEventListener("click", erase)
}

//passes the function to be added
function add() {
    operator = "+"
    evaluate(previousInt, currentInt)
}

//passes the function to be subtracted
function subtract() {
    operator = "-"
    evaluate(previousInt, currentInt)
}

//passes the function to be multiplied
function multiply() {
    previousInt = 1;
    operator = "x"
    evaluate(previousInt, currentInt)
}

//passes the function to be divided
function divide() {
    operator = "÷"
    evaluate(previousInt, currentInt)
}

function equals() {
    evaluate();
}

//using the previous calculated number (0 if start) and the current display.
//preforms proper operation on the variable
function evaluate() {
    if (operator == "+") {
        answer = previousInt + currentInt
    }
    if (operator == "-")  {
        answer = previousInt - currentInt
    }
    if (operator == "x")  {
        answer = previousInt * currentInt
    } 
    if (operator == "÷")  {
        answer = previousInt / currentInt
    }
        updateDisplay(answer);
        clearVariables()
        previousInt = answer;
}

function clearVariables() {
    displayArr = []
}

function erase() {
    currentInt = 0;
    previousInt = 0;
    answer = 0;
    displayArr = [];
    updateDisplay(currentInt);
}


const display = document.querySelector(".display");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplier = document.querySelector("#multiplier");
const divider = document.querySelector("#divider");
const eql = document.querySelector("#equals");
const clear = document.querySelector("#c");
const numbers = document.querySelectorAll(".number");

let currentDisplay = document.createElement("p");
let displayArr = [];
let currentInt = 0;
let previousInt = 0;
let answer = 0;
let operator = "";
clickButton();