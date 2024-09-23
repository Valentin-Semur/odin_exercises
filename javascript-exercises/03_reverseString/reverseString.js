const reverseString = function(string) {
    const stringChars = string.split("");
    const reversedStringChars = [];
    for (let i = stringChars.length; i >= 0; i--) {
        reversedStringChars.push(stringChars[i])
    }
    const reversedString = reversedStringChars.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
