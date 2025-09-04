let firstNum = 0; //第一個數字
let secondNum = 0; //第二個數字
let symbol = ""; //加減乘除

function operate(firstNum, secondNum, symbol){
    if (symbol === "+"){
        return firstNum + secondNum;
    }
    if (symbol === "-"){
        return firstNum - secondNum;
    }
    if (symbol === "*"){
        return firstNum * secondNum;
    }
    if (symbol === "/"){
        return firstNum / secondNum;
    }
}

const screen =  document.getElementById("screen")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
//const add = document.getElementById("add")
//const multiply = document.getElementById("multiply")
//const divide = document.getElementById("divide")
//const equal = document.getElementById("equal")
//const clear = document.getElementById("clear")




one.addEventListener("click", function(){
    screen.textContent += "1"
})

two.addEventListener("click", () => screen.textContent += "2")
three.addEventListener("click", () => screen.textContent += "3")

