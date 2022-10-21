const searchCandies = require('./searchCandies')

describe("searchCandies",() => {
  it('finds the candies with name and price', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('finds the candies with name and price', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  })

  it('finds the candies with name and price', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  })

  it('finds the candies with name and price', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  })

  it('finds the candies with name and price', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  })

  it('finds the candies with name and price', () => {
    expect(searchCandies('MA', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  })
})