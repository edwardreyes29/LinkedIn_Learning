// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 01

console.log("Before setTimeout")

// setTimeout is an asychronous function
setTimeout( function() {
    console.log("The function has been executed")
}, 3000)

console.log("After setTimeout") // executed right away.