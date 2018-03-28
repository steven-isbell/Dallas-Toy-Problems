// Convert text to binary solution:
// ======================
const name = "Erik Golden";

// Standard Solution:
function text2Binary(str) {
  return str
    .split("")
    .map(function(char) {
      return "0" + char.charCodeAt(0).toString(2);
    })
    .join(" ");
}

// One line es6 answer:
// text2Binary = str => str.split("").map((char)=> `0${char.charCodeAt(0).toString(2)}`).join(" ")

text2Binary(name);
