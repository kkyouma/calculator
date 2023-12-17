let num1 = ''
let num2 = ''
let operator = ''
let displayValue = '0'
let result = ''

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
        updateDisplay();
      } else if (button.classList.contains('equal')){
        inputEquals();
      } else if (button.classList.contains('clear')) {
        clearDisplay();
        updateDisplay()
      }
    })
  });
}

pressButton()

function inputNumber(number) {
  if (displayValue === 0 || displayValue === '0'){
    displayValue = number
  } else {
    displayValue += number
  }
}

function clearDisplay() {
  displayValue = '0'
  operator = ''
  result = ''
}

function inputOperator(operator) {
  num1 = displayValue
}

function inputEquals() {
  result = operate(num1, operator, num2)
  displayValue = result
}


