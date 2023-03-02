// example1
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2)
console.log(array3)
// example2
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
const alphanumeric = letters.concat(numbers)
console.log(alphanumeric)

// example 3
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const mergedNumbers = num1.concat(num2,num3)
console.log(mergedNumbers)

// example4 concatnate values to array'
const letters1 = ["a", "b", "c"];
const alphanumeric2 = letters1.concat(1,[2,3])
console.log("example4",alphanumeric2)

// example5 concat nested array
const number1 = [[1]];
const number2 = [2, [3]];
const number3 = number1.concat(number2)
console.log('ex',number3)