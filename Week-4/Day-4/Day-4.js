// You are provided with a function "text2Hex" which will convert binary values into hexidecimal. In this toy problem you will conduct a series of manipulations to hexidecimal array data. Complete the following tasks using the manipulateArrays function:

// 1) Combine the 2 arrays into a single array.
// 2) Sort the array in ascending order.
// 3) Remove all prime numbers and values with letters.

// Return your final answer as an array.

// Example:
// ['61','64','6d','73','74','67','20','65','72']  +  ['54','68','69','73','6f','6d','74','67','73']
// === Result ===>  ['20','54','64','65','68','69','72','74','74']

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
