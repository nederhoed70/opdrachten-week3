const testNum = number => {
	return new Promise((resolve, reject) => {
		if (number <= 10) {
			resolve('kleiner dan 10');
		} else {
			reject('groter dan 10');
		}
	});
};

console.log(testNum(5));
// opdr 2

const makeAllCaps = array => {
	return new Promise((resolve, reject) => {
		if (
			array.every(word => {
				return typeof word === 'string';
			})
		) {
			resolve(
				sortWords(
					array.map(word => {
						return word.toUpperCase();
					})
				)
			);
		} else {
			reject('Not a string!');
		}
	});
};

const sortWords = array => {
	return new Promise((resolve, reject) => {
		if (array) {
			resolve(array.sort());
		} else {
			reject('strings only!');
		}
	});
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];
//console.log(makeAllCaps(arrayOfWords));
//console.log(sortWords(arrayOfWords));
makeAllCaps(arrayOfWords)
	.then(sortWords(arrayOfWords))
	.then(result => console.log(result))
	.catch(error => console.log(error));

makeAllCaps(complicatedArray)
	.then(sortWords(complicatedArray))
	.then(result => console.log(result))
	.catch(error => console.log(error));
