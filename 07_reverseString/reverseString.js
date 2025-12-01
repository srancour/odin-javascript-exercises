const reverseString = function(string) { // Take in a string
    // First attempt
    // // Split string into an array for every character
    // arr = string.split('');
    // // Create new array for the old to go into
    // let newarr = [];
    // // Reverse order of array
    // for (let i = 0; i <= arr.length; i++) {
    //     newarr[(arr.length - i)] = arr[i];
    // }
    // reversedString = newarr.join('');
    // return reversedString;
    // // Combine the array back into a string
    
    // Cleaner approach
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
