let num1 = ''
let num2 = ''
let operator = ''

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
    return divide(num1, num2)
  } else {
    return 'Invalid operation'
  }
}

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')
const operators = document.querySelectorAll('.operator')

let operatorClicked = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonValue = button.textContent

    if (!operatorClicked) {
      num1 += buttonValue
      display.textContent = num1
    } else {
      num1 = num1.slice(0, -1)
      num2 += buttonValue
      display.textContent = num2
    }

    if (buttonValue === 'C') {
      num1 = ''
      num2 = ''
      operator = ''
      display.textContent = ''
    }

  })
})

operators.forEach(op => {
  op.addEventListener('click', () => {
    operator = op.textContent
    operatorClicked = true;
  })
})

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
  num1 = Number(num1)
  num2 = Number(num2)
  display.textContent = operate(num1, operator, num2)

  console.log(num1, num1 == Number(num1))
  console.log(num2, num2 == Number(num2))
})


