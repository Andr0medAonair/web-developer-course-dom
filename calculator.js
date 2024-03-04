function calculator (a, b, operator) {
  return operator(a, b)
}

function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

function module (a, b) {
  return a % b
}

const result = calculator(9, 4, add)
console.log(result)