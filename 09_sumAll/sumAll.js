const sumAll = function(a, b) { // Take in 2 positive variables and return sum of every integer between inclusively
    let sum = 0;
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0){ // checks if both are integers and positive
        if (a > b){ // allows for either value to be larger
            for (let i = b; i <= a; i++) {
                sum += i;
            }
        } else {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
        }
        return sum;
    } else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
