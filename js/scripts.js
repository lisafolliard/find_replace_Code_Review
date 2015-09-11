var findReplace = function(sentence, word, replacement) {
    return sentence.replace(word, replacement);
};

$(document).ready(function() {
  $("form#find_replace").submit(function(event) {
    var sentence = ($("input#sentence").val());
    var word = ($("input#word").val());
    var replacement = ($("input#replacement").val());
    var new_sentence = findReplace(sentence, word, replacement);

    $(".new_sentence").text(new_sentence);

    $("#result").show();
    event.preventDefault();
  });
});
