const sumAll = function(start, stop) {
    let sum = 0
    if (!Number.isInteger(start) || !Number.isInteger(stop) ||(start * stop < 0)) {
        return "ERROR"
    }
    if (start < stop) {
        for (i = start; i <= stop; i++) sum+= i
    } else {
        for (i = stop; i <= start; i++) sum+= i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
