describe("AcceptablePassword", () => {
  it("password length have more than 6 charactors", () => {
    expect(isAcceptablePassword("short")).toBeFalsy();
  });

  it("should contain at least one digit but cannot consist of just digits without charactor", () => {
    expect(isAcceptablePassword("al1123213")).toBeTruthy();
    expect(isAcceptablePassword("1123213")).toBeFalsy();
  });

  it("the length should be bigger than 9, previous rule is not required", () => {
    expect(isAcceptablePassword("123423")).toBeFalsy();
    expect(isAcceptablePassword("1234567890")).toBeTruthy();
  });

  it("a string should not contain the word 'password' in any case.", () => {
    expect(isAcceptablePassword("password12345")).toBeFalsy();
    expect(isAcceptablePassword("PASSWORD12345")).toBeFalsy();
    expect(isAcceptablePassword("pass1234word")).toBeTruthy();
  });

  it("should contain at least 3 different (case-sensitive) letters (or digits) even if it is longer than 10", () => {
    expect(isAcceptablePassword("aaaaaaabbaaaaaaaab")).toBeFalsy();
  });
});

function isAcceptablePassword(password: string): boolean {
  const isPasswordMoreThanSix = password.length > 6;
  const isPasswordMoreThanNine = password.length > 9;
  const isPasswordHaveAnyDigiAndNotContainOnlyDigi =
    /\d/.test(password) && password.split("").some((w) => isNaN(+w));
  const isNotContainPassword = !/password/gi.test(password);
  const uniqueCharactersAtLeastThree = new Set(password).size > 2;

  return (
    isPasswordMoreThanSix &&
    (isPasswordMoreThanNine || isPasswordHaveAnyDigiAndNotContainOnlyDigi) &&
    isNotContainPassword &&
    uniqueCharactersAtLeastThree
  );
}
