const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const numBtns = document.querySelectorAll(".num");

const numbers = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9 
}


numBtns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        const num = btn.getAttribute("data-value")
        console.log(numbers[num])
    })
} )


let add = false;
let subtract = false;
let multiply = false;
let divide = false;

addBtn.addEventListener("click", () => {add = true; console.log(operator(firstValue, secondValue)); add = false})
subtractBtn.addEventListener("click", () => {subtract = true; console.log(operator(firstValue, secondValue)); subtract = false})
multiplyBtn.addEventListener("click", () => {multiply = true; console.log(operator(firstValue, secondValue)); multiply = false})
divideBtn.addEventListener("click", () => {divide = true; console.log(operator(firstValue, secondValue)); divide = false})


let firstValue = function(){
    return numbers.value

}


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




