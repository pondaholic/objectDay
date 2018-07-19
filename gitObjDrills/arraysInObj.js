const person = {
	name : 'John Doe',
	jobTitle : 'Accountant',
	boss : 'You'
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
		if (item.boss) {
			console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}.`)
//		console.log(item.jobTitle + ' : ' + item.name);
		} else { 
			console.log(`${item.jobTitle} ${item.name} doesn't report to anybody.`)
		}
	}
	);
}

iterate(array);

const dinner = {
	meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

const hobbitdinner = dinner.meals[3];
console.log(hobbitdinner);