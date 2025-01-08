const sumAll = function(num1, num2) {
    if (!(typeof num1 === "number") || !(typeof num2 === "number")) return "ERROR";
    if ( (num1 < 0) || (num2 < 0)) return "ERROR";
    if ( (Math.floor(num1) != num1) || (Math.floor(num2) != num2)) return "ERROR";
    
    let sumAll = 0;
    if (num2>num1){
        for(let i=num1; i<=num2; i++) {
            sumAll += i;
        }
    }
    else {
        for(let i=num2; i<=num1; i++) {
            sumAll += i;
        }
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
