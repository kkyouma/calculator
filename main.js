let num1 = document.addEventListener('click', );
let operator = document.addEventListener('click', );
let num2 = document.addEventListener('click', );


const add = () => num1 + num2
const substract = () => num1 - num2
const multiply = () => num1 * num2 
const divide = () => num1 / num2



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
    return 'Invalid operator'
  }
}