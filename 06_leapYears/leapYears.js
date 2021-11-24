const leapYears = function(year) {
    let yearRemainder = year % 4;

    if (year < 1582) {
        return false
    } else {
        if (yearRemainder != 1) {
            if (yearRemainder == 0) {
                return true
            }
        } else {
            return false
        }
    }

};

// Do not edit below this line
module.exports = leapYears;
