/**
 * Author: Harmanpreet Singh
 * Date: June 17, 2020
 */

// This function returns a random number between (and including both) minimum and maximum
function getRandomInteger(minimum, maximum) {
  minimum = Math.ceil(minimum); // minimum is inclusive
  maximum = Math.floor(maximum + 1); // maximum is exclusive so we add one
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

// Povided Arrays
const nouns = [
  "dragons",
  "toasters",
  "apple",
  "cat",
  "car",
  "home",
  "jeans",
  "food",
  "bed",
  "tube",
  "kite",
];

const verbs = [
  "walked",
  "ran",
  "wrote",
  "helped",
  "caught",
  "done",
  "ate",
  "drink",
  "sleeping",
  "fought",
];

const adverbs = [
  "menacingly",
  "intentionally",
  "messily",
  "happily",
  "quickly",
  "much",
  "slowly",
  "steadily",
  "very",
  "Great",
];

const adjectives = [
  "wild",
  "slippery",
  "fruity",
  "delicious",
  "minty",
  "chilly",
  "slick",
  "hard",
  "warm",
  "screeching",
];

const proNouns = ["they", "we", "you", "he", "she", "I", "it"];

const openings = [
  "Once upon a time",
  "I watched",
  "I ate",
  "I was travelling",
  "One day",
  "At midnight",
  "In the morning",
  "In the afternoon",
  "In the evenining",
  "On sunday",
];

const closings = [
  "with extra cheese",
  "the end",
  "in the last",
  "before sleeping",
  "before I went to the office",
  "before leaving for the market",
  "in the end",
  "lastly",
  "before the final good bye",
  "before having lunch",
];

function createOutput(value) {
  console.log("\n" + value + "\n");
}

function createSentence() {
  openingIndex = getRandomInteger(0, openings.length - 1);
  adjectiveIndex = getRandomInteger(0, adjectives.length - 1);
  nounIndex = getRandomInteger(0, nouns.length - 1);
  proNounIndex = getRandomInteger(0, proNouns.length - 1);
  verbIndex = getRandomInteger(0, verbs.length);
  adverbIndex = getRandomInteger(0, adverbs.length - 1);
  closingIndex = getRandomInteger(0, closings.length - 1);

  return (
    openings[openingIndex] +
    ", " +
    proNouns[proNounIndex] +
    " " +
    verbs[verbIndex] +
    " " +
    adjectives[adjectiveIndex] +
    " " +
    nouns[nounIndex] +
    " " +
    adverbs[adverbIndex] +
    ", " +
    closings[closingIndex]
  );
}

for (i = 0; i < 10; i++) {
  sentence = createSentence();
  createOutput(sentence);
}
