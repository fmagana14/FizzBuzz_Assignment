const fb = require('../fizzbuzz')

test('Sanity check', () => {
    expect(2 + 2).toBe(4);
})

test('FIZZ should be equal to "fizz"', () => {
    expect(fb.FIZZ).toBe('fizz');
})

test('BUZZ should be equal to "buzz"', () => {
    expect(fb.BUZZ).toBe('buzz');
})

test('Test isFizzy to be divisible by 3', () => {
    expect(fb.isFizzy(3)).toBe(true);
})

test('Test isBuzzy to be divisible by 5', () => {
    expect(fb.isBuzzy(5)).toBe(true)
})

test('Test fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(3)).toBe('fizz');
    expect(fb.fizzyBuzzy(5)).toBe('buzz');
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz');
})

test('Test fizzBuzz', () => {
    // const result = fizzBuzz(100)
    // expect(result.count).toBe(100)
    // expect(result.fizz).toBe(27)
    expect(fb.fizzBuzz (100)).toEqual({count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
})
