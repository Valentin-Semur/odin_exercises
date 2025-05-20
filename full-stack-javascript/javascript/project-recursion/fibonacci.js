// Fibonacci solved with iteration
function fibs(num) {
    var fibonacciSequence = [0, 1];
    if (num == 1) {
        return [0];
    } else if (num == 2) {
        return fibonacciSequence;
    }
    for (var step = 2; step < num; step++) {
        var sequenceLength = fibonacciSequence.length;
        fibonacciSequence.push(fibonacciSequence[sequenceLength - 1] + fibonacciSequence[sequenceLength - 2]);
    }
    return fibonacciSequence
}

// Fibonacci solved recursively
function fibsRec(num, fibonacciSequence = [0, 1]) {
    if (num == 1) {
        return [0];
    } else if (num == 2) {
        return fibonacciSequence;
    }
    var sequenceLength = fibonacciSequence.length;
    fibonacciSequence.push(fibonacciSequence[sequenceLength - 1] + fibonacciSequence[sequenceLength - 2]);
    return fibsRec(num - 1, fibonacciSequence)
}