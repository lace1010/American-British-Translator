const translateHandler = async () => {
  const textArea = document.getElementById("text-input");
  const localeArea = document.getElementById("locale-select");
  const errorArea = document.getElementById("error-msg");
  const translatedArea = document.getElementById("translated-sentence");

  const stuff = { text: textArea.value, locale: localeArea.value };
  errorArea.innerText = "";
  translatedArea.innerText = "";

  const data = await fetch("/api/translate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(stuff),
  });

  const parsed = await data.json();
  if (parsed.error) {
    errorArea.innerText = JSON.stringify(parsed);
    return;
  }

  translatedArea.innerHTML = parsed.translation;
  return;
};

document
  .getElementById("translate-btn")
  .addEventListener("click", translateHandler);

let selectOption = document.getElementById("locale-select");
selectOption.addEventListener("click", () => {
  if (selectOption.value == "american-to-british") {
    document.getElementById("title").textContent =
      "American to British English Translator";

    document.getElementById("titleDescription").textContent =
      "American to British translator changes words from American english to British english";

    document.getElementById("solution-header").textContent = "British Text:";

    document.getElementById("text-input").placeholder =
      "Enter American text here...";

    document.getElementById("locale-select").value = "british-to-american";
    document.getElementById("locale-select").textContent =
      " British to American";
  }
  // if british-to-american
  else if (selectOption.value == "british-to-american") {
    document.getElementById("title").textContent =
      "British to American English Translator";

    document.getElementById("titleDescription").textContent =
      "British to American translator changes words from British english to American english";

    document.getElementById("solution-header").textContent = "American Text:";

    document.getElementById("text-input").placeholder =
      "Enter British text here...";

    document.getElementById("locale-select").value = "american-to-british";
    document.getElementById("locale-select").textContent =
      " American to British";
  }
});
