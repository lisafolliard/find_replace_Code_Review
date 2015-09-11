var findReplace = function(sentence, word, replacement) {
  if (sentence.includes(word)) {
    var new_sentence = sentence.replace(word, replacement);
    return new_sentence;
  }
};


//var new_sentence = "";

//
// var findReplace = function(sentence, word, replacement) {
//   if (sentence.includes(word)) {
//     var new_word = word;
//       return new_word;
//   }
// };
//
// var findReplace = function(sentence, word, replacement) {
//   if (sentence.includes(word) && sentence.includes(replacement)) {
//     var new_sentence = sentence.replace(word, replacement);
//     return new_sentence;
//   }
//
// };
