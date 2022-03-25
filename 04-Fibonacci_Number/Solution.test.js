const fibonacci = require('./Solution');

describe('check fibonacci', () => {

    it('should return 0 for input of 0 ', () => {
        expect(fibonacci(0)).toBe(0);
    });
    it('should return 1 for input of 1 ', () => {
        expect(fibonacci(1)).toBe(1);
    });
    it('should return 1 for input of 2 ', () => {
        expect(fibonacci(2)).toBe(1);
    });
    it('should return 2 for input of 3 ', () => {
        expect(fibonacci(3)).toBe(2);
    });
    it('should return 3 for input of 4 ', () => {
        expect(fibonacci(4)).toBe(3);
    });
    it('should return 5 for input of 5 ', () => {
        expect(fibonacci(5)).toBe(5);
    });
    it('should return 8 for input of 6 ', () => {
        expect(fibonacci(6)).toBe(8);
    });
    it('should return 13 for input of 7 ', () => {
        expect(fibonacci(7)).toBe(13);
    });
    it('should return 21 for input of 8 ', () => {
        expect(fibonacci(8)).toBe(21);
    });
    it('should return 34 for input of 9 ', () => {
        expect(fibonacci(9)).toBe(34);
    });
    it('should return 55 for input of 10 ', () => {
        expect(fibonacci(10)).toBe(55);
    });
    
 
});