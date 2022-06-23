const searchCandies = require('../searchCandies')

describe('searchCandies function', () => {
  it('searches for candies based on search string', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers'])
  })

  it('searhces for candies and price less than max input', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
  })

  it('searhces for candies and price less than max input', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  })

  it('searhces for candies and price less than max input', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  })
})