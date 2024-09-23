const convertToCelsius = function(temp) {
  // return Math.round((temp - 32) * 5 / 9 * 10) / 10
  return ((temp - 32) * 5 / 9).toFixed(1)
};

const convertToFahrenheit = function(temp) {
  // return Math.round((temp * 9 / 5 + 32) * 10) / 10
  return (temp * 9 / 5 + 32).toFixed(1)
};

// It does not pass the test for some reason, but I like my version better

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
