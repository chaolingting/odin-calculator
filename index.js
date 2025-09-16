const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")

let add = false;
let subtract = false;
let multiply = false;
let divide = false;

addBtn.addEventListener("click", () => {add = true; console.log(operator(firstValue, secondValue)); add = false})
subtractBtn.addEventListener("click", () => {subtract = true; console.log(operator(firstValue, secondValue)); subtract = false})
multiplyBtn.addEventListener("click", () => {multiply = true; console.log(operator(firstValue, secondValue)); multiply = false})
divideBtn.addEventListener("click", () => {divide = true; console.log(operator(firstValue, secondValue)); divide = false})


let firstValue = 90
let secondValue = 50


const operator = function operator(firstValue, secondValue){
    if (add){
        return firstValue += secondValue;
    } else if (subtract){
        return firstValue -= secondValue;
    } else if (multiply){
        return firstValue *= secondValue;
    } else if (divide){
        return firstValue /= secondValue;   
    }
}




