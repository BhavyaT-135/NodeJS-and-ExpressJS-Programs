const _ = require('lodash');
//For using external packages, we must install them first.

const items = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];

const newItems = _.flattenDeep(items);
//flattenDeep will flatten the array and return a new array.

console.log(newItems);