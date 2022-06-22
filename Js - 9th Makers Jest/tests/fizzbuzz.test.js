const fizzBuzz = require('../fizzBuzz')

describe('fizzBuzz Function', () => {
  it('returns Fizz when multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })
  it('retuns Buzz when multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  it('takes in any other number return that number', () => {
    expect(fizzBuzz(8)).toBe(8)
})

  it('is a multiple of 3 and 5 return FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })

  it('another example of multiple of 3', () => {
    expect(fizzBuzz(18)).toBe('Fizz')
  })

  it('another example of multiple of 5', () => {
    expect(fizzBuzz(20)).toBe('Buzz')
  })

});
