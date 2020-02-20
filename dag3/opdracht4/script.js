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
		//console.log('json fetched');
		const data = await res.json();
		//console.log(JSON.stringify(data.genres));
		return data;
	} catch {
		console.log('Oops an error: ', err);
	}
};

//haal lijst object op
const getObject = async (url, list) => {
	console.log(url);
	try {
		const res = await fetch(url, {
			method: 'GET'
			//headers: ''
		});
		//console.log('json fetched');
		const data = await res.json();
		dataObject = JSON.stringify(data);
		//console.log(dataObject);
		formatData(dataObject, list);
	} catch {
		console.log('Oops an error: ');
	}
};
//

const callApi = async () => {
	movieGenres = await getGenres();
	const genres = movieGenres.genres;
	const listIntoDom = await genres.forEach(genre => {
		//console.log(genre);
		let ul = document.getElementById('genre-list');

		ul.appendChild(
			document.createElement('li')
		).innerHTML = `genre naam:  ${genre.name}, id: ${genre.id}`;
	});
};

//maak hapklare data van Object
const formatData = async (moviedata, list) => {
	//console.log('regel56: ', url);
	//retrievedData = await getObject(url);
	movieArray = JSON.parse(moviedata).results;
	console.log(movieArray);
	dataToDom(movieArray, list);
};

//plaats lijst in DOM
const dataToDom = async (movies, list) => {
	//console.log(movies);
	await movies.forEach(movie => {
		console.log(`genre naam:  ${movie.title}, id: ${movie.id}`);
		let ul = document.getElementById(list);

		ul.appendChild(
			document.createElement('li')
		).innerHTML = `${movie.vote_average} - ${movie.title}, id: ${movie.id}`;
	});
};

callApi();

const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
getObject(topRated, 'top-rated-movies');
const topRatedAction = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=28`;
getObject(topRatedAction, 'top-rated-action-movies');
const topRatedOldies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975`;
getObject(topRatedOldies, 'top-rated-oldies');
