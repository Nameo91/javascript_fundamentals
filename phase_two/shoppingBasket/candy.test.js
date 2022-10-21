const Candy = require('./candy');

describe('Candy', () => {
  it('returns a candy name', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
  });

  it('returns a candy price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99);
  });
})