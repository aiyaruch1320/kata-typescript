describe("changingDirection", () => {
  it("should return count number when changing direction", () => {
    expect(changingDirection([1, 2, 3, 4, 5])).toEqual(0);
    expect(changingDirection([1, 2, 3, 2, 1])).toEqual(1);
    expect(changingDirection([1, 2, 2, 1, 2, 2])).toEqual(2);
    expect(changingDirection([1, 2, 3, 5, 4, 2, 5, 7, 8, 3, 2, 1])).toEqual(3);
  });
});

function changingDirection(nums: number[]): number {
  let directionCount = 0;
  let direction = Direction.Up;

  for (let i = 1; i < nums.length; i++) {
    if (
      (nums[i] > nums[i - 1] && direction === Direction.Down) ||
      (nums[i] < nums[i - 1] && direction === Direction.Up)
    ) {
      directionCount++;
      direction = direction === Direction.Up ? Direction.Down : Direction.Up;
    }
  }

  return directionCount;
}

enum Direction {
  Up = "up",
  Down = "down",
}
