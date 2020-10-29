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

function App(props) {
	const tokenValue =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdvcmUiLCJpYXQiOjE2MDM5NDQwMzZ9.ceRuooBqVHbcvmo8OyGmq9We7iYIYNmBJT5QfYwq5bs';

	const [token, setToken] = React.useState(tokenValue);
	const [user, setUser] = React.useState('Gore');

	return (
		<div className='App'>
			<Header user={user} token={token} />

			<Switch>
				<Route
					path='/'
					exact={true}
					render={(routerProps) => (
						<Browse {...routerProps} user={user} token={token} />
					)}
				/>
				<Route
					path='/watchlist'
					exact={true}
					render={(routerProps) => (
						<Watchlist {...routerProps} user={user} token={token} />
					)}
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
