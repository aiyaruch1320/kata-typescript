describe("toTitleCase", () => {
  it("should return word is first charactor is upper case", () => {
    expect(toTitleCase("hello world")).toEqual("Hello World");
    expect(toTitleCase("THE QUICK BROWN FOX")).toEqual("The Quick Brown Fox");
    expect(toTitleCase("JUMPs ovER a LAZy dog")).toEqual(
      "Jumps Over A Lazy Dog"
    );
    expect(toTitleCase("")).toEqual("");
    expect(toTitleCase("the answer is 42")).toEqual("The Answer Is 42");
  });
});

function toTitleCase(sentence: string): string {
  if (sentence.length === 0) return sentence;
  const listOfWords = sentence.toLowerCase().split(" ");
  return listOfWords
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
