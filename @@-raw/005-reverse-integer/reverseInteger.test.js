const reverseInteger = require("./reverseInteger");

// گروه تست های مربوط به وجود داشتن توابع
describe("existance of functions:", () => {
  it("defined", () => {
    expect(reverseInteger).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof reverseInteger).toEqual("function");
  });
});

// گروه تست های مربوط به عملکرد صحیح توابع
describe("functionality", () => {
 
  // عملکرد ورودی صفر
  it("handles 0 as an input", () => {
    expect(reverseInteger(0)).toEqual(0);
  });

  // عملکرد ورودی مثبت
  it("reverse positive numbers", () => {
    expect(reverseInteger(3)).toEqual(3);
    expect(reverseInteger(1383)).toEqual(3831);
    expect(reverseInteger(1200)).toEqual(21);
    expect(reverseInteger(142)).toEqual(241);
    expect(reverseInteger(141)).toEqual(141);
  });

  // عملکرد ورودی منفی
  it("reverse negative numbers", () => {
    expect(reverseInteger(-3)).toEqual(-3);
    expect(reverseInteger(-1383)).toEqual(-3831);
    expect(reverseInteger(-1200)).toEqual(-21);
    expect(reverseInteger(-142)).toEqual(-241);
    expect(reverseInteger(-141)).toEqual(-141);
  });
});
