const j = 3;
const i= 2;
//j = 4 // can't reassign 

console.log(j+i);

const adding = function add() {
	const i = 4; 
	console.log(i + j); // can access to j // scope function
}

adding();
