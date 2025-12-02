const removeFromArray = function(arr, ...removals) { // Function that takes in an array and as many optional removals as it wants
    // First attempt
    // for (let i = 0; i <= removals.length; i++) { //iterate through all elements passed to removals
    //     arr = arr.filter(value => value !== removals[i]); // removes individual elements where they equal the current optional removal option
    // }
    // return arr;

    // Better way of doing it
    return arr.filter(val => !removals.includes(val));

};

// console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
