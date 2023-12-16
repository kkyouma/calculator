let num1 = ''
let num2 = ''
let operator = ''

const add = (num1, num2) => num1 + num2
const substract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2 
const divide = (num1, num2) => num1 / num2


function operate (num1, operator, num2) {
  if (operator === '+') {
    return add(num1, num2)
  } else if (operator === '-') {
    return substract(num1, num2)
  } else if (operator === '*') {
    return multiply(num1, num2)
  } else if (operator === '/') {
    return divide(num1, num2)
  } else {
    return 'Invalid operation'
  }
}

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')
const operators = document.querySelectorAll('.operator')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonValue = button.textContent
    num1 += buttonValue
    display.textContent = num1

    if (buttonValue === '=') {
      display.textContent = operate(num1, operator, num2)
      if (display.textContent === 'Invalid operation') {
        num1 = '0'
      }
    }

    if (buttonValue === 'C') {
      num1 = '0'
      display.textContent = num1
    }
  })
})

