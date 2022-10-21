const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('returns Fizz if it is divided by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz if it is divided by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns FizzBuzz if it is divided by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns the number if it is not divided by 3 or 5',() => {
    expect(fizzBuzz(8)).toBe(8);
  });
})

