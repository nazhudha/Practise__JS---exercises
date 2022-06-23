const searchCandies = require('../searchCandies')

describe('searchCandies function', () => {
  it('searches for candies based on search string', () => {
    expect(searchCandies('Ma')).toEqual([ 'Mars', 'Maltesers'])
  })
})