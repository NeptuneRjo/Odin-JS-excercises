const repeatString = function(string, repeatNum) {
    let newString = string;
    
    if (repeatNum < 0) {
        newString = "ERROR";
    } else if (repeatNum == 0) {
        newString = ""
    } else {
        for (i = 1; i <= repeatNum - 1; i++) {
        newString += string;
        }
    }

    return newString;
};


// Do not edit below this line
module.exports = repeatString;
