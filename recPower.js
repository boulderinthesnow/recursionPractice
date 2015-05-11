module.exports = {
	 recPower: function(num,exp) {
	 		return function newRecPower(num,exp) {
				if (exp === 1) {
					console.log ("base of", num, "to the", exp,"power --- AKA",num)
				//	throw "a goose"
					return num
				} else {
					console.log("handing back",num,'*', newRecPower(num,exp - 1))
					return num * newRecPower(num,exp - 1);
				} // end if statement

		}(num,exp); // end newRecPower
	} // end recPower
}
//console.log(recPower(3,2));

console.log(module.exports.recPower(3,3))

//  module.exports = {
//     powerR: function(num, power) {
//         return function powerRTwo(num, power){
//                 if (power === 1) {
//                     return num;
//                 } else {
//                    return num * powerRTwo(num, power-1);
//                 } // end if statement
//         }(num, power); // end powerRTwo
//     } // end powerR
// }; // end module.exports