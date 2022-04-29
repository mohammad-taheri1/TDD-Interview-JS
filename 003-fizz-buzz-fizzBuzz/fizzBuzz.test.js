const fizzBuzz = require("./fizzBuzz");

// گروه تست های مربوط به وجود داشتن توابع
describe("existance of functions:", () => {
  it("defined", () => {
    expect(fizzBuzz).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof fizzBuzz).toEqual("function");
  });
});

// گروه تست های مربوط به عملکرد صحیح توابع
describe("functionality", () => {
  
  // تست ورودی صفر
  it("returns 'zero' for input of 0", () => {
    expect(fizzBuzz(0)).toBe("zero");
  });

  // تست ورودی بخش پذیر بر 3
  it("returns fizz for numbers with multiply of 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(18)).toBe("fizz");
    expect(fizzBuzz(24)).toBe("fizz");
    expect(fizzBuzz(48)).toBe("fizz");
    expect(fizzBuzz(93)).toBe("fizz");
    expect(fizzBuzz(1236)).toBe("fizz");
  });

  // تست ورودی بخش پذیر بر 5
  it("returns buzz for numbers with multiply of 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(20)).toBe("buzz");
    expect(fizzBuzz(50)).toBe("buzz");
    expect(fizzBuzz(80)).toBe("buzz");
    expect(fizzBuzz(200)).toBe("buzz");
    expect(fizzBuzz(1000)).toBe("buzz");
  });

  // تست ورودی بخش پذیر بر 15
  it("returns fizzbuzz for numbers with multiply of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
    expect(fizzBuzz(30)).toBe("fizzbuzz");
    expect(fizzBuzz(45)).toBe("fizzbuzz");
    expect(fizzBuzz(600)).toBe("fizzbuzz");
    expect(fizzBuzz(1500)).toBe("fizzbuzz");
    expect(fizzBuzz(6000)).toBe("fizzbuzz");
  });

    // تست ورودی های دیگر
    it("returns input number for other inputs", () => {
      expect(fizzBuzz(4)).toBe(4);
      expect(fizzBuzz(1)).toBe(1);
      expect(fizzBuzz(17)).toBe(17);
      expect(fizzBuzz(442)).toBe(442);
      expect(fizzBuzz(13)).toBe(13);
      expect(fizzBuzz(148)).toBe(148);
      expect(fizzBuzz(202)).toBe(202);
    });

});
