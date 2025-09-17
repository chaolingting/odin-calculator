let firstNum = 0; 
let secondNum = 0;
let symbol = "";


function operate(firstNum, secondNum, symbol){

    if(symbol === "+"){
        return firstNum + secondNum;
    }

    if(symbol === "-"){
        return firstNum - secondNum;
    }

    if(symbol === "*"){
        return firstNum * secondNum;
    }

    if(symbol === "/"){
        return firstNum / secondNum;
    }  


}


