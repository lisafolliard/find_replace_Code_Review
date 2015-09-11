var findReplace = function(sentence, wordToFind, replacementWord) {
  return sentence.replace(new RegExp(wordToFind, 'g'), replacementWord);
};

$(document).ready(function() {
  $("form#find_replace").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var wordToFind = ($("input#word").val());
    var replacementWord = ($("input#replacement").val());
    var new_sentence = findReplace(sentence, wordToFind, replacementWord);

    $(".new_sentence").text(new_sentence);

    $("#result").show();
    event.preventDefault();
  });
});
