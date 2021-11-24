const sumAll = function(value1, value2) {
    sumOfValues = 0;

    for (i = value1; i <= value2; i++) {
        sumOfValues += i;
    }

    return sumOfValues
};

console.log(sumAll(12, 13))

// Do not edit below this line
module.exports = sumAll;
