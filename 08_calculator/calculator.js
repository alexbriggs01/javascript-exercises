const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum = add(sum, element);
    });
	return sum;
};

const multiply = function(arr) {
    let product = 1;
    arr.forEach((element) => {
        product = sum(Array(element).fill(product));
    });
    return product;
};

const power = function(num1, num2) {
    if (num2 === 0) return 1;
    else if (num2 < 0) return 1/multiply(Array(num2).fill(num1));
    else return multiply(Array(num2).fill(num1));
};

const factorial = function(num) {
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
