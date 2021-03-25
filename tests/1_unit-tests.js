const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

const translator = new Translator();
suite("Unit Tests => American to British", () => {
  test("Translate Mangoes are my favorite fruit. to British English", (done) => {
    let input = "Mangoes are my favorite fruit.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
    done();
  });

  test("Translate I ate yogurt for breakfast. to British English", (done) => {
    let input = "I ate yogurt for breakfast.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
    done();
  });

  test("Translate We had a party at my friend's condo. to British English", (done) => {
    let input = "We had a party at my friend's condo.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'We had a party at my friend\'s <span class="highlight">flat</span>.'
    );
    done();
  });

  test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
    let input = "Can you toss this in the trashcan for me?";
    assert.equal(
      translator.americanToBritish(input).translation,
      'Can you toss this in the <span class="highlight">rubbish</span>can for me?'
    );
    done();
  });

  test("Translate The parking lot was full. to British English", (done) => {
    let input = "The parking lot was full.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'The <span class="highlight">car park</span> was full.'
    );
    done();
  });

  test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
    let input = "Like a high tech Rube Goldberg machine.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'Like a high tech <span class="highlight">Heath Robinson device</span>.'
    );
    done();
  });

  test("Translate To play hooky means to skip class or work. to British English", (done) => {
    let input = "To play hooky means to skip class or work.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'To <span class="highlight">bunk off</span> means to skip class or work.'
    );
    done();
  });

  test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
    let input = "No Mr. Bond, I expect you to die.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    );
    done();
  });

  test("Translate Dr. Grosh will see you now. to British English", (done) => {
    let input = "Dr. Grosh will see you now.";
    assert.equal(
      translator.americanToBritish(input).translation,
      '<span class="highlight">Dr</span> Grosh will see you now.'
    );
    done();
  });

  test("Translate Lunch is at 12:15 today. to British English", (done) => {
    let input = "Lunch is at 12:15 today.";
    assert.equal(
      translator.americanToBritish(input).translation,
      'Lunch is at <span class="highlight">12.15</span> today.'
    );
    done();
  });
});

suite("Unit Tests => British to American", () => {
  test("Translate We watched the footie match for a while. to American English", (done) => {
    let input = "We watched the footie match for a while.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
    done();
  });

  // BE SURE TO FIX BUG WHERE IT WON'T CHANGE FIRST WORD BECAUSE IT IS CAPITOLIZED
  // possible soluton is setting original updatedString to text but with only the first letter in the string brought to lower case and at end updated first character back to upperstring (good because sentences need to be upper case anyways)
  // THIS ONE IS CAUSING PROBLEMS
  test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
    let input = "Paracetamol takes up to an hour to work.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
    done();
  });

  test("Translate First, caramelise the onions. to American English", (done) => {
    let input = "First, caramelise the onions.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'First, <span class="highlight">caramelize</span> the onions.'
    );
    done();
  });

  // THIS ONE IS ALSO CAUSING PROBLEMNS BECAUSE PUB IS IN PUBLIC HOLIDAY
  // TRY MAKING CONDITION WHERE I IS INCLUDED AND FOLLOWED BY A SPACE...
  test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
    let input = "I spent the bank holiday at the funfair.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
    );
    done();
  });

  test("Translate I had a bicky then went to the chippy. to American English", (done) => {
    let input = "I had a bicky then went to the chippy.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
    );
    done();
  });

  test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
    let input = "I've just got bits and bobs in my bum bag.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
    );
    done();
  });

  test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
    let input = "The car boot sale at Boxted Airfield was called off.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
    );
    done();
  });

  // THIS ONE IS CAUSING PROBLEMS AS WELL DUE TO IT CHANGING TO MR.S AND NOT MRS.
  test("Translate Have you met Mrs Kalyani? to American English", (done) => {
    let input = "Have you met Mrs Kalyani?";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    );
    done();
  });

  test("Translate Prof Joyner of King's College, London. to American English", (done) => {
    let input = "Prof Joyner of King's College, London.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    );
    done();
  });

  test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
    let input = "Tea time is usually around 4 or 4.30.";
    assert.equal(
      translator.britishToAmerican(input).translation,
      'Tea time is usually around 4 or <span class="highlight">4:30.</span>'
    );
    done();
  });
});

suite("Unit Tests => Highlight Translations", () => {
  test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
    let input = "Mangoes are my favorite fruit.";
    assert.include(
      translator.americanToBritish(input).translation,
      '<span class="highlight">favourite</span>'
    );
    done();
  });

  test("Highlight translation in I ate yogurt for breakfast.", (done) => {
    let input = "I ate yogurt for breakfast.";
    assert.include(
      translator.americanToBritish(input).translation,
      '<span class="highlight">yoghurt</span>'
    );
    done();
  });

  test("Highlight translation in We watched the footie match for a while.", (done) => {
    let input = "We watched the footie match for a while.";
    assert.include(
      translator.britishToAmerican(input).translation,
      '<span class="highlight">soccer</span>'
    );
    done();
  });

  test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
    let input = "Paracetamol takes up to an hour to work.";
    assert.include(
      translator.britishToAmerican(input).translation,
      '<span class="highlight">Tylenol</span>'
    );
    done();
  });
});
