describe("countVowels", () => {
  it("should return number of vowels in sentense", () => {
    expect(replaceAll("hello world", "world", "TypeScript")).toEqual(
      "hello TypeScript"
    );
    expect(replaceAll("hello world world", "world", "TypeScript")).toEqual(
      "hello TypeScript TypeScript"
    );
    expect(replaceAll("TypeScript is fun", "fun", "awesome")).toEqual(
      "hello TypeScript TypeScript"
    );
  });
});

function replaceAll(mainText: string, target: string, repl: string): string {
  const regex = new RegExp(target, "g");
  return mainText.replace(regex, repl);
}
