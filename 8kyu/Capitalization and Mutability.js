function capitalizeWord(word) {
  let firstChar = word[0].toUpperCase();
  let remainingChars = word.slice(1);
  let newWord = firstChar + remainingChars;
  return newWord;
}
console.log(capitalizeWord("this is a test."));
