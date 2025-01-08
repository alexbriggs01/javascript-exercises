const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
    let reversedString = string.split('').reverse().join('');
    return (reversedString === string);
};

// Do not edit below this line
module.exports = palindromes;
