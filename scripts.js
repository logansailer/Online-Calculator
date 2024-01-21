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
    evaluate()
    currentInt = 0;
    operator = "+"
    evaluate()
}

//passes the function to be subtracted
function subtract() {
    evaluate()
    currentInt = 0;
    operator = "-"
    evaluate()
}

//passes the function to be multiplied
function multiply() {
    evaluate()
    currentInt = answer
    operator = "x"
    evaluate()
}

//passes the function to be divided
function divide() {
    evaluate()
    currentInt = answer
    operator = "÷"
    evaluate()
}

function equals() {
    evaluate()
}

//using the previous calculated number (0 if start) and the current display.
//preforms proper operation on the variable
function evaluate() {
    answer = currentInt;
    if (operator == "+") {
        answer = currentInt + previousInt;
    }
    if (operator == "-")  {
        answer = previousInt - currentInt;
    }
    if (operator == "x")  {
        if (counter == 0) {
            counter++;
        } else if (counter > 0) {
            answer = previousInt * currentInt
            counter = 0;
        }
    } 
    if (operator == "÷")  {
        if (counter == 0) {
            counter++;
        } else if (counter > 0) {
            answer = previousInt / currentInt
            counter = 0;
        }
    }
        updateDisplay(answer);
        previousInt = answer;
        clearVariables()
}

function clearVariables() {
    displayArr = []
}

function erase() {
    currentInt = 0;
    previousInt = 0;
    answer = 0;
    operator = ""
    counter = 0;
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
let counter = 0;
let operator = "";
clickButton();