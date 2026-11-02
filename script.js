function add(num1,num2){
    return (num1 + num2)
}

function multiply(num1,num2){
    return (num1 * num2)
}

function subtract(num1,num2){
    return (num1 - num2)
}

function divide(num1,num2){
    return (num1 / num2)
}

function operate(operation){
    let operatorChecker = "+x÷-"
    console.log("clicou")
    console.log(operation)
    /*
    let n1 = window.prompt("primeiro numero")
    let op = window.prompt("operador")
    let n2 = window.prompt("segundo numero")

    let result = 0
    switch(op.toString()){
        case "+":
            result = add(n1,n2)
            break
        case "*":
            result = multiply(n1,n2)
            break
        case "-":
            result = subtract(n1,n2)
            break
        case "/":
            result = divide(n1,n2)
            break 
    }
    console.log(result)
    */
}

function numberDisplay(input){
    arr.push(input.innerText)
    console.log(input.innerText)
    console.log(arr)

    display.innerText = arr.join("")
}

let arr = []
let display = document.querySelector("#result")

let numberArr = document.querySelectorAll(".number")
numberArr = Array.from(numberArr)
for(let i = 0; i<numberArr.length;i++){
    numberArr[i].addEventListener("click", (e) => numberDisplay(e.target))
}

let operatorsArr = document.querySelectorAll(".operaButton")
operatorsArr = Array.from(operatorsArr)
for(let i = 0; i<operatorsArr.length;i++){
    operatorsArr[i].addEventListener("click", (e)=> numberDisplay(e.target))
}

let equal = document.getElementById("equal")
equal.addEventListener("click", () => operate(arr))