// First change text into binary:
const name = "random string here";
text2Binary = str =>
  str
    .split("")
    .map(char => `0${char.charCodeAt(0).toString(2)}`)
    .join(" ");
text2Binary(name);

// Determine if any of the binary sequences are palindromes Solution:
findPalindrome = str => {
  var binaryArr = str.split(" ");

  const reverseArr = binaryArr.map(ele => {
    return ele
      .split("")
      .reverse()
      .join("");
  });

  const finalArr = binaryArr.map((e, i) => {
    if (e === reverseArr[i]) {
      return true;
    }
    return false;
  });

  console.log("Regular", binaryArr);
  console.log("Reverse", reverseArr);
  console.log("Final", finalArr);

  return finalArr;
};
findPalindrome(text2Binary(name));
