const person = {
	name : 'John Doe',
	jobTitle : 'Accountant'
};

const person2 = {
	name : 'Barack Obama',
	jobTitle : 'President'
};

const person3 = {
	name : 'Stephen King',
	jobTitle : 'Writer'
};

const array = [person, person2, person3]
//console.log(array);

function iterate(arr) {
	arr.forEach(item => {
		console.log(item.jobTitle + ' : ' + item.name);
	}
	);
}

iterate(array);