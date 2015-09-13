var findReplace = function(sentence, wordToFind, replacementWord) {
  return sentence.replace(new RegExp(wordToFind, 'g'), replacementWord);
};

$(document).ready(function() {
  $("form#find-replace").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var wordToFind = ($("input#word").val());
    var replacementWord = ($("input#replacement").val());
    var newSentence = findReplace(sentence, wordToFind, replacementWord);

    $(".new-sentence").text(newSentence);

    $("#result").show();
    event.preventDefault();
  });
});
