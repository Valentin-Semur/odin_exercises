const findTheOldest = function(array) {

    const oldesetAge = array.reduce((max, person) => {
        age = getAge(person)
        if (age > max) {
            max = age
        }
        return max
    }, 0)

    return array.find(person => {
        age = getAge(person)
        return age === oldesetAge
    })

};

// Do not edit below this line
module.exports = findTheOldest;

const getAge = function(person) {
    let end;
    if ("yearOfDeath" in person) {
        end = person.yearOfDeath
    } else {
        end = new Date().getFullYear()
    }
    return end - person.yearOfBirth
}

