import { celciusToFahrenheit, helloWorld, sum } from '../../main/01-basics/01-variables.js'

test('should return "Hello, world!"', () => {
  expect(helloWorld()).toEqual('Hello, world!')
});

describe('should convert Celcius degrees to Fahrenheit', () => {
  test("32 °C = 89.6 °F", () => expect(celciusToFahrenheit(32)).toEqual(89.6))
  test("1 °C = 33.8 °F", () => expect(celciusToFahrenheit(1)).toEqual(33.8))
  test("-10 °C = 14 °F", () => expect(celciusToFahrenheit(-10)).toEqual(14))
})

describe('should apply sum of two numbers', () => {
  test('0 + 0 = 0', () => expect(sum(0, 0)).toEqual(0))
  test('1 + 1 = 2', () => expect(sum(1, 1)).toEqual(2))
  test('5 + 8 = 13', () => expect(sum(5, 8)).toEqual(13))
  test('-4 + 2 = -2', () => expect(sum(-4, 2)).toEqual(-2))
})
