const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
    return arr.reduce( (total, current) => add(total, current), 0);
};

const multiply = function(arr) {
    return arr.reduce( (total, current) => sum(Array(current).fill(total)));
};

const power = function(num1, num2) {
    if (num2 === 0) return 1;
    else if (num2 < 0) return 1/multiply(Array(num2).fill(num1));
    else return multiply(Array(num2).fill(num1));
};

const factorial = function(num) {
    if (num === 0) return 1;
    let arr = [];
	for(i=num; i>0; i--){
        arr.push(i);
    }
    return multiply(arr);
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
