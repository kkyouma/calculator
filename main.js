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
  if (operator === '+') {
    return add(num1, num2)
  } else if (operator === '-') {
    return subtract(num1, num2)
  } else if (operator === '*') {
    return multiply(num1, num2)
  } else if (operator === '/') {
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
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (buttons[i].classList.contains('number')) {
        inputNumber(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains('equal')){
        inputEquals();
      } else if (buttons[i].classList.contains('clear')) {
        clearDisplay();
        updateDisplay()
      }
    })
  }
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

function inputEquals() {
  result = operate(num1, operator, num2)

  unpdateDisplay(result)
}


