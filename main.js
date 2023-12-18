let num1 = null
let num2 = null
let operator = null
let displayValue = 0
let result = null

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2 
const divide = (num1, num2) => num1 / num2

function operate (num1, operator, num2) {
  if (operator === 'add') {
    return add(num1, num2)
  } else if (operator === 'substract') {
    return subtract(num1, num2)
  } else if (operator === 'multiply') {
    return multiply(num1, num2)
  } else if (operator === 'divide') {
    if (num2 === 0) {
      return 'Invalid operation'
    } else {
      return divide(num1, num2)
    }
  } else {
    return 'Invalid operation'
  }
}

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')
const operators = document.querySelectorAll('.operator')

function updateDisplay() {
  display.innerText = displayValue
}

updateDisplay()

function pressButton() {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('number')) {
        inputNumber(button.value);
        updateDisplay();
      } else if (button.classList.contains('operator')){
        inputOperator(button.value);
        updateDisplay()
      } else if (button.classList.contains('equal')){
        inputEquals();
        updateDisplay()
      } else if (button.classList.contains('clear')) {
        clearDisplay();
        updateDisplay();
      }
    })
  })
}

pressButton()

function inputNumber(number) {
  if (displayValue === 0 || displayValue === '0'){
    displayValue = number
    console.log("1.1:", displayValue, num1, num2)
  } else if (result === null){
    displayValue += number
    console.log("1.2:", displayValue, num1, num2)
  } else if (result !== null) {
    displayValue = number
    console.log("1.3:", displayValue, num1, num2)
  }
}

function inputOperator(op) {
  if (num1 === null) {
    num1 = displayValue
    displayValue = '0'
    operator = op
    console.log("2:", displayValue, num1, num2)
  } else if (displayValue !== '0' && num1 !== null) {
    console.log("3:", displayValue, num1, num2)
    inputEquals()
  }
}

function inputEquals() {
  num2 = displayValue
  result = operate(Number(num1), operator, Number(num2))
  displayValue = result
  num1 = result
  num2 = null
  console.log("4:", displayValue, num1, num2)
}

function clearDisplay() {
  displayValue = '0'
  operator = null
  result = null
  num1 = null
  num2 = null
  console.log("clear:", displayValue, num1, num2)

}


