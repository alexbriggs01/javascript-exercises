const fibonacci = function(num) {
    num = +num;
    if(num < 0) return "OOPS";
    if(num === 0) return 0;
    const fibonacci = [0, 1];
    
    for(let i=2; i <=num; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci[num];
};

// Do not edit below this line
module.exports = fibonacci;
