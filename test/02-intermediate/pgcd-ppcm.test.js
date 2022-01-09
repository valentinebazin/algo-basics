import { gcd, lcm } from "../../main/02-intermediate/pgcd-ppcm"

describe('should compute the GCD of two numbers', () => {
    test('GCD of 1 and 1 is 1', () => expect(gcd(1, 1)).toEqual(1))
    test('GCD of 3 and 6 is 3', () => expect(gcd(3, 6)).toEqual(3))
    test('GCD of 15 and 25 is 5', () => expect(gcd(15, 25)).toEqual(5))
    test('GCD of 12 and 54 is 6', () => expect(gcd(12, 54)).toEqual(6))
    test('GCD of 42 and 56 is 14', () => expect(gcd(42, 56)).toEqual(14))
})

describe('should compute the LCM of two numbers', () => {
    test('LCM of 1 and 1 is 1', () => expect(lcm(1, 1)).toEqual(1))
    test('LCM of 2 and 3 is 6', () => expect(lcm(2, 3)).toEqual(6))
    test('LCM of 5 and 8 is 40', () => expect(lcm(8, 40)).toEqual(40))
    test('LCM of 3 and 6 is 6', () => expect(lcm(3, 6)).toEqual(6))
    test('LCM of 6 and 10 is 30', () => expect(lcm(6, 10)).toEqual(30))
    test('LCM of 8 and 12 is 24', () => expect(lcm(8, 12)).toEqual(24))
})
