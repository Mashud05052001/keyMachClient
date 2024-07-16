function convert(number, from, to) {
  if (from < 2 || from > 16 || to < 2 || to > 16) {
    return "Invalid Input";
  }
  if (from != 10) {
    number = parseInt(number, from);
    if (isNaN(number)) {
      return "invalid input";
    }
  }
  return number.toString(to).toUpperCase();
}

console.log(convert(25, 10, 2)); // Output: 11001
console.log(convert("11001", 2, 8)); // Output: 31
console.log(convert(31, 8, 16)); // Output: 1F
console.log(convert("1F", 16, 10)); // Output: 31