const isPalindrome = require('./Solution');

describe('check isPalindrome', () => {

    it('should return false for input of "mammadi" ', () => {
        expect(isPalindrome("mammadi")).toBe(false);
    });

    it('should return true for input of "mammam" ', () => {
        expect(isPalindrome("mammam")).toBe(true);
    });

    it('should return true for input of "Mammam" ', () => {
        expect(isPalindrome("Mammam")).toBe(true);
    });

    it('should return false for input of "rpggpc" ', () => {
        expect(isPalindrome("rpggpc")).toBe(false);
    });
 
});