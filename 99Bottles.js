
 function Bottles(x) {
 	startBottles = x
	for (i = x ; i > 0 ; i--) {
		console.log(i + " bottles of beer on the wall");
		console.log(i + " bottles of beer");
		console.log("take one down, pass it around");
		console.log(i-1  + " bottles of beer on the wall! \n");
	}
}

Bottles(5);