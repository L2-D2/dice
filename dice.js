var Dice = new Object(numFaces) {
	this.numFaces = numFaces;
	this.faces = new Array(numFaces);
	for (var i = 1; i <= numFaces; i++) {
		this.faces[i-1] = i;
	} 
	this.roll = function() {
		var modifier = Math.floor((Math.random() * this.numFaces) - 1);
		return this.faces[modifier];
	}
};

function d6 = new Dice(6);
function d20 = new Dice(20);


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

function countResults(rollsArray) {
	var results = new Object();
//~ if the current element of rollsArray is a key in results, add 1 to the value.
//~ if not, create a new key in results and set the value to 1.
	for (var i = 0; i < rollsArray.length; i++) {
		if (results.hasOwnProperty(rollsArray[i]) {
			results.rollsArray[i] += 1;
		} else {
			results.rollsArray[i] = 1;
		};
	};
	return results;
};
		
//~ returns a string of which die rolls greater, or tie.
function dieFight(dieA, dieB) {
	var first = dieA.roll();
	var second = dieB.roll();
	if (first >second) return 'dieA';
	else if (second > first) return 'dieB';
	else return 'tie'
};



