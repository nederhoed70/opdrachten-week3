//
// Async await
//
async function toBeAsynced() {
	try {
		//try voor zaken die kunnen failen (error)
		const timeConsuming = await doTimeConsumingThings(arguments);
		console.log('status completed');
		const oneMoreTimeConsumingFunction = doMoreTimeConsumingThings(
			anotherArgument
		);
		console.log('status of that^');
	} catch {
		//catch voor zaken die je on error wilt uitvoeren
		console.log(err);
	}
}

//combi met Promise.all
// wait for the array of results
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    ...
  ]);