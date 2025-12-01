const repeatString = function(string, num) { // Take two arguments string and num
    let result = "";
    if (num < 0) { // If num is < 0 return ERROR
        result = "ERROR"
    } else {
        for (let i = 0; i < num; i++){ // Use a loop to repeat
            result += string; // Returns string num times
        }
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
