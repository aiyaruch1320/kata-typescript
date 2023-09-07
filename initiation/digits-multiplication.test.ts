describe("factorial", () => {
  it("should calculate the product of the digits excluding any zeroes", () => {
    expect(digitsMultip(1)).toEqual(1);
    expect(digitsMultip(123)).toEqual(6);
    expect(digitsMultip(123405)).toEqual(120);
    expect(digitsMultip(999)).toEqual(729);
    expect(digitsMultip(1000)).toEqual(1);
  });
});

function digitsMultip(data: number): number {
  return data
    .toString()
    .split("")
    .reduce((prev, curr) => (+curr !== 0 ? prev * +curr : prev), 1);
}
