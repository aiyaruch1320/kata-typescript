describe("changingDirection", () => {
  it("should return count number when changing direction", () => {
    expect(changingDirection([1, 2, 3, 4, 5])).toEqual(0);
    expect(changingDirection([1, 2, 3, 2, 1])).toEqual(1);
    expect(changingDirection([1, 2, 2, 1, 2, 2])).toEqual(2);
    expect(changingDirection([1, 2, 3, 5, 4, 2, 5, 7, 8, 3, 2, 1])).toEqual(3);
    expect(changingDirection([4, 3, 2, 3])).toEqual(1);
    expect(
      changingDirection([6, 6, 6, 4, 1, 2, 5, 9, 7, 8, 5, 9, 4, 2, 6])
    ).toEqual(7);
    expect(changingDirection([3, 3, 3, 4])).toEqual(0);
  });
});

function changingDirection(nums: number[]): number {
  let directionCount = 0;
  let directionTrend = 0;

  for (let i = 1; i < nums.length; i++) {
    let different = nums[i] - nums[i - 1];
    let currentTrend = different > 0 ? 1 : -1;
    if (different === 0 || directionTrend === currentTrend) continue;
    if (directionTrend !== 0) directionCount++;
    directionTrend = currentTrend;
  }

  return directionCount;
}
