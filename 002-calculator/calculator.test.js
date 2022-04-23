const Calculator = require("./calculator");

const myCalculator = new Calculator();


// گروه تست های مربوط به وجود داشتن توابع
describe("existance", () => {
  test("Add function exists", () => {
    expect(typeof myCalculator.Add).toBe("function");
  });

  test("Sub function exists", () => {
    expect(typeof myCalculator.Sub).toBe("function");
  });

  test("Mul function exists", () => {
    expect(typeof myCalculator.Mul).toBe("function");
  });

  test("Div function exists", () => {
    expect(typeof myCalculator.Div).toBe("function");
  });
});


// گروه تست های مربوط به عملکرد صحیح توابع
describe("functionality", () => {
    test("Add function works properly", () => {
      expect(myCalculator.Add(8,3)).toBe(11);
    });
  
    test("Sub function works properly", () => {
      expect(myCalculator.Sub(8,3)).toBe(5);
    });
  
    test("Mul function works properly", () => {
      expect(myCalculator.Mul(8,3)).toBe(24);
    });
  
    test("Div function works properly", () => {
      expect(myCalculator.Div(8,3)).toBe(2);
    });
  });
