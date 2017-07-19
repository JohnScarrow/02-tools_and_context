'use strict';
var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var testArray2 =testArray.reverse();


// materials.map((material) => {
//   return material.length;
// });

var map = ((arr, callback) => {
  if(!arr) throw new Error('test array not assigned');
  return Array.prototype.map.call(arr, callback);
});

var filter = ((arr, callback) => {
  if(!arr) throw new Error('test array not assigned in filter');
  return Array.prototype.filter.call(arr, callback);
});

var reduce = ((arr, callback) => {
  if(!arr) throw new Error('test array not assigned in filter');
  return Array.prototype.reduce.call(arr, callback);
});

var concat = (arr, callback) => {
  if(!arr) throw new Error('test array not assigned in concat');
  return Array.prototype.concat.call(arr, callback);
};

var splice = (arr, start, callback, items) => {
  if(!arr) throw new Error('test array not assigned in splice');
  Array.prototype.splice.call(arr, start, callback, ...items);
  return arr;
};

