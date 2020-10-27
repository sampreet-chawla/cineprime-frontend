import React from 'react';
import './App.css';
import Watchlist from './Watchlist'
import { Route, Switch } from "react-router-dom";
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';

function App({ props }) {
	return (
	<div className="App">
    <h1>Navbar Place Holder</h1>
    <Switch>
      <Route
					path='/watchlist'
					render={(routerProps) => <Watchlist {...routerProps} user='Gore' />}
          />
    </Switch>
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

export default App;