describe('findReplace', function() {
  it('find a word in a sentence and replace with another word', function() {
    expect(findReplace("eat more candy", "candy", "vegetables")).to.equal("eat more vegetables");
  });
});
