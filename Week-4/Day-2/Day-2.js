// Today your objective is to evaluate various statistics about binary representations. You are given the text2Binary function which we created yesterday in order to convert a string to binary. Use binaryStats to determine the following information about the binary sequence:

// 1) Find the total count of 0s.
// 2) Find the total count of 1s.
// 3) Determine the percent of each.
// 4) Determine which count is greater.

// binaryStats will return a formatted string value containing the appropriate statistics.

// Examples:
//  === Result ===> "0 wins with a count of 17 and 58%"
//  === Result ===> "1 wins with a count of 32 and 64%"

// Use this function to convert a string into binary sequence.
const name = "random string here";
text2Binary = str =>
  str
    .split("")
    .map(char => `0${char.charCodeAt(0).toString(2)}`)
    .join(" ");
text2Binary(name);

// Use this function to evaluate the binary sequences.
binaryStats = str => {
  // Code Here...
};
binaryStats(convertBinary(name));
