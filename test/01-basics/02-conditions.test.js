import { absoluteDiff, basicCondition, categorizeWord, closestTo100, is30OrSumIs30, isMultipleOf3OrDivisibleBy7, sumOrTriple } from "../../main/01-basics/02-conditions"

/** BASIC CONDITION */
describe('should find the raspberry', () => {
    test('basicCondition should find a raspberry', () => expect(basicCondition('raspberry')).toEqual('raspberry !'))
    test('basicCondition should exclude other fruits', () => expect(basicCondition('apple')).toEqual('doh !'))
})

/** SUM OR TRIPLE */
describe('should sumOrTriple compute either the sum or triple sum', () => {
    test('1 sumOrTriple 6 = 7', () => expect(sumOrTriple(1, 6)).toEqual(7))
    test('5 sumOrTriple 12 = 17', () => expect(sumOrTriple(5, 12)).toEqual(17))
    test('5 sumOrTriple 5 = 30', () => expect(sumOrTriple(5, 5)).toEqual(30))
    test('12 sumOrTriple 12 = 72', () => expect(sumOrTriple(12, 12)).toEqual(72))
})

/** ABSOLUTE DIFF */
describe('should absoluteDiff compute the expected difference', () => {
    test('absoluteDiff 1 = 50', () => expect(absoluteDiff(1)).toEqual(50))
    test('absoluteDiff -1 = 52', () => expect(absoluteDiff(-1)).toEqual(52))
    test('absoluteDiff -10 = 61', () => expect(absoluteDiff(-10)).toEqual(61))
    test('absoluteDiff 62 = 33', () => expect(absoluteDiff(62)).toEqual(33))
})

/** 30 OR SUM IS 30 */
describe('should find if one is 30 or sum is 30', () => {
    test('30 and 15 is true', () => expect(is30OrSumIs30(30, 15)).toEqual(true))
    test('12 and 30 is true', () => expect(is30OrSumIs30(12, 30)).toEqual(true))
    test('12 and 18 is true', () => expect(is30OrSumIs30(12, 18)).toEqual(true))
    test('15 and 13 is false', () => expect(is30OrSumIs30(15, 13)).toEqual(false))
    test('5 and 76 is false', () => expect(is30OrSumIs30(5, 76)).toEqual(false))
})

/** MUTIPLE OF 3 OR DIVISIBLE BY 7 */
describe('should find multiple of 3 or divisible by 7', () => {
    test('20 is not multiple of 3 or divisible by 7', () => expect(isMultipleOf3OrDivisibleBy7(20)).toEqual(false))
    test('12 is multiple of 3', () => expect(isMultipleOf3OrDivisibleBy7(12)).toEqual(true))
    test('14 is divisible by 7', () => expect(isMultipleOf3OrDivisibleBy7(14)).toEqual(true))
})

/** CLOSEST TO 100 */
describe('should find the number which is closest to 100', () => {
    test('82 is closer to 100 than 24', () => expect(closestTo100(82, 24)).toEqual(82))
    test('102 is closer to 100 than 120', () => expect(closestTo100(120, 102)).toEqual(102))
    test('56 and 56 are equally close to 100', () => expect(closestTo100(56, 56)).toEqual(0))
})

/** CATEGORIZE WORD */
describe('should categorize a word appropriately', () => {
    test('raspberry is a fruit', () => expect(categorizeWord("raspberry")).toEqual("FRUIT"))
    test('paris is a city', () => expect(categorizeWord("paris")).toEqual("CITY"))
    test('cat is an animal', () => expect(categorizeWord("cat")).toEqual("ANIMAL"))
    test('unknown words are correctly handled', () => expect(categorizeWord("firjfgioej")).toEqual("UNKNOWN"))
    
})
