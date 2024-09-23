const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, number) => sum += number, 0)
};

const multiply = function(arr) {
  return arr.reduce((mult, number) => mult *= number, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	let result = 1
  for (let i = 1; a >= i; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
