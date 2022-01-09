import { closestTo100AmongArray, factorial, fibonacci, find, fizzBuzz, pandemicForecast, reverseString, sort } from "../../main/01-basics/03-loops"

/** FIND ELEMENT INDEX */
describe('should find the index of an element in an array', () => {
    test('3 is at index 4 in [1, 2, 9, 5, 3, 18, 4, 3]', () => expect(find([1, 2, 9, 5, 3, 18, 4, 3], 3)).toEqual(4))
    test('"apple" is at index 2 in ["banana", "pineapple", "apple", "strawberry"]', () => expect(find(["banana", "pineapple", "apple", "strawberry"], 'apple')).toEqual(2))
})

/** REVERSE STRING */
describe('should reverse the characters of a word', () => {
    test('reverse of "word" is "dorw"', () => expect(reverseString('word')).toEqual('drow'))
    test('reverse of "hello" is "olleh"', () => expect(reverseString('hello')).toEqual('olleh'))
    test('reverse of "this is a full sentence" is "ecnetnes lluf a si siht"', () => expect(reverseString('this is a full sentence')).toEqual('ecnetnes lluf a si siht'))
})

/** CLOSEST TO 100 */
describe('should find the number which is closest to 100 among an array of numbers', () => {
    test('among [1, 4, 45, 104, 82, -5, 23] 104 is closest to 100', () => expect(closestTo100AmongArray([1, 4, 45, 104, 82, -5, 23])).toEqual(104))
    test('among [23, 56, 82, 103, 24, 99] 99 is closest to 100', () => expect(closestTo100AmongArray([23, 56, 82, 103, 99, 24])).toEqual(99))
    test('among [48, 20, 50, 34, 105, 28] 105 is closest to 100', () => expect(closestTo100AmongArray([48, 20, 50, 34, 105, 28])).toEqual(105))
})

/** PANDEMIC */
describe('pandemic test', () => {
    test('1 after 3 days becomes 8', () => expect(pandemicForecast(1, 3)).toEqual(8))
    test('10 after 5 days becomes 320', () => expect(pandemicForecast(10, 5)).toEqual(320))
    test('125 after 3 days becomes 1000', () => expect(pandemicForecast(125, 3)).toEqual(1000))
})

/** FIZZ BUZZ */
describe('fizz buzz', () => {
    test('fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) is "12fizz45fizzbuzz8fizz1011fizz13buzzfizz"', () => {
        expect(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toEqual("12fizz45fizzbuzz8fizz1011fizz13buzzfizz")
    })
    test('fizzBuzz([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) is "fizzbuzz13fizz1110fizz8buzzfizz54fizz21"', () => {
        expect(fizzBuzz([15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual("fizzbuzz13fizz1110fizz8buzzfizz54fizz21")
    })
})

/** SORT */
describe('should sort the items in the array', () => {
    test('[1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]', () => expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]))
    test('[10, 5, 2, 8, 4] => [2, 4, 5, 8, 10]', () => expect(sort([10, 5, 2, 8, 4])).toEqual([2, 4, 5, 8, 10]))
    test('[3, 2, 1, 1, 2, 4, 3] => [1, 1, 2, 2, 3, 3, 4]', () => expect(sort([3, 2, 1, 1, 2, 4, 3])).toEqual([1, 1, 2, 2, 3, 3, 4]))
})

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
