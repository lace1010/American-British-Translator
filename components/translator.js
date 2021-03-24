const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  americanToBritish(text) {
    // First split the string into array of all words.
    let splitTextArray = text.split(" ");
    let timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]/;

    // Check every word and see if a time is there. If so then return the british form of time.
    let updatedTimeArray = splitTextArray.map((i) => {
      if (timeRegex.test(i)) {
        return (i = "<span class='highliht'>" + i.replace(":", ".") + "<span>");
      } else return i;
    });

    // loop through each word and if one matches a property in title object change it to british one
    let updatedTitlesArray = updatedTimeArray.map((i) => {
      if (americanToBritishTitles.hasOwnProperty(i)) {
        return (
          (i = "<span class='highliht'>" + americanToBritishTitles[i]) +
          "<span>"
        );
      } else return i;
    });

    let updatedString = updatedTitlesArray.join(" ");
    console.log(updatedString, "<=updatedString for american to british");
    return { text: text, translation: updatedString };
  }

  britishToAmerican(text) {
    let timeRegex = /^([0-1]?[0-9]|2[0-3])\.[0-5][0-9]/;
    let splitTextArray = text.split(" ");
    let updatedTimeArray = splitTextArray.map((i) => {
      if (timeRegex.test(i)) {
        return (i = "<span class='highliht'>" + i.replace(".", ":") + "<span>");
      } else return i;
    });

    let updatedTitlesArray = updatedTimeArray.map((i) => {
      if (Object.values(americanToBritishTitles).includes(i)) {
        // This is a way to return the key based on found value
        let key = Object.keys(americanToBritishTitles)[
          Object.values(americanToBritishTitles).indexOf(i)
        ];
        // Now return key that is based off of the i found
        return (i = "<span class='highliht'>" + key + "<span>");
      } else return i;
    });

    let updatedString = updatedTitlesArray.join(" ");
    console.log(updatedString, "<=updatedString for British to American");

    return { text: text, translation: updatedString };
  }
}

module.exports = Translator;
