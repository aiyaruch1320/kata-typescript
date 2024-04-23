describe("checkPin", () => {
  it("should return true when the pin is all duplicates", () => {
    expect(checkPin("111111")).toBeTruthy();
  });

  it("should return true when the pin is more than 3 consecutive duplicates", () => {
    expect(checkPin("111222")).toBeTruthy();
    expect(checkPin("111987")).toBeTruthy();
    expect(checkPin("235558")).toBeTruthy();
    expect(checkPin("012333")).toBeTruthy();
  });

  it("should return true when the pin first couple is duplicate with the second couple and third", () => {
    expect(checkPin("121212")).toBeTruthy();
    expect(checkPin("454545")).toBeTruthy();
    expect(checkPin("454577")).toBeFalsy();
  });

  it("should return true when the pin 3 digit sequence number is order", () => {
    expect(checkPin("123456")).toBeTruthy();
    expect(checkPin("654321")).toBeTruthy();
    expect(checkPin("987123")).toBeTruthy();
    expect(checkPin("088456")).toBeTruthy();
    expect(checkPin("001230")).toBeTruthy();
  });

  it("should return true when the pin position 1,2 is same number and order 3,4 and 5,6", () => {
    expect(checkPin("112233")).toBeTruthy();
    expect(checkPin("334455")).toBeTruthy();
    expect(checkPin("886655")).toBeFalsy();
    expect(checkPin("246810")).toBeFalsy();
  });
});

const checkPin = (pin: string): boolean => {
  const isAllDuplicates = /(\s?\d\s?)(\s?\1){2,}/.test(pin);
  const isCouperDuplicates = /(\d\d)(\1)(\1)/.test(pin);
  const isOrderedPin = (orderedNumber: string) =>
    /(012|123|234|345|456|567|678|789|890|098|987|876|765|654|543|432|321|210)/.test(
      orderedNumber
    );
  const coupleOrderedPin = pin.match(/(\d)\1(\d)\2(\d)\3/) ?? "";
  const orderedPin =
    coupleOrderedPin[1] + coupleOrderedPin[2] + coupleOrderedPin[3];
  const isCoupleOrderedPin = isOrderedPin(orderedPin);

  return (
    isAllDuplicates ||
    isCouperDuplicates ||
    isOrderedPin(pin) ||
    isCoupleOrderedPin
  );
};
