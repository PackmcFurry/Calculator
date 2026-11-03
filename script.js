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
    let pos = operation.findIndex(item => item == "x" || item == "+" || item == "÷" || item == "-")

    let n1 = Number(operation.slice(0,pos).join(""))
    let n2 = Number(operation.slice(pos+1,operation.length).join(""))
    let op = operation.slice(pos, pos+1).toString()

    console.log(`n1 ${n1}`)
    console.log(`n2 ${n2}`)
    console.log(op)
    let teste = 0
    switch(op){
        case "+":
            teste = add(n1,n2)
            break
        case "x":
            teste = multiply(n1,n2)
            break
        case "-":
            teste = subtract(n1,n2)
            break
        case "÷":
            teste = divide(n1,n2)
            break 
    }
    teste = teste.toString().split("")
    arr = teste

    display.innerHTML = arr.join("")
}

function numberDisplay(input){
    arr.push(input.innerText)
    console.log(input.innerText)
    console.log(arr)

    display.innerText = arr.join("")
}

function eraser(){
    arr.pop()
    display.innerHTML = arr.join("")
}

function deleter(){
    arr = []
    display.innerHTML = 0
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

let eraseButton = document.getElementById("erase")
eraseButton.addEventListener("click", () => eraser())

let deleteButton = document.getElementById("delete")
deleteButton.addEventListener("click", () => deleter())