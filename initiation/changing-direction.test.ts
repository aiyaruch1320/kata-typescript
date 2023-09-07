describe("changingDirection", () => {
  it("xxx", () => {
    expect(changingDirection([1, 2, 3, 4, 5])).toEqual(0);
    expect(changingDirection([1, 2, 3, 2, 1])).toEqual(1);
    expect(changingDirection([1, 2, 2, 1, 2, 2])).toEqual(2);
    expect(changingDirection([1, 2, 3, 5, 4, 2, 5, 7, 8, 3, 2, 1])).toEqual(3);
  });
});

function changingDirection(nums: number[]): number {
  let directionCount = 0;
  let direction = "asc";
  let prevValue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prevValue = nums[i];
      continue;
    }

    if (prevValue > nums[i] && direction === "asc") {
      directionCount += 1;
      direction = "desc";
    } else if (prevValue < nums[i] && direction === "desc") {
      directionCount += 1;
      direction = "asc";
    }

    prevValue = nums[i];
  }

  return directionCount;
}
