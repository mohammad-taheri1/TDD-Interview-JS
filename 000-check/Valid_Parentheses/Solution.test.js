const validParentheses = require('./Solution');

describe('check validParentheses', () => {
   
    it('should return true for input of "()" ', () => {
        expect(validParentheses("()")).toBe(true);
    });

    it('should return true for input of "[]" ', () => {
        expect(validParentheses("[]")).toBe(true);
    });

    it('should return true for input of "{}" ', () => {
        expect(validParentheses("{}")).toBe(true);
    });

    it('should return true for input of "(){}[]" ', () => {
        expect(validParentheses("(){}[]")).toBe(true);
    });

    it('should return true for input of "([{}])" ', () => {
        expect(validParentheses("([{}])")).toBe(true);
    });

    it('should return false for input of "(}" ', () => {
        expect(validParentheses("(}")).toBe(false);
    });

    it('should return false for input of "(]" ', () => {
        expect(validParentheses("(]")).toBe(false);
    });

    it('should return false for input of "[(])" ', () => {
        expect(validParentheses("[(])")).toBe(false);
    });

    it('should return true for input of "({})[({})]" ', () => {
        expect(validParentheses("({})[({})]")).toBe(true);
    });

    it('should return false for input of "(})" ', () => {
        expect(validParentheses("(})")).toBe(false);
    });

    it('should return true for input of "(({{[[]]}}))" ', () => {
        expect(validParentheses("(({{[[]]}}))")).toBe(true);
    });

    it('should return true for input of "{}({})[]" ', () => {
        expect(validParentheses("{}({})[]")).toBe(true);
    });

    it('should return false for input of ")(}{][" ', () => {
        expect(validParentheses(")(}{][")).toBe(false);
    });

    it('should return false for input of "())({}}{()][][" ', () => {
        expect(validParentheses("())({}}{()][][")).toBe(false);
    });

    it('should return false for input of "(((({{" ', () => {
        expect(validParentheses("(((({{")).toBe(false);
    });

    it('should return false for input of "}}]]))}])" ', () => {
        expect(validParentheses("}}]]))}])")).toBe(false);
    });

    it('should return false for input of "{{}}}" ', () => {
        expect(validParentheses("{{}}}")).toBe(false);
    });
});