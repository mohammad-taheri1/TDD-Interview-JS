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
  it("should Throw an 'negative' Exception for input of -5", () => {
    expect(() => factorialWithException(-5)).toThrow("negative");
  });

  it("should Throw an 'zero' Exception for input of 0", () => {
    expect(() => factorialWithException(0)).toThrow("zero");
  });

  it("should return 1 for input of 1", () => {
    expect(factorialWithException(1)).toBe(1);
  });

  it("should return 120 for input of 5", () => {
    expect(factorialWithException(5)).toBe(120);
  });

  it("should return 3628800 for input of 10", () => {
    expect(factorialWithException(10)).toBe(3628800);
  });
});
