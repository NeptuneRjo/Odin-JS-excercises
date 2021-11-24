// get array 
// get variables for removal from array
// iterate through each value in array
// if value is the same as entered variable, remove
// after iterating through array, return to new array
// return new array 


const removeFromArray = function(defaultArray, ...args) {
    let newArray = defaultArray;
    let checkArray = Array.prototype.slice.call(args);

    newArray = newArray.filter(val => !checkArray.includes(val));

    return newArray
    
};

console.log(removeFromArray([1,2,3,4], 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
