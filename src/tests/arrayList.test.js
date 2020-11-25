const { assert, should } = require('chai');
const ArrayList = require('../ArrayList.js');

describe('ArrayList methods', () => {
    describe('myInit', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                expectedSize: 3,
                expectedString: '[1, 2, 3]',
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                expectedSize: 6,
                expectedString: '[1, 2, 3, 4, 5, 6]',
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expectedSize: 9,
                expectedString: '[1, 2, 3, 4, 5, 6, 7, 8, 9]'
            }
        ]; 
        testData.forEach(( {array, expectedSize, expectedString} ) => {
            it(`should return size ${expectedSize} and ${expectedString}`, () => {
                aList.myInit(array);
                
                assert.deepEqual(aList.size, expectedSize);
                assert.strictEqual(aList.myToString(), expectedString);
            });
        });
    });

    describe('myPush', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                arg: 0,
                expectedSize: 4,
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                arg: 0,
                expectedSize: 7,
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                arg: 0,
                expectedSize: 10,
            }
        ]; 
        testData.forEach(( {array, expectedSize, arg} ) => {
            it(`should return size ${expectedSize}`, () => {
                aList.myInit(array);
                aList.myPush(arg);
                
                assert.deepEqual(aList.size, expectedSize);
            });
        });
    });
    describe('myPop', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                expectedElement: 3, 
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                expectedElement: 6,
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expectedElement: 9
            }
        ]; 
        testData.forEach(( {array, expectedElement} ) => {
            it(`should return element ${expectedElement}`, () => {
                aList.myInit(array);
                
                assert.deepEqual(aList.myPop(), expectedElement);
            });
        });
    });

    describe('myShift', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                expectedElement: 1, 
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                expectedElement: 1,
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expectedElement: 1
            }
        ]; 
        testData.forEach(( {array, expectedElement, expectedSize} ) => {
            it(`should return element ${expectedElement}`, () => {
                aList.myInit(array);
                
                assert.deepEqual(aList.myShift(), expectedElement);
            });
        });
    });

    describe('myUnShift', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                arg: 0,
                expectedSize: 4,
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                arg: 0,
                expectedSize: 7,
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                arg: 0,
                expectedSize: 10,
            }
        ]; 
        testData.forEach(( {array, expectedSize, arg} ) => {
            it(`should return size ${expectedSize}`, () => {
                aList.myInit(array);
                aList.myPush(arg);
                
                assert.deepEqual(aList.size, expectedSize);
            });
        });
    });

    describe('myClear', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                expectedSize: 0,
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                expectedSize: 0,
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expectedSize: 0,
            }
        ]; 
        testData.forEach(( {array, expectedSize} ) => {
            it(`should return size ${expectedSize}`, () => {
                aList.myInit(array);
                aList.myClear();
                
                assert.deepEqual(aList.size, expectedSize);
            });
        });
    });
    describe('myRevers', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                expectedArray: [3, 2, 1],
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                expectedArray: [6, 5, 4, 3, 2, 1],
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expectedArray: [9, 8, 7, 6, 5, 4, 3, 2, 1]
            }
        ]; 
        testData.forEach(( {array, expectedArray} ) => {
            it(`should return reversed array ${expectedArray}`, () => {
                aList.myInit(array);
                aList.myRevers();
                
                assert.deepEqual(aList.array, expectedArray);
            });
        });
    });
    describe('mySlice', () => {
        const aList = new ArrayList();
        const testData = [
            {   
                array: [1, 2, 3],
                arg1: 1,
                expectedArray: [2, 3]
            }, 
            {   
                array: [1, 2, 3, 4, 5, 6],
                arg1: 1,
                arg2: 4,
                expectedArray: [2, 3, 4]
            },
            {
                array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                arg1: 3,
                arg2: 7,
                expectedArray: [4, 5, 6, 7],
            }
        ]; 
        testData.forEach(( {array, arg1, arg2, expectedArray} ) => {
            it(`should return sliced array ${expectedArray}`, () => {
                aList.myInit(array);
                
                assert.deepEqual(aList.mySlice(arg1, arg2), expectedArray);
            });
        });
    });
});