function sumRange(num) {
    return (num == 1) ? 1 : num + sumRange(num - 1);
}

function power(base, exponent) {
    return (exponent == 0) ? 1 : base * power(base, exponent - 1);
}

function factorial(number) {
    return (number == 1) ? 1 : number * factorial(number - 1);
}

function all(array, callback) {
    if (array.length == 0) {
        return true
    }
    return callback(array[0]) && all(array.slice(1), callback)
}

function productOfArray(array) {
    if (array.length == 0) {
        return 1
    }
    return array[0] * productOfArray(array.slice(1))
}

