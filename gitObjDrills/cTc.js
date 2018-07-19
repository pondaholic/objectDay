const cipher = {
	a : 2,
	b : 3,
	c : 4,
	d : 5,
};

//console.log(cipher.a)

const message = 'craft block argon meter bells brown croon droop';

function decode(word) {
	let decoded = '';
	for (const key in cipher) {
		if (word.charAt(0) === key) {
			decoded += word.charAt(cipher[key] -1);
    }
    if (word.charAt(0) !== key) {
      decoded += ' ';
    }
	}
	return decoded;
}

//console.log(decode('mouse'));

function decodeWords(string) {
  const newArr = string.split(' ');
  let decoded = '';
	//  console.log(newArr);
	for (let i=0; i<newArr.length; i++) {
    decoded += decode(newArr[i]);
  }
  return decoded;
}

console.log(decodeWords(message));