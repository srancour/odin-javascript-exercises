const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
	return numbers.reduce((total, current) => total + current, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => total * current, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let result = 1;
  if (number === 0 || number === 1) {

  } else if (number < 0) {
    return "Factorial is not defined for negative numbers";
  } else {
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  }
  return result;
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
