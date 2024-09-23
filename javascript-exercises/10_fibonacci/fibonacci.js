const fibonacci = function(number) {
    let current = 1;
    let previous = 0;
    if (number < 0) {return "OOPS"}
    for (let i = 0; i < number; i++) {
        let stored = current
        current += previous;
        previous = stored;
    }
    return previous 
};

// Do not edit below this line
module.exports = fibonacci;



// const fibonacci = function(countArg) {
//     let count
//     if (typeof countArg !== 'number') {
//         count = parseInt(countArg)
//     } else {
//         count = countArg
//     }

//     if (count < 0) return "OOPS";
//     if (count == 0) return 0;

//     let firstPrev = 1;
//     let secondPrev = 0;

//     for (let i = 2; i <= count; i++) {
//         let current = firstPrev + secondPrev;
//         secondPrev = firstPrev;
//         firstPrev = current;
//     }

//     return firstPrev;

// };