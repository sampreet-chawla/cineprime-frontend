import './Browse.css';
import React from 'react';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';


function Browse({ props }) {
	return (
	<div className="Browse">
        <Banner />

        <Row title="CINEPRIME ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
		<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
		<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
		<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
		<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
		<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
		<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
	</div>
	);
}

export default Browse;