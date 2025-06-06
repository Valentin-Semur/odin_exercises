// Fibonacci solved with iteration
function fibs(num) {
    let fibonacciSequence = [0, 1];
    if (num == 1) {
        return [0];
    } else if (num == 2) {
        return fibonacciSequence;
    }
    for (let step = 2; step < num; step++) {
        let sequenceLength = fibonacciSequence.length;
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
    let sequenceLength = fibonacciSequence.length;
    fibonacciSequence.push(fibonacciSequence[sequenceLength - 1] + fibonacciSequence[sequenceLength - 2]);
    return fibsRec(num - 1, fibonacciSequence)
}