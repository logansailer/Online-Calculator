//listens for button presses and sends it to appropriate function
function clickButton () {
    buttons.forEach((button) =>
        button.addEventListener("click", function() {
            if (this.id == 1 || this.id == 2 || this.id == 3 || this.id == 4 || this.id ==5 ||
                this.id ==6 || this.id == 7 || this.id == 8 || this.id == 9 )
            displayArr.push(this.id);
            displayInt = parseInt(displayArr.join(""));
            updateDisplay()
            operate()
        }));
    };

//displays the current integer being typed in
function updateDisplay() {
    string = displayArr.join("");
    display.innerHTML = currentDisplay.textContent = string;
}

function operate() {
    if (plus.addEventListener("click", add)) {
    } else if (minus.addEventListener("click", subtract)) {
    } else if (multiplier.addEventListener("click", multiply)) {
    } else if (divider.addEventListener("click", divide)) {
    } else if (clear.addEventListener("click", erase)) {
    } else if (eql.addEventListener("click", equals)) {}
}

function add() {
    previousInt += displayInt;
    updateDisplay();
    displayArr = []
    plusEquals()
}

function subtract() {
}

function multiply() {
}

function divide() {
}

function plusEquals() {
    console.log(previousArr)
}

function erase() {
    displayInt = 0;
    previousInt = 0;
    answer = 0;
    displayArr = [];
    updateDisplay(displayInt);
}


const display = document.querySelector(".display");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplier = document.querySelector("#multiplier");
const divider = document.querySelector("#divider");
const eql = document.querySelector("#equals");
const clear = document.querySelector("#c");
const buttons = document.querySelectorAll("button");

let currentDisplay = document.createElement("p");
let displayArr = [];
let displayInt = 0;
let previousArr = 0;
let previousInt = 0;
let answer = 0;
clickButton();