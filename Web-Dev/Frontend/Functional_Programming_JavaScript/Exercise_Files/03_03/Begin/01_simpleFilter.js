// Learning Functional Programming with Javascript
// Chapter 03, Video 03, Exercise 01
var _ = require('lodash')
var numbers = [ 1, 2, 3, 4, 5 ]
// var evensFromNumbers = [ ]
var evensFromNumbers = _.filter(numbers, function(element) {
  return element % 2 === 0
})

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i]
//   if (element % 2 === 0) {
//     evensFromNumbers.push(element)
//   }
// }

console.log(evensFromNumbers)
