// Define a function sumOfRange that takes a number x and returns the sum of all digits between 0 and x.

// Define a function sumOfRange that takes a number x and returns
// the sum of all digits between 0 and x.

// module.exports = {
// 	  sumMe: function(endPoint) {
// 	  		(function sumMe2(endPoint){
// 				if (endPoint === 1) {
// 					return 1

// 				} else {
// 					console.log (sumMe2(endPoint -1))
// 					return endPoint + sumMe2(endPoint -1)
// 			}
// 		})(endPoint)
// 	}


// }

// console.log(module.exports.sumMe(10))

var TakeTwo = function(x) {
	if (x === 1) {
		return 1
	} else {
		return x + TakeTwo(x-1)
	}

}

console.log(TakeTwo(3))