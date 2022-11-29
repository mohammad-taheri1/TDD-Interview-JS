const factorialWithException = require("./factorialWithException");

// General Tests
describe("existance of functions:", () => {
  it("defined", () => {
    expect(factorialWithException).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof factorialWithException).toEqual("function");
  });
});

// Functionality tests
describe("functionality", () => {

  it("should Throw an Exception for input of -5", () => {
    expect(() => factorialWithException(-5)).toThrow();
  });


  it("should return 1 for input of 0", () => {
    expect(factorialWithException(0)).toBe(1);
  });

  it("should return 1 for input of 1", () => {
    expect(factorialWithException(1)).toBe(1);
  });

  it("should return 2 for input of 2", () => {
    expect(factorialWithException(2)).toBe(2);
  });

  it("should return 6 for input of 3", () => {
    expect(factorialWithException(3)).toBe(6);
  });

  it("should return 24 for input of 4", () => {
    expect(factorialWithException(4)).toBe(24);
  });

  it("should return 120 for input of 5", () => {
    expect(factorialWithException(5)).toBe(120);
  });

  it("should return 720 for input of 6", () => {
    expect(factorialWithException(6)).toBe(720);
  });

  it("should return 5040 for input of 7", () => {
    expect(factorialWithException(7)).toBe(5040);
  });

  it("should return 40320 for input of 8", () => {
    expect(factorialWithException(8)).toBe(40320);
  });

  it("should return 362880 for input of 9", () => {
    expect(factorialWithException(9)).toBe(362880);
  });

  it("should return 3628800 for input of 10", () => {
    expect(factorialWithException(10)).toBe(3628800);
  });

  it("should return 39916800 for input of 11", () => {
    expect(factorialWithException(11)).toBe(39916800);
  });

  it("should return 479001600 for input of 12", () => {
    expect(factorialWithException(12)).toBe(479001600);
  });
});
