// api.tronalddump.io/random/quote
const quoteMeme = 'quote';
const getDataFromApi = async quoteMeme => {
	try {
		const apiUrl = `https://api.tronalddump.io/random/${quoteMeme}`;
		const res = await fetch(apiUrl, {
			method: 'GET',
			object: 'accept'
		});
		console.log('json fetched');
		const data = await res.json();
		//console.log(data);

		putDataInDom(data, quoteMeme);
	} catch {
		console.log('Oops an error: ', error);
	}
};

const putDataInDom = async (trumpQuote, qouteMeme) => {
	console.log(trumpQuote.value);
	if (quoteMeme === 'quote') {
		const htmlHeader = document.getElementById('trumpquote');
		//console.log(h1);

		htmlHeader.innerHTML = `"${trumpQuote.value}"`;
	} else {
		document.innerHTML = trumpQuote;
	}
};

const listenToEvents = () => {
	const trumpHead = document.getElementById('hit-me');
	const trumpSlider = document.getElementById('trump-slider');

	const listen = () => {
		trumpHead.addEventListener('click', event => {
			getDataFromApi('quote');
		});
		trumpSlider.addEventListener('click', event => {
			console.log('slider moved');
			switchPage('meme');
		});
	};
	listen();
};
const switchPage = status => {
	const htmlMain = document.getElementById('main');
	const htmlHeader = document.getElementById('trumpquote');
	//console.log(h1);
	if (status == 'meme') {
		htmlMain.innerHTML = '';
		htmlHeader.innerHTML = '';
	} else {
		htmlMain.innerHTML = '';
		console.log('quote');
	}
};

listenToEvents();
getDataFromApi('quote');
