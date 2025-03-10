// Learning Functional Programming with Javascript
// Chapter 03, Video 05, Exercise 01
var _ = require('lodash')
var shoppingList = [
  { name: "Eggs",    price: 4.99 },
  { name: "Milk",    price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer",    price: 6.99 }
]

var totalCost = _.reduce(shoppingList, function(acc, item) {
  return acc + item.price
}, 0) // since the first element in array is an object, must set third arg
      // to zero to get accurate sum

console.log(totalCost)