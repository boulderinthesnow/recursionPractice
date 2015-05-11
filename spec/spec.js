var recBottles = require("../rec99Bottles.js");
//var bottles = require("../99Bottles.js");
var sumRange = require("../sumOfRange.js");
var recPowerVar = require("../recPower.js");

describe("recursive tests", function(){
	it("should return 0", function(){
		expect(recBottles.recBottles(10)).toEqual(0);
	})
	it("should return YO", function(){
		expect(recBottles.test()).toEqual("YO");
	})	
	it("should return 8, 32", function(){
		expect(recPowerVar.recPower(2,3)).toEqual(8);
		expect(recPowerVar.recPower(2,5)).toEqual(32);
	})	
	xit("sum of 1,2,3 should return 6, -1,3,5 should return 7", function(){
		expect(sumRange.CHANGEME([1,2,3])).toEqual(6);
		expect(sumRange.CHANGEME([-1,3,5])).toEqual(7);
	})		
	it("fib(5) should return 5", function(){
		expect(sumRange.CHANGEME(5)).toEqual(5);
		expect(sumRange.CHANGEME([-1,3,5])).toEqual(7);
	})	

})
