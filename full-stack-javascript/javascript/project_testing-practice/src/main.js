export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const reverseString = (string) => {
    return string.split('').reverse().join('');
}

export const Calculator = () => {
    
    const add = (a, b) => {
        return a + b;
    };

    const subtract = (a, b) => {
        return a - b;
    };

    const divide = (a, b) => {
        if (b === 0) {
            throw new Error('division by zero');
        };
        return a / b;
    };

    const multiply = (a, b) => {
        return a * b;
    };

    return { add, subtract, divide, multiply }
}

export const ceasarCipher = () => {

    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const upperAbc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function isUpperCase(letter) {
        if (letter === letter.toUpperCase()) {
            return true;
        }
        return false;
    }

    function encodeLetter(letter, shiftFactor) {
        // Check if the first argument is a letter, otherwise return it unchanged
        if (!letter.match(/[a-z]/i)) {
            return letter;
        };

        let letterIsUpperCase = false;

        if (isUpperCase(letter)) {
            letterIsUpperCase = true;
            letter = letter.toLowerCase();
        }

        let currentPosition = abc.indexOf(letter);
        let newPosition = currentPosition + shiftFactor;

        // Shift back to the start of the alphabet
        if (newPosition > 25) {
            newPosition = newPosition - 26;
        }

        if (letterIsUpperCase) {
            return upperAbc[newPosition];
        } else if (!letterIsUpperCase) {
            return abc[newPosition];
        };
    }

    const encode = (string, shiftFactor) => {
        if (typeof(string) !== 'string') {
            throw new Error('first argument must be a string');
        } else if (typeof(shiftFactor) !== 'number') {
            throw new Error('second argument must be a number');
        };

        const encodedString = string
            .split('')
            .map(letter => encodeLetter(letter, shiftFactor))
            .join('');

        return encodedString
    }

    return { encode }
}

export const analyzeArray = (array) => {
    if (array === undefined && !Array.isArray(array)) {
        return { average: null, min: null, max: null, length: null };
    }
    if (array.length === 0) {
        return { average: null, min: null, max: null, length: 0 };
    }

    const arrayLength = array.length;
    const arrayAverage = array.reduce((acc, curr) => acc + curr, 0) / arrayLength;
    const arrayMax = array.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity);
    const arrayMin = array.reduce((acc, curr) => (curr < acc ? curr : acc), Infinity);

    return {
        average: arrayAverage,
        min: arrayMin,
        max: arrayMax,
        length: arrayLength
    }
}