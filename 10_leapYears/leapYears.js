const leapYears = function(year) {
    // First Attempt
    // if (year % 100 === 0 && year % 400 !== 0){
    //     return false;
    // } else if (year % 4 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // Easier to read version
    const isYearDivisibleByFour = year % 4 === 0;
    const isYearCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    if (isYearDivisibleByFour && (!isYearCentury || isYearDivisibleByFourHundred)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
