describe('findReplace', function() {
  it('find a word in a sentence and replace with a new word', function() {
    expect(findReplace("eat more candy", "candy", "vegetables")).to.equal("eat more vegetables");
  });

  it('find all instances of a word in a sentence and replace with a new word', function() {
    expect(findReplace("cake cake sugar", "cake", "lemon")).to.equal("lemon lemon sugar");
  });
});
