// get array 
// get variables for removal from array
// iterate through each value in array
// if value is the same as entered variable, remove
// after iterating through array, return to new array
// return new array 


const removeFromArray = function(defaultArray, ...args) {
    let newArray = defaultArray;
    let checkArray = Array.prototype.slice.call(args);
    let x = 0;

    console.log(defaultArray);
    console.log(checkArray);


    while (x < defaultArray.length) {
        for (let i = 0; i <= checkArray.length; i++) {
            if (newArray[x] === checkArray[i]) {
                newArray.slice(i, i+1);
                
            } 
        }

        ++x;
    }
    
};

console.log(removeFromArray([1,2,3,4], 3, 4, 5, 6));

// Do not edit below this line
module.exports = removeFromArray;
