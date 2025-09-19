
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete")
//Numbers
const numBtns = document.querySelectorAll(".num");
//Screen
const screen = document.querySelector(".screen");


//Default screen
screen.textContent = "0"


let num1 = "";
let num2 = "";
let operation = null;
let resetCal = function() {   
    num1 = "";
    num2 = "";
    operation = null;
    screen.textContent = "0";
}

let shouldReset = false;




addBtn.addEventListener("click", () => {
    operation = "+";
    screen.textContent = num1 + " " + operation;
})

subtractBtn.addEventListener("click", () => {
    operation = "-";
    screen.textContent = num1 + " " + operation;
})


multiplyBtn.addEventListener("click", () => {
    operation = "*";
    screen.textContent = num1 + " " + operation;
})

divideBtn.addEventListener("click", () => {
    operation = "/";
    screen.textContent = num1 + " " + operation;
})

equalBtn.addEventListener("click", ()=>{
    if (num1 !== "" && num2 !== "" && operation !== null) {
        let result = operator(operation, Number(num1), Number(num2));
        result = parseFloat(result.toFixed(12));
        screen.textContent = result;
    
        num1 = result.toString();
        num2 = "";
        operation = null;
        shouldReset = true;
    }
})

clearBtn.addEventListener("click", resetCal)


deleteBtn.addEventListener("click", () => {
    if(operation === null){
        num1 = num1.slice(0, -1);
        screen.textContent = num1 || 0;
    }else if (num2 !== ""){
        num2 = num2.slice(0, -1);
        screen.textContent = num2;
    } else {
        operation = null;
        screen.textContent = num1 ; 
    }
    
    
})



numBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const value = btn.dataset.value;

        if(operation === null){
            if(shouldReset){
                num1 = "";
                shouldReset = false;
            }

            if(value === "." && num1.includes(".")) return;
            if(value ==="." && num1 ==="" ){ num1 = "0."; }
            else num1 += value;          

            screen.textContent = num1;
        } else{
            if(value === "." && num1.includes(".")) return;
            if(value ==="." && num2 ==="" ) num2 = "0.";
            else num2 += value;            
            screen.textContent = num1 + " " + operation + " " + num2;

        }
        
    })

})




const operator = function operator(operation, num1, num2){
    switch(operation){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default: 
            return 0;
    }


}

document.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key >= "0" && e.key <= "9" || e.key === "."){
        const btn = [...numBtns].find(b => b.dataset.value === e.key);
        if(btn){
            btn.click()
        }
    }
    if(["+","-","*","/"].includes(e.key)){
        switch(e.key){
            case "+": addBtn.click(); break;
            case "-": subtractBtn.click(); break;
            case "*": multiplyBtn.click(); break;
            case "/": divideBtn.click(); break;
        }
    }
    if (e.key === "=" || e.key ==="Enter"){
        equalBtn.click();
    }
    if(e.key === "Delete"){
        clearBtn.click()
    }
    if (e.key ==="Backspace"){
        deleteBtn.click();
    }
})