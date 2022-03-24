const isPalindrome = require('./isPalindromeSolution');

describe('check validParentheses', () => {
   
    it('should return true for input of 121 ', () => {
        expect(isPalindrome(121)).toBe(true);
    });

    it('should return false for input of -121 ', () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    it('should return false for input of 10 ', () => {
        expect(isPalindrome(10)).toBe(false);
    });

    // it('should return false for input of "mammadi" ', () => {
    //     expect(isPalindrome("mammadi")).toBe(false);
    // });

    // it('should return true for input of "mammam" ', () => {
    //     expect(isPalindrome("mammam")).toBe(true);
    // });

    // it('should return false for input of "rpggpc" ', () => {
    //     expect(isPalindrome("rpggpc")).toBe(false);
    // });
 
    
});