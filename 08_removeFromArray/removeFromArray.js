const removeFromArray = function(arr, ...removals) { // Function that takes in an array and as many optional removals as it wants
    for (let i = 0; i <= removals.length; i++) { //iterate through all elements passed to removals
        arr = arr.filter(value => value !== removals[i]); // removes individual elements where they equal the current optional removal option
    }
    return arr;
};

// console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
