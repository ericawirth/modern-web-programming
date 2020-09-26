/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return(a + " + " + b + " = " + (a+b));
}

console.log(sumToString(3,4));

/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let array = [];
    if (startNumber > endNumber) {
        return(array);
    } else {
        array.length = (endNumber-startNumber+1);
        for (let i = 0; i < array.length; i++) {
            array[i] = startNumber;
            startNumber++;
        }
        return(array);
    }
}

console.log(getIncreasingArray(3,7));

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

export function maxAndMin(numbers) {
    let obj = {
        max: Math.max(...numbers),
        min: Math.min(...numbers),
    };
    return obj;
}

console.log(maxAndMin([3,4,5,7]));

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let count = { };
    for (let i = 0; i < array.length; i++) {
        if (!count[array[i]])
                count[array[i]] = 0;
                count[array[i]]++;
    }
    return count;
}

console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));