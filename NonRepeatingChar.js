/**
 * @param {string} inputString the string whose first non repeating character is needed
 * @returns the index of a single non repeating character if exists else -1
 */
const findIndexOfFirstNonRepeatingChar = (inputString) => {
  // iterate over a string

  for (const c of inputString) {
    // for every string check if it has repeated characters
    // the condition becomes true if a character occurs only once
    // because then it's first and last index will be the same

    if (inputString.indexOf(c) === inputString.lastIndexOf(c)) {
      return inputString.indexOf(c);
    }
  }

  // return -1 if there is no single non-repeating character
  return -1;
};

// Testing solution
console.log(findIndexOfFirstNonRepeatingChar("renegade"));
console.log(findIndexOfFirstNonRepeatingChar("aabccdde"));
console.log(findIndexOfFirstNonRepeatingChar("aabbccdde"));
