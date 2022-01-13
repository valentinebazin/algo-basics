import { maximizeProfits } from "../../main/03-advanced/trading"

describe('should maximize the profits', () => {
    test('maximizeProfits([1, 2, 3, 4, 5]) = [1, 5]', () => expect(maximizeProfits([1, 2, 3, 4, 5])).toEqual([1, 5]))
    test('maximizeProfits([2, 1, 5, 3, 4]) = [1, 5]', () => expect(maximizeProfits([2, 1, 5, 3, 4])).toEqual([1, 5]))
    test('maximizeProfits([2, 10, 1, 3]) = [2, 10]', () => expect(maximizeProfits([2, 10, 1, 3])).toEqual([2, 10]))
    test('maximizeProfits([2, 1, 2, 11]) = [1, 11]', () => expect(maximizeProfits([2, 1, 2, 11])).toEqual([1, 11]))
})