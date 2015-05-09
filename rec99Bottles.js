//Define a function that takes an argument n and returns 
//the lyrics to 99 bottles of beer on the wall, starting 
//with that number n. For example, singSong(99) would 
//print out the lyrics to 99 Bottles of Beer on the Wall.

var recBottles = function (startBottles) {
	if (startBottles === 0) {
		return "You're drunk, go home"
	}
if (startBottles > 0)
	console.log (startBottles + " bottles of beer on the wall");
	console.log (startBottles + " bottles of beer");
	console.log ("take one down, pass it around");
	console.log (startBottles-1  + " bottles of beer on the wall! \n");
	return recBottles(startBottles-1)

}

console.log(recBottles(999));

