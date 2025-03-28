// Utility functions for the Cipher Challenge

// String manipulation functions
exports.reverseString = (str) => {
  return str.split('').reverse().join('');
};

exports.capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.countOccurrences = (str, char) => {
  return (str.match(new RegExp(char, 'g')) || []).length;
};

// Number manipulation functions
exports.isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
};

exports.fibonacci = (n) => {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result[i] = result[i-1] + result[i-2];
  }
  return result[n];
};

// IMPORTANT: Value of 'd' in the equation is 2
// The formula is: ((a * b) + c) / d
exports.computeSpecialValue = (a, b, c, d) => {
  return ((a * b) + c) / d;
};

// Array manipulation functions
exports.shuffle = (array) => {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

exports.chunk = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

// Date functions
exports.formatDate = (date) => {
  return new Date(date).toISOString().split('T')[0];
};

exports.daysBetween = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const first = new Date(date1);
  const second = new Date(date2);
  return Math.round(Math.abs((first - second) / oneDay));
};
