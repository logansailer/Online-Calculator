// if button pressed and class != operator
// get value of button pressed, add it to end of string
// display = string until operator is pressed
// get value of display, set it to variable1
// when operator button is pressed, call a function for that variable
// function takes variable1 evaluates it, performs function
// waits for equals to evaluate expression
// sets it as new display variable

//for loop, if opperand in array, perform that function, pop to get last off (opperand) and then get new array
function clickButton () {
    for (let i = 0; i < number.length; i++)  {
        number[i].addEventListener("click", function() {
            numArr.push(this.id);
            console.log(numArr)
        })
        if (plus.addEventListener("click", add)) {
        } else if (minus.addEventListener("click", subtract)) {
        } else if (multiplier.addEventListener("click", multiply)) {
        } else if (divider.addEventListener("click", divide)) {
        } else if (clear.addEventListener("click", eraser)) {
        } else if (eql.addEventListener("click", equals)) {}
    }
}

function updateDisplay() {
    
}

function add() {
    console.log("addtest")
}

function subtract() {
    console.log("subratctest")
}

function multiply() {
    
}

function divide() {
    
}

function equals() {

}

function eraser(){
    numArr = [];
}


const display = document.querySelector(".display");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiplier = document.querySelector("#multiplier");
const divider = document.querySelector("#divider");
const eql = document.querySelector("#equals");
const clear = document.querySelector("#c");
const number = document.querySelectorAll(".number");

let numArr = [];
clickButton();