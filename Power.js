
var power = function(x) {
	var total = 0
	for (i = 0 ; i < x ; i++) {
		console.log (total, i)
		total += i
	}
}

console.log(power(4))