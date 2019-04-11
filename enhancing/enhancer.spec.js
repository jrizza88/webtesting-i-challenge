// const enhancer = require('./enhancer.js');

const {  succeed, fail,  repair, get } = require('./enhancer.js');
// test away!

describe('Enhancers', () => {
    
    describe('repair function testing', () => {
        it('should repair the item in need', () => {
            const item = {
                name: 'weapon',
                enhancement: 10,
                durability: 50
            }

            const magicItem = {
                name: 'wand',
                enhancement: 10,
                durability: 80
            }

            const expectedItem = {
                name: 'weapon',
                enhancement: 10,
                durability: 100
            }

            const actual = repair(item);
            const repairWand = repair(magicItem);

            expect(actual).toEqual(expectedItem);
         

        });
    }); // end of repair testing function

    describe('succeed function testing', () => {
        it('should increase item\'s enhancement by 1' () =>{

        });
    }); // end of success testing function


}); // end of 'Enhancers' testing