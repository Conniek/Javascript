const j = 3;

//j = 4 // can't reassign 

console.log(j);

const adding = function add() {
	const i = 4; 
	console.log(i + j); // can access to j // scope function
}

adding();
