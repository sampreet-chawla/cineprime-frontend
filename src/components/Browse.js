import './Browse.css';
import React from 'react';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';


function Browse( props ) {
	const handleSelectedMovie=props.handleSelectedMovie
	const history = props.history
	return (
	<div className="Browse">
        <Banner />

        <Row title="CINEPRIME ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} handleSelectedMovie={handleSelectedMovie} history={history}/>
		<Row title="Trending Now" fetchUrl={requests.fetchTrending} handleSelectedMovie={handleSelectedMovie} history={history}/>
		<Row title="Top Rated" fetchUrl={requests.fetchTopRated} handleSelectedMovie={handleSelectedMovie} history={history}/>
		<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} handleSelectedMovie={handleSelectedMovie} history={history}/>
		<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} handleSelectedMovie={handleSelectedMovie} history={history}/>
		<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} handleSelectedMovie={handleSelectedMovie} history={history}/>
		<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} handleSelectedMovie={handleSelectedMovie} history={history}/>
	</div>
	);
}

export default Browse;