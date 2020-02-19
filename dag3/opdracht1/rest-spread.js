const addMore = (x, y) => {
	// console.log(x);
	// console.log(y);

	return x + y;
};
const numArray = [5, 19];
console.log(addMore(...numArray));
//
//
//
const addAll = (...array) => {
	return array.reduce((total, current) => {
		return total + current;
	});
};

console.log(addAll(1, 2, 3, 4, 5, 6));
