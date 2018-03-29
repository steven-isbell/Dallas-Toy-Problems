// You are provided with a function "text2Hex" which will convert binary values into hexidecimal. In this toy problem you will conduct a series of manipulatios to hexidecimal array data. Complete the following tasks using the manipulateArrays function:

// 1) Combine the 2 arrays into a single array.
// 2) Sort the array in ascending order.
// 3) Remove all prime numbers and values with letters.

// Return your final answer as an array.

const str1 = "random string here";
const str2 = "This is something else";

// Convert binary to hexidecimal
text2Hex = str => str.split("").map(char => char.charCodeAt(0).toString(16));

const arr1 = text2Hex(str1);
const arr2 = text2Hex(str2);

// Combine, sort and remove primes
const manipulateArrays = (a, b) => {
  // Code Here ...
};
manipulateArrays(arr1, arr2);
