import { closestTo100AmongArray, find, fizzBuzz, pandemicForecast } from "../../main/01-basics/03-loops"

describe('should find the index of an element in an array', () => {
    test('3 is at index 4 in [1, 2, 9, 5, 3, 18, 4, 3]', () => expect(find([1, 2, 9, 5, 3, 18, 4, 3], 3)).toEqual(4))
    test('"apple" is at index 2 in ["banana", "pineapple", "apple", "strawberry"]', () => expect(find(["banana", "pineapple", "apple", "strawberry"], 'apple')).toEqual(2))
})

describe('should find the number which is closest to 100 among an array of numbers', () => {
    test('among [1, 4, 45, 104, 82, -5, 23] 104 is closest to 100', () => expect(closestTo100AmongArray([1, 4, 45, 104, 82, -5, 23])).toEqual(104))
    test('among [23, 56, 82, 103, 24, 99] 99 is closest to 100', () => expect(closestTo100AmongArray([23, 56, 82, 103, 99, 24])).toEqual(99))
    test('among [48, 20, 50, 34, 105, 28] 105 is closest to 100', () => expect(closestTo100AmongArray([48, 20, 50, 34, 105, 28])).toEqual(105))
})

describe('pandemic test', () => {
    test('1 after 3 days becomes 8', () => {
        expect(pandemicForecast(1, 3)).toEqual(8)
    })
    test('10 after 5 days becomes 320', () => {
        expect(pandemicForecast(10, 5)).toEqual(320)
    })
    test('125 after 3 days becomes 1000', () => {
        expect(pandemicForecast(125, 3)).toEqual(1000)
    })
})

describe('fizz buzz', () => {
    test('fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) is "12fizz45fizzbuzz8fizz1011fizz13buzzfizz"', () => {
        expect(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toEqual("12fizz45fizzbuzz8fizz1011fizz13buzzfizz")
    })
    test('fizzBuzz([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) is "fizzbuzz13fizz1110fizz8buzzfizz54fizz21"', () => {
        expect(fizzBuzz([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual("fizzbuzz13fizz1110fizz8buzzfizz54fizz21")
    })
})
