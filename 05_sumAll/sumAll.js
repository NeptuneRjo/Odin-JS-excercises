const sumAll = function(value1, value2) {
    sumOfValues = 0;

    if (value2 > value1) {
        for (i = value2; i >= value1; i--) {
            sumOfValues += i;
        }
    } else if ((Number.isNaN(value1)) || (Number.isNaN(value2))) {
        return sumOfValues = "ERROR"

    } else {
        for (i = value1; i <= value2; i++) {
            sumOfValues += i;
        }
    }

    return sumOfValues
};

console.log(sumAll(12, 13))

// Do not edit below this line
module.exports = sumAll;
