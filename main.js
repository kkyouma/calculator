let num1 = null
let num2 = null
let operator = null
let displayValue = '0'
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
  } else {
    displayValue += number
  }
}

function inputOperator(op) {
  if (num2 ===  null) {
    num1 = displayValue
    displayValue = 0
    operator = op
  } else if (num2 !== null) {
    num1 = operate(num1, operate, num2)
    operator = op
    displayValue = num1
  }
}

function inputEquals() {
  num2 = displayValue
  result = operate(num1, operator, num2)
  displayValue = result
}

function clearDisplay() {
  displayValue = '0'
  operator = null
  result = null
  num1 = null
  num2 = null
}


