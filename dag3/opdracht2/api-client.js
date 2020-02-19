const API_KEY = '';

getData = async () => {
	try {
		const apiUrl =
			'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY;
		const res = await fetch(apiUrl, {
			method: 'GET'
		});
		console.log('json fetched');
		const data = await res.json();
		console.log(data.genres[0].name);
		return data.genres;
	} catch {
		console.log('Oops an error: ', err);
	}
};
