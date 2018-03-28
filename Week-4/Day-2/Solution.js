// First change text into binary:
const name = "random string here";
text2Binary = str =>
  str
    .split("")
    .map(char => `0${char.charCodeAt(0).toString(2)}`)
    .join(" ");
text2Binary(name);

// Evaluate binary solution:
binaryStats = str => {
  let zero = 0;
  let one = 0;

  str.split("").forEach((e, i) => (Number(e) === 0 ? zero++ : one++));

  const zeroPercent = Math.floor(zero / str.split("").length * 100) + "%";
  const onePercent = Math.floor(one / str.split("").length * 100) + "%";

  if (zero > one) {
    return `0 Wins with a count of ${zero} and ${zeroPercent}`;
  }
  return `1 Wins with a count of ${one} and ${onePercent}`;
};
binaryStats(text2Binary(name));
