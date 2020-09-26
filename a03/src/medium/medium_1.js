import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
 return array.reduce((x, y) => x + y, 0)
}

/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
 let sortedArray = array.slice().sort((x,y) => x-y);
 let median = Math.floor(sortedArray.length/2);
 // check
 if (sortedArray.length % 2 === 0) {
  return (sortedArray[median-1] + sortedArray[median])/2;
 }
 return sortedArray[median];
}

let array = [3,2,5,6,2,7,4,2,7,5];
console.log(getMedian(array));

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */

export function getStatistics(array) {
 let stat = {min: Math.min(...array),
  median: getMedian(array),
  max: Math.max(...array),
  variance: (getStdDev(array) * getStdDev(array)),
  mean: getMean(array),
  length: array.length,
  sum: getSum(array),
  standard_deviation: getStdDev(array),
 };
 return stat;
}

console.log(getStatistics([3,2,4,5,5,5,2,6,7]));

function getStdDev(array) {
 let mean = getMean(array);
 let std_dev = Math.sqrt(array
     .map(x => Math.pow(x-mean, 2)).reduce((a,b) => a+b)/array.length)
 return std_dev;
}

function getMean(array) {
 let total = getSum(array);
 let avg = total/array.length;
 return avg;
}

