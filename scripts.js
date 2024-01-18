// get value of button pressed, add it to end of string
// display = string until operator is pressed
// get value of display, set it to variable1
// when operator button is pressed, call a function for that variable
// function takes variable1 evaluates it, performs function
// waits for equals to evaluate expression
// sets it as new display variable

//listens for button presses and sends it to appropriate function
function clickButton () {
    for (let i = 0; i < number.length; i++)  {
        number[i].addEventListener("click", function() {
            displayArr.push(this.id);
            updateDisplay()
        })
        if (plus.addEventListener("click", add)) {
        } else if (minus.addEventListener("click", subtract)) {
        } else if (multiplier.addEventListener("click", multiply)) {
        } else if (divider.addEventListener("click", divide)) {
        } else if (clear.addEventListener("click", eraser)) {
        } else if (eql.addEventListener("click", equals)) {}
    }
}

//converts 
function updateDisplay() {
    let currentDisplay = document.createElement("p");
    let displayInt = parseInt(displayArr.join(""));
    display.innerHTML = currentDisplay.textContent = displayInt;
}

function add() {
    let previousInput = 
    console.log("addtest")
}

function subtract() {
    console.log("subractTest")
}

function multiply() {
    console.log("multiplyTest")
}

function divide() {
    console.log("divideTest")
}

function equals() {
    console.log("equalsTests")
}

function eraser(){
    displayArr = [0];
    updateDisplay()
}


const display = document.querySelector(".display");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplier = document.querySelector("#multiplier");
const divider = document.querySelector("#divider");
const eql = document.querySelector("#equals");
const clear = document.querySelector("#c");
const number = document.querySelectorAll(".number");

let displayArr = [];
clickButton();