import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/

/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
export const allCarStats = {
    avgMpg: {
        city: mpg_data
            .map(carCity => carCity.city_mpg)
            .reduce((accumulator, value) => accumulator + value)/mpg_data.length,
        highway: mpg_data
            .map(carHighway => carHighway.highway_mpg)
            .reduce((accumulator, value) => accumulator + value)/mpg_data.length,
    },
    allYearStats: getStatistics(mpg_data
        .map(carYear => carYear.year)),
    ratioHybrids: mpg_data
        .filter(carHybrid => carHybrid.hybrid === true).length /mpg_data.length,
};


/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */
export const moreStats = {
    makerHybrids: mpg_data
        .filter(carHybrid => carHybrid.hybrid == true) // filter for only hybrid cars
        .reduce((accumulator, value) => {

            if (accumulator.findIndex(carYear => carYear.make == value.make) == -1){
            accumulator.push( { // creating our object w/ make and hybrids keys
                make: value.make,
                hybrids: mpg_data
                    .filter(carHybrid => carHybrid.hybrid == true && carHybrid.make == value.make) // match makes
                    .reduce((nextAccumulator, nextValue) => {
                    nextAccumulator.push(nextValue.id);
                    return nextAccumulator;
                },[])
                    .sort((x,y) => y - x), // sort in descending order
            });
        }
        return accumulator;
    }, []),
    avgMpgByYearAndHybrid: mpg_data
        .reduce((accumulator, value) => {

            accumulator[value.year] = { // creating our object with hybrid and not hybrid keys

            hybrid: { // contains city and highway keys
                city: mpg_data
                    .filter(carYear => carYear.year == value.year && carYear.hybrid) // filter hybrids
                    .reduce((nextAccumulator, nextValue, _, { length }) => {
                    return nextAccumulator + nextValue.city_mpg / length;
                }, 0),
                highway: mpg_data
                    .filter(carYear => carYear.year == value.year && carYear.hybrid) // filter hybrids
                    .reduce((nextAccumulator, nextValue, _, { length }) => {
                    return nextAccumulator + nextValue.highway_mpg / length;
                }, 0)
            },

            notHybrid: { // contains city and highway keys
                city: mpg_data
                    .filter(carYear => carYear.year == value.year && !carYear.hybrid) // filter non hybrids
                    .reduce((nextAccumulator, nextValue, _, { length }) => {
                    return nextAccumulator + nextValue.city_mpg / length;
                }, 0),

                highway: mpg_data
                    .filter(carYear => carYear.year == value.year && !carYear.hybrid) // filter non hybrids
                    .reduce((nextAccumulator, nextValue, _, { length }) => {
                    return nextAccumulator + nextValue.highway_mpg / length;
                }, 0)
            }
        }
        return accumulator;
    }, {})
};