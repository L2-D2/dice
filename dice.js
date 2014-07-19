var Dice = new Object.prototype {
	this.numFaces = 6;
	this.faces = [1,2,3,4,5,6];
	this.roll = function() {
		var modifier = Math.floor((Math.random() * this.numFaces) - 1);
		return this.faces[modifier];
	}
};

function d6 = new Dice();

//~ returns an array with X elements, representing the individual rolls
//~ 	themselves for analysis.
function rollXTimes(die, x) {
	var rolls = new Array(x);
	for (var i = 0; i < x; i++) {
		rolls[i] = die.roll();
	}
	return rolls;
};

var roll1000 = rollXTimes(d6, 1000);

function findMedian(rollsArray) {
	var i = rollsArray[0];
	var isSmallerThan = function(element, index, array) {
		return (element >= i);
	}
	while (!rollsArray.every(isSmallerThan)) {
			




	
