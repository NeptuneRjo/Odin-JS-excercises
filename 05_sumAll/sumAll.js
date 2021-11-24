const sumAll = function(value1, value2) {
    sumOfValues = 0;

    if (value1 > value2) {
        for (i = value1; i >= value2; i--) {
            sumOfValues += i;
        }
    } else if ((typeof(arguements) != "number") || (arguements < 0)) {
        return sumOfValues = "ERROR"

    } else {
        for (i = value1; i <= value2; i++) {
            sumOfValues += i;
        }
    }

    return sumOfValues
};

console.log(sumAll(123, 1))

// Do not edit below this line
module.exports = sumAll;
