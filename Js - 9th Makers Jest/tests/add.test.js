// 1 - FIRST TRY --------->>>>>>>

// const add = require('./add');

// describe('add', () => {
//   it("adds 2 and 2 ", () => {
//       expect(add(2, 2)).toBe(4)
//   })

//     it("adds 0 and 5 ", () => {
//         expect(add(0, 5)).toBe(5)
//     })
// });

// 2 - SECOND TRY --------->>>>>>>

const add = require('../add');
const sub = require('../add');

describe('Subtract two numbers', () => {
    it('10 minus 5 to equal 5', () => {
        expect(sub(10, 5)).toBe(5)
    })
})

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toEqual(4)
    });

    it('adds 0 and 5', () => {
        expect(add(0, 5)).toEqual(5)
    })
});

