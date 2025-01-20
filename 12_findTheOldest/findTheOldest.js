const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    let currentYear = new Date().getFullYear();
    people.forEach(person => {
        let age;
        if (person["yearOfDeath"] === undefined) {
            age = currentYear - person["yearOfbirth"];
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        }
        else {
            age = person["yearOfDeath"] - person["yearOfbirth"];
            if (age > oldestAge) {
                oldestAge = age;
                oldestPerson = person;
            }
        }
    });

    return oldestPerson["name"];
};

// Do not edit below this line
module.exports = findTheOldest;
