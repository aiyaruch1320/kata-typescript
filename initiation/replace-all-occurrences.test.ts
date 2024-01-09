describe("replaceAll", () => {
  it("should return a new string where all occurrences of the target substring within the main text are replaced with the replacement substring", () => {
    expect(replaceAll("hello world world", "world", "TypeScript")).toEqual(
      "hello TypeScript TypeScript"
    );
    expect(replaceAll("aaa", "a", "b")).toEqual("bbb");
    expect(replaceAll("replace all the all", "all", "some")).toEqual(
      "replace some the some"
    );
    expect(replaceAll("nothing to replace", "something", "nothing")).toEqual(
      "nothing to replace"
    );
    expect(replaceAll("", "anything", "nothing")).toEqual("");
  });
});

function replaceAll(mainText: string, target: string, repl: string): string {
  const regex = new RegExp(target, "g");
  return mainText.replace(regex, repl);
}
