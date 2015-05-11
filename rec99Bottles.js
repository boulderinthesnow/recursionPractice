module.exports = {

	//Define a function that takes an argument n and returns 
	//the lyrics to 99 bottles of beer on the wall, starting 
	//with that number n. For example, singSong(99) would 
	//print out the lyrics to 99 Bottles of Beer on the Wall.

	 recBottles: function(startBottles) { //99 bottles
	 	return (function recBottlesTwo(startBottles){
	 		if (startBottles === 0) {
	 			return 0;
	 		}
	 		if (startBottles > 0)
//		console.log (startBottles, "starbottles")
//		newArr.push("bottles of beer")
			console.log(startBottles + " bottles of beer on the wall");
			console.log(startBottles + " bottles of beer");
			console.log("take one down, pass it around");
			console.log(startBottles-1  + " bottles of beer on the wall! \n");
			return recBottlesTwo(startBottles-1)
		})(startBottles)
	}, // end of it all
	test: function(){
		return "YO"
	}

//	console.log(recBottles(10));

}