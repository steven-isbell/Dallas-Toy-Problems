// Today you are once again given the text2Binary function we created in order to convert a string to binary. Your objective is to determine if each of the binary representations are palindromes. A palindrome is a word, phrase, or sequence that reads the same backward as forward. Loop through and determine whether each binary representation is a palindrome. Return a new array containing a true value for palindromes, and false value for non-palindromes.

// Example:
// 01110010 01101110 01100111 01011010   ---->  [false, false, true, false]

// Use this function to convert a string into binary sequence.
const name = "random string here";
text2Binary = str =>
  str
    .split("")
    .map(char => `0${char.charCodeAt(0).toString(2)}`)
    .join(" ");
text2Binary(name);

// Determine if any of the binary sequences are palindromes
findPalindrome = str => {
  // Code Here ...
};
findPalindrome(text2Binary(name));
