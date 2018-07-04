function countLetters(string) {
  var object = {};
  var letterString = string.split(' ').join('');

  for (var i = 0; i < letterString.length; i++) {
    var tally = 0;
    for (var j = 0; j < letterString.length; j++) {
      if (letterString[i] === letterString[j]) {
        tally += 1;
        object[letterString[i]] = tally;
      }
    }
  }

  return object;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("abcaaabbbccc"));