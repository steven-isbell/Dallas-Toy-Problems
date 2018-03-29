const str1 = "random string here";
const str2 = "This is something else";

// Convert binary to hexidecimal
text2Hex = str => str.split("").map(char => char.charCodeAt(0).toString(16));

const arr1 = text2Hex(str1);
const arr2 = text2Hex(str2);

// Combine, sort and remove primes
const manipulateArrays = (a, b) => {
  const sorted = a.concat(b).sort();
  return (finalArray = sorted.filter(number => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return true;
    }
    return false;
  }));
};
manipulateArrays(arr1, arr2);
