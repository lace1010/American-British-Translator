const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  americanToBritish(text) {
    // Make first letter in sentence lowercase so it can match objects and be translated if need be.
    let updatedString = text.replace(text[0], text[0].toLowerCase());

    // Loops throught every object key in americanOnly and checks if it is in the text. If so replace i with the british value.
    Object.keys(americanOnly).map((i) => {
      if (
        updatedString.includes(i + " ") ||
        updatedString.includes(i + ".") ||
        updatedString.includes(i + "?")
      ) {
        updatedString = updatedString.replace(
          i,
          '<span class="highlight">' + americanOnly[i] + "</span>"
        );
      }
    });

    // Loops throught every object key in americanToBritishSpelling and checks if it is in the text. If so replace i with the british value.
    Object.keys(americanToBritishSpelling).map((i) => {
      if (updatedString.includes(i)) {
        updatedString = updatedString.replace(
          i,
          '<span class="highlight">' + americanToBritishSpelling[i] + "</span>"
        );
      }
    });

    // Loops through every object key in americanToBritishTitles and checks if it is in the text. If so replace i with the british value.
    Object.keys(americanToBritishTitles).map((i) => {
      if (
        updatedString.includes(i + " ") ||
        updatedString.includes(i + ".") ||
        updatedString.includes(i + "?")
      ) {
        updatedString = updatedString.replace(
          i,
          '<span class="highlight">' + americanToBritishTitles[i] + "</span>"
        );
      }
    });

    // Translate time format.
    // split new updated string by space to find a time
    let splitTextArray = updatedString.split(" ");
    let timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/;
    // console.log(splitTextArray, "<= split text array");

    // loop through each word slot in array
    let updatedArray = splitTextArray.map((i) => {
      // If one of the word slots has an american time replace it with British time
      if (timeRegex.test(i)) {
        return (i =
          '<span class="highlight">' + i.replace(":", ".") + "</span>");
      } else return i;
    });

    // rejoin the updatedArray to have updatedString now translate to correct british time format.
    updatedString = updatedArray.join(" ");

    // Capitolize the first letter in updatedString
    if (updatedString[0] == "<") {
      // If the first character is < then it has to be <span...> meaning the first word starts at [24]
      updatedString =
        updatedString.slice(0, 24) +
        updatedString.charAt(24).toUpperCase() +
        updatedString.slice(25, updatedString.length);
    } else {
      updatedString =
        updatedString.charAt(0).toUpperCase() + updatedString.slice(1);
    }
    // If the original has text with words that are capitolized then capitalize those words again now if they havent been translated.
    return { text: text, translation: updatedString };
  }

  // Fix britishToAmerican function just like americanToBritish

  britishToAmerican(text) {
    let updatedString = text.replace(text[0], text[0].toLowerCase());
    let key;

    // For britishOnly the key is British and value is American so we loop through Object.keys because we are translating to American
    Object.keys(britishOnly).map((i) => {
      // if key is matched and has a space behing (there fore a shorter word doesn't translate inside a bigger word.)
      // or if it is followed by a special character
      if (
        updatedString.includes(i + " ") ||
        updatedString.includes(i + ".") ||
        updatedString.includes(i + "?")
      ) {
        updatedString = updatedString.replace(
          i,
          '<span class="highlight">' + britishOnly[i] + "</span>"
        );
      }
    });

    //  Loops through every object value in americanToBritishSpelling and checks if it is in the text. If so replace i with the american key.
    Object.values(americanToBritishSpelling).map((i) => {
      //  If string includes a value in americanToBritishTitles object
      if (updatedString.includes(i)) {
        // This is a way to return the key based on found value
        key = Object.keys(americanToBritishSpelling)[
          Object.values(americanToBritishSpelling).indexOf(i)
        ];
        // Now return key that is bassed off the i (value) found
        updatedString = updatedString.replace(
          i,
          '<span class="highlight">' + key + "</span>"
        );
      }
    });

    //  Loops through every object value in americanToBritishTitles and checks if it is in the text. If so replace i with the american key.
    Object.values(americanToBritishTitles).map((i) => {
      //  If string includes a value in americanToBritishTitles object
      if (
        updatedString.includes(i + " ") ||
        updatedString.includes(i + ".") ||
        updatedString.includes(i + "?")
      ) {
        // This is a way to return the key based on found value
        key = Object.keys(americanToBritishTitles)[
          Object.values(americanToBritishTitles).indexOf(i)
        ];

        // if updatedString does not involve the american version with . after then update string
        if (!updatedString.includes(key)) {
          // Now return key that is bassed off the i (value) found
          updatedString = updatedString.replace(
            i,
            '<span class="highlight">' + key + "</span>"
          );
        }
      }
    });

    // Translate time format.
    // split updatedString to translate times now
    let splitTextArray = updatedString.split(" ");
    let timeRegex = /^([0-1]?[0-9]|2[0-3])\.[0-5][0-9]/;
    let updatedArray = splitTextArray.map((i) => {
      // If one of the word slots has a british time
      if (timeRegex.test(i)) {
        return (i =
          '<span class="highlight">' + i.replace(".", ":") + "</span>");
      } else return i;
    });
    updatedString = updatedArray.join(" ");

    // Capitolize the first word in string
    if (updatedString[0] == "<") {
      // If the first character is < then it has to be <span...> meaning the first word starts at [24]
      updatedString =
        updatedString.slice(0, 24) +
        updatedString.charAt(24).toUpperCase() +
        updatedString.slice(25, updatedString.length);
    } else {
      updatedString =
        updatedString.charAt(0).toUpperCase() + updatedString.slice(1);
    }
    return { text: text, translation: updatedString };
  }
}

module.exports = Translator;

// WORK ON MAKING STRING GO TO LOWERCASE IN IF CONDITION
