const palindromes = function (string) {
    const cleansedString = string
        .toLowerCase()
        .split("")
        .filter((char) => char.match(/[a-z]|[0-9]/i))

    return cleansedString.every((value, index, array) => value === array[cleansedString.length - index - 1])
};

// Do not edit below this line
module.exports = palindromes;


// const palindromes = function (string) {
//     const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
//     const cleanedString = string
//       .toLowerCase()
//       .split('')
//       .filter((character) => alphanumerical.includes(character))
//       .join('');

//     const reversedString = cleanedString.split('').reverse().join('');

//     return cleanedString === reversedString;
//   };
  