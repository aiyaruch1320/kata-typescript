describe("factorial", () => {
  it("should return the factorial of number input", () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(4)).toEqual(24);
    expect(factorial(5)).toEqual(120);
  });
});

function factorial(n: number): number {
  let sum = 1;
  for (let i = 1; i < n; i++) {
    sum = (i + 1) * sum;
  }

  return sum;
}
