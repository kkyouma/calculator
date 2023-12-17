let num1 = ''
let num2 = ''
let operator = ''
let displayValue = ''
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

function pressButton () {
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (buttons[i].classList.contains('number')) {
        
      } else if (buttons[i].classList.contains('equal')){
        inputEquals()
      }
    })
  }
}

pressButton()

function inputOperand(displayValue) {
}

function inputEquals(displayValue) {
  display.innerText
  result = operate(num1, operator, num2)
  displayValue = result
}


