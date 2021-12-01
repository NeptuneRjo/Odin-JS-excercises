const add = function(var1, var2) {
  return Number(var1 + var2)
};

const subtract = function(var1, var2) {
	return Number(var1 - var2)
};

const sum = function(array) {
  if (array.length == 0) {
    return 0;
  }
  return array.reduce((a, b) => a+b)
};

const multiply = function(array) {
  return array.reduce((a, b) => a*b)
};

const power = function(var1, var2) {
	return Number(var1 ** var2)
};

const factorial = function(num) {
	if (num < 0) {
    return -1;

  } else if (num == 0) {
    return 1;

  } else {
    return (num * factorial(num-1));
  }
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
