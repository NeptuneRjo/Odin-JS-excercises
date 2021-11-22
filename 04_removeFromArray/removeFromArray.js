// get array 
// get variables for removal from array
// iterate through each value in array
// if value is the same as entered variable, remove
// after iterating through array, return to new array
// return new array 


const removeFromArray = function(defaultArray, removeVar1, removeVar2) {
    let newArray = defaultArray;

    for (let i = 0; i <= newArray.length; i++) {
        if ((newArray[i] == removeVar1) || (newArray[i] == removeVar2)) {
            newArray.splice(i, i-1);
        }
    }
    
    return newArray
};

// console.log(removeFromArray([1,2,3,4], 3));

// Do not edit below this line
module.exports = removeFromArray;
