const repeatString = function(string, repeatNum) {
    let newString = string;

    for (i = 1; i <= repeatNum - 1; i++) {
        newString += string;
    }

    return newString;
};



// Do not edit below this line
module.exports = repeatString;
