
var sumOfRange = function(x) {
	var total = 0
	for (i = 1 ; i < x ; i++) {
		console.log (total,":total", i,":i")
		total += i
	}
	return total
}

console.log(sumOfRange(4))

// 1,2,3 === 6