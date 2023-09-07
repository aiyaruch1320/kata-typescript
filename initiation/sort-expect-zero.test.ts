describe("exceptZero", () => {
  it("should return new array with sort number but the position of zeros should not be changed", () => {
    expect(exceptZero([3, 2, 1])).toEqual([1, 2, 3]);
    expect(exceptZero([3, 0, 2, 1])).toEqual([1, 0, 2, 3]);
    expect(exceptZero([0, 0])).toEqual([0, 0]);
    expect(exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7])).toEqual([
      1, 3, 0, 0, 4, 4, 5, 0, 7,
    ]);
  });
});

function exceptZero(items: number[]): number[] {
  const indices = findindices(items, 0);
  const newArray = items.filter((item) => item !== 0).sort((a, b) => a - b);
  indices.forEach((index) => {
    newArray.splice(index, 0, 0);
  });
  return newArray;
}

function findindices(items: number[], target: number): number[] {
  const indices: number[] = [];
  items.forEach((item, index) => {
    if (item === target) {
      indices.push(index);
    }
  });
  return indices;
}
