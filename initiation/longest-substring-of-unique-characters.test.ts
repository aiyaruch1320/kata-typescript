describe("longestSubstr", () => {
  it("should return amount length of the longest substring without repeating characters", () => {
    expect(longestSubstr("abcabcbb")).toEqual(3);
    expect(longestSubstr("bbbbb")).toEqual(1);
    expect(longestSubstr("pwwkew")).toEqual(3);
    expect(longestSubstr("abcdef")).toEqual(6);
    expect(longestSubstr("dvdf")).toEqual(3);
  });
});

function longestSubstr(s: string): number {
  let max = 0;
  let start = 0;
  let currentSubStr = 0;
  const map = new Map<string, number>();

  while (currentSubStr < s.length) {
    const char = s[currentSubStr];
    if (map.has(char)) {
      start = map.get(char)! + 1;
    }
    map.set(char, currentSubStr);
    max = Math.max(max, currentSubStr - start + 1);

    currentSubStr++;
  }

  return max;
}
