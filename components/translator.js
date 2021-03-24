const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  americanToBritish(text) {
    let updatedString = text;

    // Loops through every object key in americanToBritishTitles and checks if it is in the text. If so replace i with the british value.
    Object.keys(americanToBritishTitles).map((i) => {
      if (updatedString.includes(i)) {
        updatedString = text.replace(i, americanToBritishTitles[i]);
      }
    });
    // Loops throught every object key in americanOnly and checks if it is in the text. If so replace i with the british value.
    Object.keys(americanOnly).map((i) => {
      if (updatedString.includes(i)) {
        updatedString = updatedString.replace(i, americanOnly[i]);
      }
    });

    // Loops throught every object key in americanToBritishSpelling and checks if it is in the text. If so replace i with the british value.
    Object.keys(americanToBritishSpelling).map((i) => {
      if (updatedString.includes(i)) {
        updatedString = updatedString.replace(i, americanToBritishSpelling[i]);
      }
    });

    // split new updated string by space to find a time
    let splitTextArray = updatedString.split(" ");
    let timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/;
    // console.log(splitTextArray, "<= split text array");

    // loop through each word slot in array
    let updatedArray = splitTextArray.map((i) => {
      // If one of the word slots has an american time replace it with British time
      if (timeRegex.test(i)) {
        return (i = i.replace(":", "."));
      } else return i;
    });

    // rejoin the updatedArray to have updatedString now translate to correct british time format.
    updatedString = updatedArray.join(" ");

    console.log(updatedString, "<=updatedString for american to british");
    return { text: text, translation: updatedString };
  }

  // Fix britishToAmerican function just like americanToBritish

  britishToAmerican(text) {
    // Figure out a way to split array with special characters and full stops but not one in time regex
    let splitTextArray = text.split(" ");
    let timeRegex = /^([0-1]?[0-9]|2[0-3])\.[0-5][0-9]/;
    let updatedArray = splitTextArray.map((i) => {
      // If one of the word slots has a british time
      if (timeRegex.test(i)) {
        return (i = i.replace(".", ":"));
      }
      // If i is one of the values in object americanToBritishTitles
      else if (Object.values(americanToBritishTitles).includes(i)) {
        // This is a way to return the key based on found value
        let key = Object.keys(americanToBritishTitles)[
          Object.values(americanToBritishTitles).indexOf(i)
        ];
        // Now return key that is based off of the i found
        return (i = key);
      } else return i;
    });

    let updatedString = updatedArray.join(" ");
    console.log(updatedString, "<=updatedString for British to American");

    return { text: text, translation: updatedString };
  }
}

module.exports = Translator;
