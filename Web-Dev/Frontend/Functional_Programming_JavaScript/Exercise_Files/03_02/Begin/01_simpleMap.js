// Learning Functional Programming with Javascript
// Chapter 03, Video 02, Exercise 01

var _ = require('lodash');

var numbers = [ 1, 2, 3, 4, 5 ]
// var numbersCubed = [ ]
var numbersCubed = _.map(numbers, function(element) {
  return element * element * element;
})

console.log(numbersCubed);

// this method is prone to off-by-one errors and must
// put into consideration whether an element is in the array.
// for(var i = 0; i < numbers.length; i++) {
//   var element = numbers[i]
//   numbersCubed.push(element * element * element)
// }

