const isPalindrome = require('./Solution');

describe('check isPalindrome', () => {
   
    it('should return true for input of 121 ', () => {
        expect(isPalindrome(121)).toBe(true);
    });

    it('should return false for input of -121 ', () => {
        expect(isPalindrome(-121)).toBe(false);
    });

    it('should return false for input of 10 ', () => {
        expect(isPalindrome(10)).toBe(false);
    });
    
});