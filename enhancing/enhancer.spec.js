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
        it('should increase item\'s enhancement by 1', () => {
            const item = {
                name: 'weapon',
            enhancement: 10,
            durability: 50
        };

        const actualSucceed = succeed(item);

        expect(actualSucceed).toMatchObject({...item, enhancement: 11})


        }); // end of it success test

        it('item enhancement should remain 20', () => {
            const maxedEnhancement = {
                name: 'wand',
                enhancement: 20,
                durability: 50
            }
            
            expect(succeed(maxedEnhancement)).toMatchObject({...maxedEnhancement, enhancement: 20})
       
        });
    }); // end of success testing function

    describe('should fail item', () => {
        it('enhancement fail less than 15, increase durability by 5', () => {
            const lowEnchancement = {
                name: 'woodenstick',
                enhancement: 1,
                durability: 20
            }

            const actualEnchancement = fail(lowEnchancement);

            expect(actualEnchancement).toMatchObject({...lowEnchancement, durability: 15})
        });

        it('enhancement is at 15 or 16', () => {
            const fifthteenEnchancement = {
                name: 'woodenstick',
                enhancement: 15,
                durability: 20
            }

            const sixteenEnchancement = {
                name: 'woodenstick with brace',
                enhancement: 16,
                durability: 19
            }

            const actualEnchancement = fail(fifthteenEnchancement);

            expect(actualEnchancement).toMatchObject({...fifthteenEnchancement, durability: 10})
            expect(fail(sixteenEnchancement)).toMatchObject({...sixteenEnchancement, durability: 9})
        });

        it('enhancement is at 16 or greater, lower enhancement by 1', () => {
            const highestEnchancement = {
                name: 'arrowblade',
                enhancement: 20,
                durability: 50
            }

            const seventeenLvlEnchancement = {
                name: 'sledgehammer',
                enhancement: 17,
                durability: 99
            }

            const actualEnchancement = fail(highestEnchancement);

            expect(actualEnchancement).toMatchObject({...highestEnchancement, durability: 40, enhancement: 19})
            expect(fail(seventeenLvlEnchancement)).toMatchObject({...seventeenLvlEnchancement, durability: 89, enhancement: 16})
        });
    }); // end of fail test


}); // end of 'Enhancers' testing