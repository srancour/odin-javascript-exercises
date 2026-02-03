function getAge(person) {
    person.yearOfDeath ??= ((new Date()).getFullYear());
    return person.yearOfDeath - person.yearOfBirth;
}
const findTheOldest = function(people) {
    const oldestSort = people.sort((a, b) => {
        return getAge(b) - getAge(a);
    });
    return oldestSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
