import {factorial, fibonacci} from "../../main/01-basics/04-functions"

/** FIBONACCI */
describe('correctly computes the fibonacci sequence', () => {
    test('fibonacci(0) = 0', () => expect(fibonacci(0)).toEqual(0))
    test('fibonacci(1) = 1', () => expect(fibonacci(1)).toEqual(1))
    test('fibonacci(2) = 1', () => expect(fibonacci(2)).toEqual(1))
    test('fibonacci(3) = 0', () => expect(fibonacci(3)).toEqual(2))
    test('fibonacci(4) = 0', () => expect(fibonacci(4)).toEqual(3))
    test('fibonacci(5) = 0', () => expect(fibonacci(5)).toEqual(5))
    test('fibonacci(8) = 0', () => expect(fibonacci(8)).toEqual(21))
})

/** FACTORIAL */
describe('correctly computes the factorial number', () => {
    test('factorial(0) = 0', () => expect(factorial(0)).toEqual(1))
    test('factorial(1) = 1', () => expect(factorial(1)).toEqual(1))
    test('factorial(2) = 1', () => expect(factorial(2)).toEqual(2))
    test('factorial(3) = 0', () => expect(factorial(3)).toEqual(6))
    test('factorial(4) = 0', () => expect(factorial(4)).toEqual(24))
    test('factorial(5) = 0', () => expect(factorial(5)).toEqual(120))
    test('factorial(8) = 0', () => expect(factorial(8)).toEqual(40320))
})