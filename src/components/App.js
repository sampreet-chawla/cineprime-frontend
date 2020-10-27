import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Watchlist from './Watchlist';
import Browse from './Browse';
import Team from './Team';
import Signup from './Signup';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
import Header from './Header';

function App({ props }) {
	return (
		<div className='App'>
			<Header />

			<Switch>
				<Route
					path='/'
					exact={true}
					render={(routerProps) => <Browse {...routerProps} />}
				/>
				<Route
					path='/watchlist'
					exact={true}
					render={(routerProps) => <Watchlist {...routerProps} user='Gore' />}
				/>
				<Route
					path='/team'
					exact={true}
					render={(routerProps) => <Team {...routerProps} />}
				/>
				<Route
					path='/signup'
					exact={true}
					render={(routerProps) => <Signup {...routerProps} />}
				/>
				<Route
					path='/moviedetails'
					exact={true}
					render={(routerProps) => <MovieDetails {...routerProps} />}
				/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
