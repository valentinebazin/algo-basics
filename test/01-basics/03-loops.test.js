import { pandemicForecast } from "../../main/01-basics/03-loops"

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
