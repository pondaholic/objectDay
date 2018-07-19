const properties = {
	foo: 12,
	bar: 13,
	fum: 90,
	quux: 101,
	spam: 3
};

function loopingObj(obj) {
	for (const key in obj) {
		console.log(key + ' is ' + obj[key]);
	}
}

loopingObj(properties);
