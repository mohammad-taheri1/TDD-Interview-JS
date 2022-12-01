const arrayFactorialWithException = require("./arrayFactorialWithException");

// General Tests
describe("existance of functions:", () => {
  it("defined", () => {
    expect(arrayFactorialWithException).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof arrayFactorialWithException).toEqual("function");
  });
});

// Functionality tests
describe("functionality", () => {
  it("should return [6,120] for input [3,5] ", () => {
    expect(arrayFactorialWithException([3, 5])).toEqual([6, 120]);
  });

  it("should return [6,24] for input [3,5] ", () => {
    expect(arrayFactorialWithException([3, 4])).toEqual([6, 24]);
  });

  it("should return [6,40320,362880] for input [3,8,9]", () => {
    expect(arrayFactorialWithException([3, 8, 9])).toEqual([6, 40320, 362880]);
  });

  it("Should throw an error for input of [3,-2]", () => {
    expect(() => arrayFactorialWithException([3, -2])).toThrow();
  });

  it("Should throw an error for input of [-4,18]", () => {
    expect(() => arrayFactorialWithException([-4, 18])).toThrow();
  });
});
