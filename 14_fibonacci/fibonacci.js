const fibonacci = function(number) {
    if (typeof number == "number") {

    } else {
        number = Number(number);
    }
    let value = 1;
    let previous = 0;
    if (number < 0){
        return "OOPS";
    } else if (number == 0){
        return 0;
    } else {
        for (let i = 2; i <= number; i++) {
            let current = value + previous;
            previous = value;
            value = current;
        }
        return value;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
