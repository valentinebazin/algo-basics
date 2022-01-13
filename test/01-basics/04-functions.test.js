import {bubbleSort, factorial, fibonacci} from "../../main/01-basics/04-functions"

/** FIBONACCI */
describe('correctly computes the fibonacci sequence', () => {
    test('fibonacci(0) = 0', () => expect(fibonacci(0)).toEqual(0))
    test('fibonacci(1) = 1', () => expect(fibonacci(1)).toEqual(1))
    test('fibonacci(2) = 1', () => expect(fibonacci(2)).toEqual(1))
    test('fibonacci(3) = 2', () => expect(fibonacci(3)).toEqual(2))
    test('fibonacci(4) = 3', () => expect(fibonacci(4)).toEqual(3))
    test('fibonacci(5) = 5', () => expect(fibonacci(5)).toEqual(5))
    test('fibonacci(8) = 21', () => expect(fibonacci(8)).toEqual(21))
})

/** FACTORIAL */
describe('correctly computes the factorial number', () => {
    test('factorial(0) = 0', () => expect(factorial(0)).toEqual(1))
    test('factorial(1) = 1', () => expect(factorial(1)).toEqual(1))
    test('factorial(2) = 2', () => expect(factorial(2)).toEqual(2))
    test('factorial(3) = 6', () => expect(factorial(3)).toEqual(6))
    test('factorial(4) = 24', () => expect(factorial(4)).toEqual(24))
    test('factorial(5) = 120', () => expect(factorial(5)).toEqual(120))
    test('factorial(8) = 40320', () => expect(factorial(8)).toEqual(40320))
})

/** BUBBLE SORT */
describe('should sort the items in the array', () => {
    test('[1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]', () => expect(bubbleSort([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]))
    test('[10, 5, 2, 8, 4] => [2, 4, 5, 8, 10]', () => expect(bubbleSort([10, 5, 2, 8, 4], 0)).toEqual([2, 4, 5, 8, 10]))
    test('[3, 2, 1, 1, 2, 4, 3] => [1, 1, 2, 2, 3, 3, 4]', () => expect(bubbleSort([3, 2, 1, 1, 2, 4, 3], 0)).toEqual([1, 1, 2, 2, 3, 3, 4]))
})
