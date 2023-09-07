describe("countVowels", () => {
  it("should return number of vowels in sentense", () => {
    expect(countVowels("hello")).toEqual(2);
    expect(countVowels("openai")).toEqual(4);
  });
});

function countVowels(text: string): number {
  return text.match(/[AEIOUaeiou]/g)?.length ?? 0;
}
