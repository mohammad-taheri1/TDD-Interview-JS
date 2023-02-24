const reverseString = require("./reverseString");

// گروه تست های مربوط به وجود داشتن توابع
describe("existance of functions:", () => {
  it("defined", () => {
    expect(reverseString).toBeDefined();
  });

  it("is a function", () => {
    expect(typeof reverseString).toEqual("function");
  });
});

// گروه تست های مربوط به عملکرد صحیح توابع
describe("functionality", () => {
  
  test('it should return dcba for input of abcd', () => {
    expect(reverseString('abcd')).toEqual('dcba');
  });
  
  it('should return damamila for input of alimamad', () => {
    expect(reverseString('alimamad')).toEqual('damamila');
  });
  
  it('should return aliali for input of ilaila', () => {
    expect(reverseString('ilaila')).toEqual('aliali');
  });
  
  it('should return دمحم for input of محمد', () => {
    expect(reverseString('محمد')).toEqual('دمحم');
  });
   
});
