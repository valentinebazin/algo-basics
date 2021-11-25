import { celciusToFahrenheit, helloWorld, isGreaterThan8, sum, xor, xnor, divide } from '../../main/01-basics/01-variables.js'

/** HELLO WORLD */
test('should return "Hello, world!"', () => {
    expect(helloWorld()).toEqual('Hello, World!')
})

/** SUM */
describe('should apply sum of two numbers', () => {
    test('0 + 0 = 0', () => expect(sum(0, 0)).toEqual(0))
    test('1 + 1 = 2', () => expect(sum(1, 1)).toEqual(2))
    test('5 + 8 = 13', () => expect(sum(5, 8)).toEqual(13))
    test('-4 + 2 = -2', () => expect(sum(-4, 2)).toEqual(-2))
})

/** CELCIUS TO FAHRENHEIT */
describe('should convert Celcius degrees to Fahrenheit', () => {
    test("32 °C = 89.6 °F", () => expect(celciusToFahrenheit(32)).toEqual(89.6))
    test("1 °C = 33.8 °F", () => expect(celciusToFahrenheit(1)).toEqual(33.8))
    test("-10 °C = 14 °F", () => expect(celciusToFahrenheit(-10)).toEqual(14))
})

/** GREATER THAN 8 */
describe('should find words longer than 8', () => {
    test("'hello' is 5 letters long", () => expect(isGreaterThan8('hello')).toEqual(false))
    test("'javascript' is 10 letters long", () => expect(isGreaterThan8('javascript')).toEqual(true))
    test("'' is 0 letters long", () => expect(isGreaterThan8('')).toEqual(false))
})

/** XOR */
describe('xor', () => {
    test("true xor true is false", () => expect(xor(true, true)).toEqual(false))
    test("true xor false is true", () => expect(xor(true, false)).toEqual(true))
    test("false xor false is false", () => expect(xor(false, false)).toEqual(false))
    test("false xor true is true", () => expect(xor(false, true)).toEqual(true))
})

/** XNOR */
describe('xnor', () => {
    test("true xnor true is false", () => expect(xnor(true, true)).toEqual(true))
    test("true xnor false is true", () => expect(xnor(true, false)).toEqual(false))
    test("false xnor false is false", () => expect(xnor(false, false)).toEqual(true))
    test("false xnor true is true", () => expect(xnor(false, true)).toEqual(false))
})

/** DIVISION */
describe('should return the result of a division', () => {
    test("7 divide 3 = 2 with 1 rest", () => expect(divide(7, 3)).toEqual('quotient = 2, remainder = 1'))
    test("23 divide 5 = 4 with 3 rest", () => expect(divide(23, 5)).toEqual('quotient = 4, remainder = 3'))
    test("12 divide 3 = 4 with 0 rest", () => expect(divide(12, 3)).toEqual('quotient = 4, remainder = 0'))
})
