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

    if (!operator) {
      num1 += buttonValue
      display.textContent = num1
    } else if (operator) {
      num2 += buttonValue
      display.textContent = num2
    }

    if (buttonValue === 'C') {
      num1 = ''
      num2 = ''
      operator = ''
      display.textContent = ''
    }

    if (buttonValue === '=') {
      let result = operate(num1, operator, num2)
      display.textContent = result
    }
  })
})

operators.forEach(op => {
  op.addEventListener('click', () => {
    operator = op.textContent
  })
})



