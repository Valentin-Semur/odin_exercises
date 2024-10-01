
// Write the function camelize(str) that changes dash-separated words like “my-short-string” 
// into camel-cased “myShortString”.

function myCamelize(str) {
  let strArray = str.split("-")
  for (let i = 1; i < strArray.length; i++) {strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1)}
  let returnArray = strArray.join("")
  return returnArray; 
}

// Better way
function camelize(str) {
    return str
        .split("-")
        .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
        .join("")
}

// Tests
// console.log(camelize('background-color') === 'backgroundColor');
// console.log(camelize('list-style-image') === 'listStyleImage');
// console.log(camelize('-webkit-transition') === 'WebkitTransition');




// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with 
// values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
    return arr
        .filter(item => (item >= a && item <= b))
}

// Tests
// console.log(filterRange([5, 3, 8, 1], 1, 4)) // [3, 1]

function myFilterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        if (item < a || item > b) {
            arr.splice(index, 1)
        }
    })
}

// Another way, according to Gemini for loops are better
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

// Tests
// let arr = [5, 3, 8, 1]
// myFilterRangeInPlace(arr, 1, 4)
// console.log(arr)


// Sort in decreasing order
function sortDecreasing(arr) {
    return arr.sort((a, b) => b - a)
}

// Tests
// let arr = [5, 2, 1, -10, 8];
// console.log(sortDecreasing(arr))



// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

function copySorted(arr) {
    return arr.slice().sort()
}

// Tests
// let arr = ["HTML", "JavaScript", "CSS"];
// console.log(copySorted(arr))
// console.log(arr)


// You have an array of user objects, each one has user.name. 
// Write the code that converts it into an array of names.

function myConvertObjectToArray(obj) {
    arr = []
    obj.forEach((user) => {arr.push(user.name)})
    return arr
}

// Much better
function convertObjectToArray(users) {
    return users.map(item => item.name)
}

// Tests
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// console.log(convertObjectToArray(users))



// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName,
//  where fullName is generated from name and surname.

function mapUsers(users) {
    return users.map(item => ({
        surname: `${item.name} ${item.surname}`, 
        id: item.id
    }));
}

// Tests
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// console.log(mapUsers(users))



// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
}

// Tests
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];
// sortByAge(arr)
// console.log(arr[0].name == "John");
// console.log(arr[1].name == "Mary");
// console.log(arr[2].name == "Pete");



// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:

// Not mine, but clever
function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}

// Tests 
// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);



// Write the function getAverageAge(users) that gets an array of objects 
// with property age and returns the average age.

function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length
}

// Tests
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// console.log(getAverageAge(arr))


// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let uniqueArr = []
    for (item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item)
        }
    }
    return uniqueArr
}

// Tests
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//   console.log(unique(strings)); // Hare, Krishna, :-O



// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, 
// and array items as values.

function groupById(arr) {
    return arr.reduce((results, item) => {
        results[item.id] = item;
        return results; // needed to update the accumulator
    }, {})
}

// Tests
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// let usersById = groupById(users);
// console.log(usersById)

