const palindromeInteger = require("./palindromeInteger");

// گروه تست های مربوط به وجود داشتن توابع
// General Tests
describe("existance of functions:", () => {
 
  it("defined", () => {
    expect(palindromeInteger).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof palindromeInteger).toEqual("function");
  });
});

 

// گروه تست های مربوط به عملکرد صحیح توابع
describe("functionality", () => {
 
  // عملکرد ورودی صفر
  it("handles 0 as an input", () => {
    expect(palindromeInteger(0)).toEqual(false);
  });

  // عملکرد ورودی مثبت
  it("validates reverse positive numbers results", () => {
    expect(palindromeInteger(1)).toBe(true);
    expect(palindromeInteger(10)).toBe(false);
    expect(palindromeInteger(121)).toBe(true);
    expect(palindromeInteger(1221)).toBe(true);
    expect(palindromeInteger(12321)).toBe(true);
    expect(palindromeInteger(12322)).toBe(false);
    expect(palindromeInteger(1234321)).toBe(true);
    expect(palindromeInteger(12564321)).toBe(false);
  });

  // عملکرد ورودی منفی
  it("validates reverse negative numbers results", () => {
    expect(palindromeInteger(-1)).toBe(true);
    expect(palindromeInteger(-10)).toBe(false);
    expect(palindromeInteger(-121)).toBe(true);
    expect(palindromeInteger(-1221)).toBe(true);
    expect(palindromeInteger(-12321)).toBe(true);
    expect(palindromeInteger(-12322)).toBe(false);
    expect(palindromeInteger(-1234321)).toBe(true);
    expect(palindromeInteger(-12564321)).toBe(false);
  });
});