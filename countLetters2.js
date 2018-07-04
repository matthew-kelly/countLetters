function countLetters(string) {
  var object = {};
  var letterString = string.split(' ').join('');
  for (var i = 0; i < letterString.length; i++) {
    object[letterString[i]] = [];
    for (var j = 0; j < letterString.length; j++) {
      if (letterString[i] === letterString[j]) {
        object[letterString[i]].push(j);
      }
    }
  }
  return object;
}
console.log(countLetters("lighthouse in the house"));