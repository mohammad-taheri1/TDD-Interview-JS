const factorial = require("./factorial");

// گروه تست های مربوط به وجود داشتن توابع
// General Tests
describe("existance of functions:", () => {
  it("defined", () => {
    expect(factorial).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof factorial).toEqual("function");
  });
});

// Functionality tests
describe("functionality", () => {
  it("should return 1 for input of 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 for input of 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 for input of 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 for input of 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 for input of 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return 120 for input of 5", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return 720 for input of 6", () => {
    expect(factorial(6)).toBe(720);
  });

  it("should return 5040 for input of 7", () => {
    expect(factorial(7)).toBe(5040);
  });

  it("should return 40320 for input of 8", () => {
    expect(factorial(8)).toBe(40320);
  });

  it("should return 362880 for input of 9", () => {
    expect(factorial(9)).toBe(362880);
  });

  it("should return 3628800 for input of 10", () => {
    expect(factorial(10)).toBe(3628800);
  });

  it("should return 39916800 for input of 11", () => {
    expect(factorial(11)).toBe(39916800);
  });

  it("should return 479001600 for input of 12", () => {
    expect(factorial(12)).toBe(479001600);
  });
});
