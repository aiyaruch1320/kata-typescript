describe("countVowels", () => {
  it("should return the long word in sentence", () => {
    expect(longestWord("hello world")).toEqual("hello");
    expect(longestWord("this is a sentence")).toEqual("sentence");
  });
});

function longestWord(sentence: string): string {
  return sentence
    .split(" ")
    .reduce((acc, word) => (word.length > acc.length ? word : acc), "");
}
