const callApi = async () => {
	movieGenres = await getData();
	const genres = JSON.stringify(movieGenres);
	console.log(genres);

	document.body.innerHTML = genres;
};
callApi();
//document.body.innerHTML.
