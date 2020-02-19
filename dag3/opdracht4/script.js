// const listIntoDom = (id, name) => {
// 	let ul = document.getElementById('genre-list');
// 	ul.innerHTML = `<li>ID: ${id} SOORT:  ${name}`;
// };

getGenres = async () => {
	try {
		const apiUrl =
			'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY;
		const res = await fetch(apiUrl, {
			method: 'GET'
		});
		console.log('json fetched');
		const data = await res.json();
		console.log(JSON.stringify(data.genres));
		return data;
	} catch {
		console.log('Oops an error: ', err);
	}
};

const callApi = async () => {
	movieGenres = await getGenres();
	const genres = movieGenres.genres;
	const listIntoDom = await genres.forEach(genre => {
		console.log(genre);
		let ul = document.getElementById('genre-list');

		ul.appendChild(
			document.createElement('li')
		).innerHTML = `genre naam:  ${genre.name}, id: ${genre.id}`;
	});
};

callApi();
