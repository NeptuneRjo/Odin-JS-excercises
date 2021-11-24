const sumAll = function(value1, value2) {
    sumOfValues = 0;

    // if (value1 > value2) {
    //     for (i = value1; i >= value2; i--) {
    //         sumOfValues += i;
    //     }
    // } else if ((typeof(value1, value2) != "number")) {
    //     return sumOfValues = "ERROR"

    // } else if ((value1 < 0) || (value2 < 0)) {
    //     return sumOfValue = "ERROR"

    // } else {
    //     for (i = value1; i <= value2; i++) {
    //         sumOfValues += i;
    //     }
    // }


    if ((typeof(value1 != "number") || typeof(value2 != "number"))) {
        return sumOfValues = "ERROR"

    }  else if ((value1 < 0) || (value2 < 0)) {
        return sumOfValue = "ERROR"

    } else if (value1 > value2) {
        for (i = value1; i >= value2; i--) {
            sumOfValues += i;
        }
    } else {
        for (i = value1; i <= value2; i++) {
            sumOfValues += i;
        }
    }

    return sumOfValues
};

console.log(sumAll(-1, 2))

// Do not edit below this line
module.exports = sumAll;
