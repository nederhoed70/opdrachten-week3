const wait = new Promise((resolve, reject) => {
	let num = Math.random();
	setTimeout(resolve, 4000, num);
});

wait.then(num => console.log(num));
