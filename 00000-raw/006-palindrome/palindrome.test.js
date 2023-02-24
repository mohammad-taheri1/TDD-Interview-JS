const palindrome = require("./palindrome");

// General Tests
describe("existance of functions:", () => {
 
  it("defined", () => {
    expect(palindrome).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
});

// Functionality
describe("functionality", () => {
  
  it('should return true for input of "mam" ', () => {
    expect(palindrome("mam")).toBe(true);
  });

  it('should return false for input of "mama" ', () => {
    expect(palindrome("mama")).toBe(false);
  });

  it('should return true for input of "Mammam" ', () => {
    expect(palindrome("Mammam")).toBe(true);
  });

  it('should return false for input of "asdf" ', () => {
    expect(palindrome("asdf")).toBe(false);
  });

  it('should return true for input of "asdfdsa" ', () => {
    expect(palindrome("asdfdsa")).toBe(true);
  });

});
