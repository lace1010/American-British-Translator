"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let text = req.body.text;
    let locale = req.body.locale;
    let updatedString = "";

    // If one or more of the required fields is missing
    if (!text || !locale) {
      return res.json({ error: "Required field(s) missing" });
    }
    // If text is empty
    else if (!text) return res.json({ error: "No text to translate" });
    // If locale does not match one of the two specified locales
    else if (
      locale !== "american-to-british" &&
      locale !== "british-to-american"
    ) {
      return res.json({ error: "Invalid value for locale field" });
    }
    // If locale is american to british
    else if (locale == "american-to-british") {
      updatedString = translator.americanToBritish(text).translation;
      // If text requires no translation (If text and translated string are the same)
      if (text == updatedString) {
        return res.json({ translation: "Everything looks good to me!" });
      }
      // else return translated object (updatedString is inside object)
      else return res.json(translator.americanToBritish(text));
    }
    // If locale is british to american
    else if (locale === "british-to-american") {
      updatedString = translator.britishToAmerican(text).translation;
      console.log(updatedString, "<= updated string in api.js");
      console.log(text, "<= text in api.js");
      // If text requires no translation (If text and translated string are the same)
      if (text == updatedString) {
        return res.json({ translation: "Everything looks good to me!" });
      }
      // else return translated object (updatedString is inside object)
      return res.json(translator.britishToAmerican(text));
    }
  });
};
