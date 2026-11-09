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
    let pos = operatorPosition(arr)

    if(pos > -1 && arr.length>pos+1){
        let n1 = Number(operation.slice(0,pos).join(""))
        let n2 = Number(operation.slice(pos+1,operation.length).join(""))
        let op = operation.slice(pos, pos+1).toString()

        let result = 0
        switch(op){
            case "+":
                result = add(n1,n2)
                break
            case "x":
                result = multiply(n1,n2)
                break
            case "-":
                result = subtract(n1,n2)
                break
            case "÷":
                result = divide(n1,n2)
                break 
        }
        if(result == Infinity){
            arr = ["0"]
            return ("Nice try!")
        } else{
            result = result.toString().split("")
            arr = result
            return arr.join("")
        }
    } else {
        return arr.join("")
    }
}

function numberDisplay(input){
    let operPos = operatorPosition(arr)

    if(numbers.includes(input)){
        if(arr.length == 1 && arr[0] == "0"){
            arr.pop()
            arr.push(input)
        }else{
            arr.push(input)
        }
    }

    if(operators.includes(input)){
        if(operPos > -1){
            if(arr.length > operPos+1){
                operate(arr)
            } else{
                arr.pop()
            }
        }

        if(operPos == -1 && arr.includes(".")){
            let dotPos = arr.indexOf(".")
            if(arr.includes("0", dotPos)){
                let lastNum = (numbers.map((item) => arr.lastIndexOf(item)))
                lastNum = lastNum.reduce((highest, current) => current > highest ? highest = current : highest,0 )
                arr = (arr.slice(0,lastNum+1))
            }
        }
        arr.push(input)
    }

    if(others.includes(input)){
        if(input == "."){
            if(operPos == -1){
                if(arr.includes(".") == false){
                    arr.push(input)
                }
            } else if(arr.includes(".", operPos) == false){
                    arr.push(input)
            }
        }

        if(input == "0"){
            if(operPos == -1){
                if(arr[0] != "0" || arr.includes(".")){
                    arr.push(input)
                }
            } else if(arr[operPos+1] != "0" || arr.includes(".")){
                    arr.push(input)
            }
        }
    }
    display.innerText = arr.join("")
}

function eraser(){
    arr.pop()
    if(arr.length>0){
        display.innerHTML = arr.join("")
    } else {
        arr = ["0"]
        display.innerHTML = arr
    }
}

function deleter(){
    arr = ["0"]
    display.innerHTML = arr
}

function operatorPosition(checker){
    return checker.findIndex(item => item == "x" || item == "+" || item == "÷" || item == "-")
}

function keyboardCompatibility(key){
    if(numbers.includes(key) || operators.includes(key) || others.includes(key)){
        if(key == "/"){
            numberDisplay("÷")
        } else{
            numberDisplay(key)
        }
    } else if(key == "Backspace"){
        eraser()
    } else if(key == "Enter"){
        display.innerText = operate(arr)
    }
}

let arr = ["0"]

const numbers = ["1","2","3","4","5","6","7","8","9"]
const operators = ["+","-","x","÷"]
const others = [".","0"]

let display = document.querySelector("#result")

let numberArr = document.querySelectorAll(".number")
numberArr = Array.from(numberArr)
for(let i = 0; i<numberArr.length;i++){
    numberArr[i].addEventListener("click", (e) => numberDisplay(e.target.innerText))
}

let operatorsArr = document.querySelectorAll(".operaButton")
operatorsArr = Array.from(operatorsArr)
for(let i = 0; i<operatorsArr.length;i++){
    operatorsArr[i].addEventListener("click", (e)=> numberDisplay(e.target.innerText))
}

const body = document.querySelector('body')
body.addEventListener('keydown', (e) =>{
    keyboardCompatibility(e.key)
})

let equal = document.getElementById("equal")
equal.addEventListener("click", () => display.innerText = operate(arr))

let eraseButton = document.getElementById("erase")
eraseButton.addEventListener("click", () => eraser())

let deleteButton = document.getElementById("delete")
deleteButton.addEventListener("click", () => deleter())