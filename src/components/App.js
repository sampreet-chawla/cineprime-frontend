import './App.css';
import Watchlist from './Watchlist';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route
					path='/watchlist'
					render={(routerProps) => <Watchlist {...routerProps} user='Gore' />}
				/>
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
