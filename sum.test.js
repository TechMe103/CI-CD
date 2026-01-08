import sum from './sum.js';

//simple test case to check the sum function
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


describe('Sum Function Tests', () => {
    test('should return 5 for sum(2, 3)', () => {
        expect(sum(2, 3)).toBe(5);
    });

    test('should return -10 for sum(-5, -5)', () => {
        expect(sum(-5, -5)).toBe(-10);
    });
});