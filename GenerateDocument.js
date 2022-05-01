/**
 * Function to get the frequency count of characters
 * @param {string} inputString the string whose character frequency is needed
 * @returns object with frequencies of each unique characters
 */
const getFrequency = (inputString) => {
  // create an empty object
  let frequency = {};

  // for each character in the string, if it is already added
  // to the object, increment its count value
  // otherwise set count to 1
  inputString.split("").forEach((s) => {
    frequency[s] ? frequency[s]++ : (frequency[s] = 1);
  });
  return frequency;
};

/**
 * Function to check if a document can be created from the given characters
 * @param {string} characters collections of characters that make up a string
 * @param {*} document the document to be generated
 * @returns true if document can be generated from the string otherwise false
 */
const canGenerateDocument = (characters, document) => {
  if (characters === " " && document === " ") {
    return true;
  }

  // getting the character frequencies of each strings
  const characterFrequency = getFrequency(characters);
  const documentFrequency = getFrequency(document);

  // for every character in the characterFrequency object
  // compare its value to the same character in the document frequency object
  // if the value is greater or equal, continue till the end of the object, otherwise return false
  for (const char in characterFrequency) {
    if (characterFrequency[char] >= documentFrequency[char]) {
      continue;
    } else {
      return false;
    }
  }

  // if the condition in the for loop satisfies until the end of the object, the function returns true and terminates
  return true;
};

// Testing solution
console.log(
  canGenerateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);

console.log(canGenerateDocument("abcabc", "aabbccc"));

console.log(canGenerateDocument("gareeden", "renegade"));

console.log(canGenerateDocument("gareden", "renegade"));
