const j = 3;
const i= 2;
const x = 4;
const y = 5;
//j = 4 // can't reassign 

console.log(j+i);
console.log(x);
const adding = function add() {
	const i = 4; 
	console.log(i + j); // can access to j // scope function
}

adding();
